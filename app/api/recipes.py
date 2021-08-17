from flask import Blueprint
from flask_login import login_required
from app.models import Recipe

recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route('/', methods=['GET'])
def get_all_recipes():
    all_recipes = Recipe.query.limit(5).all()
    return {'recipes': [recipe.to_dict() for recipe in all_recipes]}


# need to add created date and end date to posts
# @recipe_routes.route('/new') #order by new
# def get_recipes_by_new():


@recipe_routes.route('/page/<int:page>', methods=['GET'])
# pagination
def get_recipes_by_page(page=1):
    per_page = 2  # change to 10 or more later
    recipes = Recipe.query.paginate(page, per_page, error_out=False)
    return {'recipes': [recipe.to_dict() for recipe in recipes.items]}


@recipe_routes.route('/<int:id>')
def get_single_recipe(id):
    single_recipe = Recipe.query.get(id)
    return single_recipe.to_dict()
