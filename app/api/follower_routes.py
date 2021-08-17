from flask import Blueprint, jsonify
from app.models import db, User

follower_routes = Blueprint('followers', __name__)


@follower_routes.route('/')
def followers():
    followers = User.get_all_followers()
    # print('&&&&&&&&&&&&&&&&&&&: ', user.to_dict())
    print('***************************** followers: ', followers)
    # print('&&&&&&&&&&&&&&&&&&&: ', user.is_following(user4))
    # return {'followers': [follower.to_dict() for follower in followers]}
    return jsonify([])


@follower_routes.route('/<int:id>')
def get_followers(id):
    follower = User.follows.query.get(id).get_followers()
    print(follower)
    # return follower.to_dict()
    

# for post
    # user = User.query.get(2)
    # user7 = User.query.get(7)
    # followers = user.get_followers()
    # follows = user.get_follows()
    # # user = User.query.get(2).followers
    # user.unfollow(user7)
    # db.session.commit()