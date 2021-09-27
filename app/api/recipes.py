from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Recipe, Category, db, RecipeDirection, RecipeIngredient, RecipePhoto
from app.forms import (
    RecipeCreateForm, RecipeDirectionsCreateForm, RecipeIngredientsCreateForm,
    RecipePhotosCreateForm, RecipeDirectionsUpdateForm, RecipeIngredientsUpdateForm
)
from app.api.utils.error_handlers import validation_errors_to_error_messages, authorization_errors_to_error_messages, input_errors_to_error_messages

recipe_routes = Blueprint('recipes', __name__)


def current_user_matches_client_user(user_sent_id):
    # move to utils later
    if current_user:
        return user_sent_id == current_user.id
    print("current_user is not logged in or invalid user")
    return False


def current_recipe_id_belongs_to_user(recipe_id, current_user_id):
    recipe_to_check = Recipe.query.get(recipe_id)
    return recipe_to_check and recipe_to_check.user_id == current_user_id


def direction_belongs_to_user_recipe(directionId, users_recipe_id):
    # refactor to use below
    direction_to_check = RecipeDirection.query.get(directionId)
    return direction_to_check and direction_to_check.recipe_id == users_recipe_id


def item_belongs_to_user_recipe(itemId, users_recipe_id, classObj):
    item_to_check = classObj.query.get(itemId)
    return item_to_check and item_to_check.recipe_id == users_recipe_id

# ---------------recipes query routes-----------------


@recipe_routes.route('/', methods=['GET'])
def get_all_recipes():
    all_recipes = Recipe.query.limit(30).all()
    return {'recipes': [recipe.get_users_recipes() for recipe in all_recipes]}

# TODO
# need to add created date and end date to recipe
# @recipe_routes.route('/new') #order by new
# def get_recipes_by_new():


@recipe_routes.route('/users/<int:id>', methods=['GET'])
# gets all recipes for a given user ID
def get_all_recipes_for_a_user(id):
    all_recipes_for_user = Recipe.query.filter_by(user_id=id).all()
    return {'recipes': [recipe.get_users_recipes() for recipe in all_recipes_for_user]}


@recipe_routes.route('/page/<int:page>', methods=['GET'])
# pagination, get recipes based on which page given
def get_recipes_by_page(page=1):
    per_page = 30  # change to 10 or more later
    recipes = Recipe.query.paginate(page, per_page, error_out=False)
    return {'recipes': [recipe.get_users_recipes() for recipe in recipes.items]}


@recipe_routes.route('/<int:id>', methods=['GET'])
# gets a single recipe based on id
def get_single_recipe(id):
    single_recipe = Recipe.query.get(id)
    # print("lazy loaded", single_recipe.photo_relation)
    return single_recipe.get_recipes_with_all_relationship()

# -----categories + recipes-----


@recipe_routes.route('/categories', methods=['GET'])
def get_all_categories_and_details():
    all_categories = Category.query.all()
    return {'categories': [category.to_dict() for category in all_categories]}


@recipe_routes.route('/category/<string:name>', methods=['GET'])
def get_all_recipes_based_on_name(name):
    category_by_name = Category.query.filter_by(name=name).one()
    return {'categories': category_by_name.to_dict_recipes_for_a_category()}


# @recipe_routes.route('/category/<int:id>', methods=['GET'])
# # gets all recipes for a given category
# def get_all_recipes_for_a_given_category(category):
#     all_recipes_for_category = Recipe.query.filter_by(user_id=id).all()
#     return {'recipes': [recipe.get_users_recipes() for recipe in all_recipes_for_category]}

# -------------------------------


# ---------------recipes CRUD route-----------------


