from flask import Blueprint, json, jsonify
from app.models import db, User

follower_routes = Blueprint('followers', __name__)


@follower_routes.route('/')
def followers():
    followers = User.get_all_followers()
    return jsonify([ {"follow_owner": followed.to_dict(), "follower": follower.to_dict()} for followed, follower in followers])


@follower_routes.route('/<int:id>')
def get_followers(id):
    followers = User.query.get(id).get_followers()
    return jsonify([ user.to_dict() for user in followers ])
    

@follower_routes.route('/')
# for post
    # user = User.query.get(2)
    # user7 = User.query.get(7)
    # followers = user.get_followers()
    # follows = user.get_follows()
    # # user = User.query.get(2).followers
    # user.unfollow(user7)
    # db.session.commit()