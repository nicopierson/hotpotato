from flask import Blueprint, jsonify
from app.models import db, User
from flask_login import current_user, login_required

follower_routes = Blueprint('followers', __name__)


@follower_routes.route('/')
def followers():
    """
    Retrieves all followers and returns followed and followers dict
    """
    followers = User.get_all_followers()
    return jsonify([ {"followed": followed.to_dict(), "follower": follower.to_dict()} for followed, follower in followers])


@follower_routes.route('/users/<int:id>')
def get_followers(id):
    """
    Retrieves all followers for a user
    """
    followers = User.query.get_or_404(id).get_followers()
    return jsonify([ user.to_dict() for user in followers ])
    

@follower_routes.route('/users/<int:id>', methods=['POST'])
@login_required
def add_follower(id):
    """
    Follow a user
    """
    follower = User.query.get_or_404(current_user.id)
    followed = User.query.get_or_404(id)
    if follower.follow(followed):
        db.session.commit()
        return jsonify({ "followed_id": followed.id })
    return {'errors': ['Conflict: Already Following']}, 409


@follower_routes.route('/users/<int:id>', methods=['DELETE'])
@login_required
def remove_follower(id):
    """
    Unfollow a user
    """
    follower = User.query.get_or_404(current_user.id)
    followed = User.query.get_or_404(id)
    if follower.unfollow(followed):
        db.session.commit()
        return jsonify({ "followed_id": followed.id })
    else:
        return {'errors': ['Conflict: Not following']}, 409