@recipe_routes.route('/', methods=['POST'])
@login_required
def create_recipe_post():
    form = RecipeCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if current_user_matches_client_user(form.user_id.data):
            # print("categories", form['categories_relations'].data)
            create_recipe = Recipe()
            create_recipe.user_id = form.user_id.data
            create_recipe.name = form.name.data
            create_recipe.thumbnail_url = form.thumbnail_url.data

            for category in form['categories_relations'].data:
                # print("this", type(category))
                categoryInstance = Category.query.filter_by(
                    name=category).one()
                create_recipe.categories_relations.append(categoryInstance)
            db.session.add(create_recipe)
            db.session.commit()
            return create_recipe.to_dict()
        return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@recipe_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def recipe_update_delete(id):
    if request.method == 'PUT':
        form = RecipeCreateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if current_user_matches_client_user(form.user_id.data):
                recipe_by_id = Recipe.query.get(id)
                form.populate_obj(recipe_by_id)
                db.session.add(recipe_by_id)
                db.session.commit()
                return recipe_by_id.to_dict()
            return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")
    elif request.method == 'DELETE':
        recipe_to_delete = Recipe.query.get(id)
        if recipe_to_delete and (recipe_to_delete.user_id == current_user.id):
            db.session.delete(recipe_to_delete)
            db.session.commit()
            return {'message': 'Recipe Deleted'}
        return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# # ---------------recipes_directions CRUD routes-----------------


@recipe_routes.route('/<int:id>/directions', methods=['GET'])
# gets all recipes for a given user ID
def get_all_recipes_directions_for_a_recipe(id):
    all_recipes_directions_for_recipe = RecipeDirection.query.filter_by(
        recipe_id=id).all()
    return {'recipes_directions': [directions.to_dict() for directions in all_recipes_directions_for_recipe]}


@recipe_routes.route('/directions/<int:id>', methods=['GET'])
# gets a single direction for a given directionID
def get_directions_by_id(id):
    single_direction = RecipeDirection.query.get(id)
    single_direction_user = single_direction.get_direction_user()
    return {'recipes_directions': single_direction.to_dict(), 'user_that_owns_direction': single_direction_user}


@recipe_routes.route('/<int:recipeId>/directions', methods=['POST'])
@login_required
# adds a direction a recipe
def add_single_direction(recipeId):
    form = RecipeDirectionsCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = Recipe.query.get(form.recipe_id.data).user_id

    if form.validate_on_submit():
        if current_user_matches_client_user(user_id) and current_recipe_id_belongs_to_user(form.recipe_id.data, current_user.id):
            if RecipeDirection.step_is_valid(form.recipe_id.data, form.steps.data):
                add_a_direction = RecipeDirection()
                form.populate_obj(add_a_direction)
                db.session.add(add_a_direction)
                db.session.commit()
                return add_a_direction.to_dict()
            return input_errors_to_error_messages("Please enter the correct step")
        return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@recipe_routes.route('/<int:recipeid>/directions/<int:directionId>', methods=['PUT', 'DELETE'])
@login_required
def update_delete_direction(recipeid, directionId):
    # TODO add ability to change steps later. Currently only able to update content
    if request.method == 'PUT':
        form = RecipeDirectionsUpdateForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            # Validate and check that direction belongs to this recipe and the recipe belongs to user
            if current_recipe_id_belongs_to_user(form.recipe_id.data, current_user.id) and direction_belongs_to_user_recipe(directionId, form.recipe_id.data):
                direction_by_id = RecipeDirection.query.get(directionId)
                form.populate_obj(direction_by_id)
                db.session.add(direction_by_id)
                db.session.commit()
                return direction_by_id.to_dict()
            return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")
    elif request.method == 'DELETE':
        direction_to_delete = RecipeDirection.query.get(directionId)
        user_that_owns_direction = direction_to_delete.get_direction_user()
        if direction_to_delete:
            if user_that_owns_direction == current_user.id:
                db.session.delete(direction_to_delete)
                db.session.commit()
                return {'message': 'Direction Deleted'}
        return authorization_errors_to_error_messages("Can't delete, invalid user")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# ---------------recipes_ingredients CRUD routes-----------------

@recipe_routes.route('/<int:id>/ingredients', methods=['GET'])
# gets all recipes for a given recipe ID
def get_all_recipes_ingredients_for_a_recipe(id):
    all_recipes_ingredients_for_recipe = RecipeIngredient.query.filter_by(
        recipe_id=id).all()
    return {'recipes_ingredients': [ingredients.to_dict() for ingredients in all_recipes_ingredients_for_recipe]}


