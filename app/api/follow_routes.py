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
    return jsonify({"follows": [{"following": following.to_dict(), "follower": follower.to_dict()} for following, follower in followers]})


@follow_routes.route('/followers/<int:id>')
def get_followers(id):
    """
    Retrieves all followers for a user
    """
    followers = User.query.get_or_404(id).get_followers()
    return jsonify({"followers": [user.to_dict() for user in followers]})


@follow_routes.route('/followings/<int:id>')
def get_followings(id):
    """
    Retrieves all people that the current user is following
    """
    followings = User.query.get_or_404(id).get_followings()
    return jsonify({"followings": [user.to_dict() for user in followings]})


@login_required
@follow_routes.route('/feed-for/<int:id>')
def get_peoples_feed_that_user_is_following(id):
    """
    Retrieves all the peoples' feed that the user is following from.
    """
    if id == current_user.id:
        people_user_follow = User.query.get_or_404(id).get_followings()
        # print(dir(people_user_follow))
        # print("object objec ojbt", people_user_follow)
        # print("dirdiridr", dir(people_user_follow))
        # print("object objec ojbt", people_user_follow)
        return jsonify({"feed_from_people": [user.to_dict_user_with_recipe() for user in people_user_follow]})
    return {'errors': ['Please view your own feed!']}, 409


@login_required
@follow_routes.route('/feed-for/<int:id>/sort/new')
# SORT BY NEW RECIPES FOR FEED
def get_peoples_feed_that_user_is_following_sort_new(id):
    """
    Retrieves all the peoples' feed that the user is following from ordered by NEW
    """
    if id == current_user.id:

        return jsonify({"feed_order_new": User.get_recipes_based_on_follow_order_by_id(id)})
    return {'errors': ['Please view your own feed!']}, 409


@login_required
@follow_routes.route('/feed-for/<int:id>/sort/trending')
# SORT BY NEW RECIPES FOR FEED
def get_peoples_feed_that_user_is_following_sort_trending(id):
    """
    Retrieves all the peoples' feed that the user is following from ordered by TRENDING
    """
    if id == current_user.id:

        return jsonify({"feed_order_trending": User.get_recipes_based_on_follow_order_by_likes(id)})
    return {'errors': ['Please view your own feed!']}, 409


@follow_routes.route('/users/<int:id>', methods=['POST'])
@login_required
def add_follower(id):
    """
    Follow a user
    """
    follower = User.query.get_or_404(current_user.id)
    followed = User.query.get_or_404(id)
    user = follower.follow(followed)
    if user:
        db.session.commit()
        return jsonify({"following": user.to_dict()})
    return {'errors': ['Conflict: Already Following']}, 409


@follow_routes.route('/users/<int:id>', methods=['DELETE'])
@login_required
def remove_follower(id):
    """
    Unfollow a user
    """
    follower = User.query.get_or_404(current_user.id)
    followed = User.query.get_or_404(id)
    user = follower.unfollow(followed)
    if user:
        db.session.commit()
        return jsonify({"following": user.to_dict()})
    else:
        return {'errors': ['Conflict: Not following']}, 409
