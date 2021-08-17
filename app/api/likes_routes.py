from flask import Blueprint
from app.models import Like

like_routes = Blueprint('likes', __name__)

@like_routes.route('/')
def index():
    pass


@like_routes.route('/recipes/:id')
def recipe_id():
    pass


@like_routes.route('users/:id/')
def user_id():
    pass