@recipe_routes.route('/<int:recipeId>/ingredients', methods=['POST'])
@login_required
# add a single ingredient with the given recipe id
def add_single_ingredients(recipeId):
    form = RecipeIngredientsCreateForm()
    user_id = Recipe.query.get(form.recipe_id.data).user_id
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if current_user_matches_client_user(user_id) and current_recipe_id_belongs_to_user(form.recipe_id.data, current_user.id):
            add_an_ingredient = RecipeIngredient()
            form.populate_obj(add_an_ingredient)
            db.session.add(add_an_ingredient)
            db.session.commit()
            return add_an_ingredient.to_dict()
        return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@recipe_routes.route('/<int:recipeId>/ingredients/<int:ingredientId>', methods=['PUT', 'DELETE'])
@login_required
def update_delete_ingredient(recipeId, ingredientId):
    if request.method == 'PUT':
        form = RecipeIngredientsUpdateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            if current_recipe_id_belongs_to_user(form.recipe_id.data, current_user.id) and item_belongs_to_user_recipe(ingredientId, form.recipe_id.data, RecipeIngredient):
                ingredient_by_id = RecipeIngredient.query.get(ingredientId)
                form.populate_obj(ingredient_by_id)
                db.session.add(ingredient_by_id)
                db.session.commit()
                return ingredient_by_id.to_dict()
    if request.method == 'DELETE':
        ingredient_to_delete = RecipeIngredient.query.get(ingredientId)
        user_that_owns_ingredient = ingredient_to_delete.get_ingredient_user()
        if ingredient_to_delete:
            if user_that_owns_ingredient == current_user.id:
                db.session.delete(ingredient_to_delete)
                db.session.commit()
                return {'message': 'Ingredient Deleted'}
        return authorization_errors_to_error_messages("Can't delete, invalid user")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# ---------------recipes_photos CRUD routes-----------------


@recipe_routes.route('/<int:id>/photos', methods=['GET'])
# gets all recipes for a given user ID
def get_all_recipes_photos_for_a_recipe(id):
    all_recipes_photos_for_recipe = RecipePhoto.query.filter_by(
        recipe_id=id).all()
    return {'recipes_videos_photos': [photo.to_dict() for photo in all_recipes_photos_for_recipe]}


@recipe_routes.route('/<int:recipeId>/photos', methods=['POST'])
@login_required
def add_photo_video(recipeId):
    form = RecipePhotosCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = Recipe.query.get(form.recipe_id.data).user_id
    if form.validate_on_submit():
        if current_user_matches_client_user(user_id) and current_recipe_id_belongs_to_user(form.recipe_id.data, current_user.id):
            add_photo_and_video = RecipePhoto()
            form.populate_obj(add_photo_and_video)
            db.session.add(add_photo_and_video)
            db.session.commit()
            return add_photo_and_video.to_dict()
        return authorization_errors_to_error_messages("Please try to post as yourself! Unauthorized Access.")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@recipe_routes.route('/<int:recipeid>/photos/<int:photoId>', methods=['PUT', 'DELETE'])
@login_required
def update_photo_video(recipeid, photoId):
    # add authorization
    if request.method == 'PUT':
        form = RecipePhotosCreateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        # TODO AUTHORIZATION ensure that the recipeId and photos belongs to user. (maybe do it in the form)
        if form.validate_on_submit():
            if current_recipe_id_belongs_to_user(form.recipe_id.data, current_user.id) and item_belongs_to_user_recipe(photoId, form.recipe_id.data, RecipePhoto):
                photovideo_by_id = RecipePhoto.query.get(photoId)
                form.populate_obj(photovideo_by_id)
                db.session.add(photovideo_by_id)
                db.session.commit()
                return photovideo_by_id.to_dict()
    elif request.method == 'DELETE':
        photovideo_to_delete = RecipePhoto.query.get(photoId)
        user_that_owns_photo = photovideo_to_delete.get_photo_user()
        if photovideo_to_delete:
            if user_that_owns_photo == current_user.id:
                db.session.delete(photovideo_to_delete)
                db.session.commit()
                return {'message': 'Photo Deleted'}
        return authorization_errors_to_error_messages("Can't delete, invalid user")
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
