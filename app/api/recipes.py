from flask import Blueprint
from flask_login import login_required
from app.models import Recipe

recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route('/')
def get_all_recipes():
    all_recipes = Recipe.query.all()
    return {'recipes': [recipe.to_dict() for recipe in all_recipes]}


@recipe_routes.route('/<int:id>')
def get_single_recipe(id):
    single_recipe = Recipe.query.get(id)
    return single_recipe.to_dict()
