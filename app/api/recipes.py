from flask import Blueprint, request
from flask_login import login_required
from app.models import Recipe, db, RecipeDirection, RecipeIngredient, RecipePhoto
from app.forms import RecipeCreateForm, RecipeDirectionsCreateForm


recipe_routes = Blueprint('recipes', __name__)


def validation_errors_to_error_messages(validation_errors):
    # helper function to collect and display errors
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# ---------------recipes query routes-----------------


@recipe_routes.route('/', methods=['GET'])
def get_all_recipes():
    all_recipes = Recipe.query.limit(5).all()
    return {'recipes': [recipe.to_dict() for recipe in all_recipes]}

# TODO
# need to add created date and end date to recipe
# @recipe_routes.route('/new') #order by new
# def get_recipes_by_new():


@recipe_routes.route('/users/<int:id>', methods=['GET'])
# gets all recipes for a given user ID
def get_all_recipes_for_a_user(id):
    all_recipes_for_user = Recipe.query.filter_by(user_id=id).all()
    return {'recipes': [recipe.to_dict() for recipe in all_recipes_for_user]}


@recipe_routes.route('/page/<int:page>', methods=['GET'])
# pagination, get recipes based on which page given
def get_recipes_by_page(page=1):
    per_page = 2  # change to 10 or more later
    recipes = Recipe.query.paginate(page, per_page, error_out=False)
    return {'recipes': [recipe.to_dict() for recipe in recipes.items]}


@recipe_routes.route('/<int:id>', methods=['GET'])
# gets a single recipe based on id
def get_single_recipe(id):
    single_recipe = Recipe.query.get(id)
    # print("lazy loaded", single_recipe.photo_relation)
    return single_recipe.get_recipes_with_all_relationship()


# ---------------recipes CRUD route-----------------


@recipe_routes.route('/', methods=['POST'])
@login_required
def create_recipe_post():
    form = RecipeCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # TODO ensure that the current user is the correct one
    if form.validate_on_submit():
        create_recipe = Recipe()
        form.populate_obj(create_recipe)
        db.session.add(create_recipe)
        db.session.commit()
        return create_recipe.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@recipe_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def recipe_update_delete(id):
    # add authorization
    if request.method == 'PUT':
        form = RecipeCreateForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        # TODO ensure that the current user is the correct one
        if form.validate_on_submit():
            recipe_by_id = Recipe.query.get(id)
            form.populate_obj(recipe_by_id)
            db.session.add(recipe_by_id)
            db.session.commit()
            return recipe_by_id.to_dict()
    elif request.method == 'DELETE':
        recipe_to_delete = Recipe.query.get(id)
        if recipe_to_delete:
            db.session.delete(recipe_to_delete)
            db.session.commit()
            return {'message': 'Recipe Deleted'}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# ---------------recipes_directions CRUD routes-----------------


@recipe_routes.route('/<int:id>/directions', methods=['GET'])
# gets all recipes for a given user ID
def get_all_recipes_directions_for_a_recipe(id):
    all_recipes_directions_for_recipe = RecipeDirection.query.filter_by(
        recipe_id=id).all()
    return {'recipes_directions': [directions.to_dict() for directions in all_recipes_directions_for_recipe]}


@recipe_routes.route('/<int:recipeId>/recipe-directions', methods=['POST'])
@login_required
def add_single_direction(recipeId):
    form = RecipeDirectionsCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # TODO AUTHORIZATION ensure that the recipeId and instructions belongs to user. (write instance method: authorized_user_valid)
    if form.validate_on_submit():
        add_a_direction = RecipeDirection()
        form.populate_obj(add_a_direction)
        db.session.add(add_a_direction)
        db.session.commit()
        return add_a_direction.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @recipe_routes.route('/<int:recipeid>/directions/<int:directionId>', methods=['PUT', 'DELETE'])
# @login_required
# def update_delete_direction(recipeid, directionId):
#     # add authorization
#     if request.method == 'PUT':
#         form = RecipeDirectionsCreateForm()
#         form['csrf_token'].data = request.cookies['csrf_token']
#         # TODO AUTHORIZATION ensure that the recipeId and instructions belongs to user.
#         if form.validate_on_submit():
#             direction_by_id = RecipeDirection.query.get(directionId)
#             form.populate_obj(direction_by_id)
#             db.session.add(direction_by_id)
#             db.session.commit()
#             return direction_by_id.to_dict()
#     elif request.method == 'DELETE':
#         direction_to_delete = RecipeDirection.query.get(id)
#         if direction_to_delete:
#             db.session.delete(direction_to_delete)
#             db.session.commit()
#             return {'message': 'Direction Deleted'}

#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# ---------------recipes_ingredients CRUD routes-----------------


# ---------------recipes_photos CRUD routes-----------------
