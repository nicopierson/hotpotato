from flask import Blueprint, request
from flask_login import login_required
from app.models import Recipe, Comment, User, db
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
def get_all_comments():
    all_comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in all_comments]}


@comment_routes.route('/<int:id>')
def get_single_comment(id):
    single_comment = Comment.query.get(id)
    return single_comment.to_dict()


@comment_routes.route('/<int:id>', methods=["PUT"])
def edit_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment.query.get(id)
        comment.comment = form.comment.data
        comment.user_id = form.user_id.data
        comment.recipe_id = form.recipe_id.data
        db.session.commit()
        return comment.to_dict()
    else:
        return {'error': 'something went wrong'}, 401


@comment_routes.route('/<int:id>', methods=["DELETE"])
def delete_comment(id):
    comment = Comment.query.get(id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return {'message': 'Comment Deleted'}
    else:
        return {'message': 'Comment Not Found'}, 404


@comment_routes.route('/recipes/<int:id>')
def get_all_comments_for_recipe(id):
    target_recipe = Recipe.query.get(id)
    all_comments_for_recipe = Comment.query.filter_by(recipe_id=target_recipe.id).all()
    return {'comments': [comment.to_dict() for comment in all_comments_for_recipe]}


@comment_routes.route('/recipes/<int:id>', methods=["POST"])
def create_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            comment=form.comment.data,
            user_id=form.user_id.data,
            recipe_id=form.recipe_id.data
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    else:
        return {'error': 'something went wrong'}, 401


@comment_routes.route('/users/<int:id>')
def get_all_comments_for_user(id):
    target_user = User.query.get(id)
    all_comments_for_user = Comment.query.filter_by(user_id=target_user.id).all()
    return {'comments': [comment.to_dict() for comment in all_comments_for_user]}