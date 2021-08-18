from flask import Blueprint, jsonify
from app.models import db, User
from flask_login import current_user, login_required

follow_routes = Blueprint('followers', __name__)


@follow_routes.route('/')
def followers():
    """
    Retrieves all rows of table as followers and returns following and 
    follower dict relationship
    """
    followers = User.get_all_followers()
    return jsonify({ "follows": [ { "following": following.to_dict(), "follower": follower.to_dict() } for following, follower in followers ] })


@follow_routes.route('/followers/<int:id>')
def get_followers(id):
    """
    Retrieves all followers for a user
    """
    followers = User.query.get_or_404(id).get_followers()
    return jsonify([ user.to_dict() for user in followers ])


@follow_routes.route('/followings/<int:id>')
def get_followings(id):
    """
    Retrieves all followers for a user
    """
    followings = User.query.get_or_404(id).get_followings()
    return jsonify({ "followings": [ user.to_dict() for user in followings ] })
    

@follow_routes.route('/users/<int:id>', methods=['POST'])
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


@follow_routes.route('/users/<int:id>', methods=['DELETE'])
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