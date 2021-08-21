from app.models.recipe import Recipe
from flask import Blueprint
from app.models import Like, db
from flask_login import current_user, login_required


like_routes = Blueprint('likes', __name__)


@like_routes.route('/')
def index():
    likes = Like.query.all()
    return {'likes': [like.to_dict() for like in likes]}


@like_routes.route('/recipes/<int:id>')
def recipe_id(id):
    likes = Like.query.filter_by(recipe_id=id).all()
    return {'likes': [like.to_dict() for like in likes]}


@like_routes.route('/recipes/<int:id>', methods=['POST'])
@login_required
def recipe_id_post(id):

    Recipe.query.get_or_404(id)
    likes = Like.query.filter(
        Like.user_id == current_user.id, id == Like.recipe_id).all()
    if len(likes):
        return {'errors': ['Conflict: Already Liked']}, 409
    else:
        like = Like(
            recipe_id=id,
            user_id=current_user.id
        )
        db.session.add(like)
        db.session.commit()

    return {"like": {"recipe_id": id, "user_id": current_user.id}}


@like_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def like_id_delete(id):
    like = Like.query.get_or_404(id)

    db.session.delete(like)
    db.session.commit()

    return {"like": like.to_dict()}


@like_routes.route('/users/<int:id>')
def user_id(id):
    likes = Like.query.filter_by(user_id=id).all()
    return {'likes': [like.to_dict() for like in likes]}
