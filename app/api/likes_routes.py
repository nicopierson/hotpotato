from flask import Blueprint
from app.models import Like
# from app.models import User
# from app.models import Recipe

like_routes = Blueprint('likes', __name__)

@like_routes.route('/')
def index():
   likes = Like.query.all()
   return {'likes': [like.to_dict() for like in likes]}


@like_routes.route('/recipes/<int:id>')
def recipe_id(id):
    likes = Like.query.filter_by(recipe_id=id).all()
    return {'likes': [like.to_dict() for like in likes]}


@like_routes.route('/users/<int:id>')
def user_id(id):
    likes = Like.query.filter_by(user_id=id).all()
    return {'likes': [like.to_dict() for like in likes]}
