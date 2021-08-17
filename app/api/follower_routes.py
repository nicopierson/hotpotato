from flask import Blueprint, jsonify
from app.models import db, User
from flask_login import current_user

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
    followers = User.query.get(id).get_followers()
    return jsonify([ user.to_dict() for user in followers ])
    

@follower_routes.route('/users/<int:id>', methods=['POST'])
def add_follower(id):
    """
    Follow a user
    """
    follower = User.query.get(current_user.id)
    followed = User.query.get(id)
    if follower:
        follower.follow(followed)
        db.session.commit()
    else:
        return {'errors': ['Not Found']}, 404
# for post
    # user = User.query.get(2)
    # user7 = User.query.get(7)
    # followers = user.get_followers()
    # follows = user.get_follows()
    # # user = User.query.get(2).followers
    # user.unfollow(user7)
    # db.session.commit()