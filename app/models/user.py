from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_img = db.Column(db.String(500))

    recipeRelation = db.relationship('Recipe', back_populates='userRelation')
    comment_relation = db.relationship(
        'Comment', back_populates='user_relation')
    like_relation = db.relationship('Like', back_populates='user_relation')

    # this helper table just defines the relationship. doesn't need to be accesesd. only purpose is to connect other models.
    follows = db.Table(
        "follows",
        db.Column("user_id_follow_owner", db.Integer,
                  db.ForeignKey("users.id")),
        db.Column("user_id_follower", db.Integer, db.ForeignKey("users.id"))
    )
    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.user_id_follow_owner == id),
        secondaryjoin=(follows.c.user_id_follower == id),
        backref=db.backref("follows", lazy="dynamic"),
        lazy="dynamic"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # returns all people that current user follows as an array of Users
    def get_followings(self):
        # from secondary 'follows'
        return self.follows.all()

    # returns all followers as an array of Users
    def get_followers(self):
        return self.followers.all()

    def follow(self, user):
        if not self.is_following(user):
            self.follows.append(user)
            return user
        return False

    def unfollow(self, user):
        if self.is_following(user):
            self.follows.remove(user)
            return user
        return False

    def is_following(self, user):
        return len(list(filter(
            lambda follows: follows.id == user.id, self.follows.all()))) > 0

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'appreciations': len(self.like_relation),
            'followings': len(self.follows.all()),
            'followers': len(self.followers.all()),
            'profile_img': self.profile_img,
        }

    def to_dict_user_with_recipe(self):
        return {
            'id': self.id,
            'username': self.username,
            'recipe': [recipe.get_users_recipes() for recipe in self.recipeRelation]
        }

    @staticmethod
    # this gets all newest recipes
    def get_recipes_based_on_follow_order_by_id(id):
        # get all the people the user is following
        people_user_follow = User.query.get_or_404(id).get_followings()

        # iterate through the people and get their recipes. then combine it.
        return sorted([recipe.get_users_recipes() for user in people_user_follow for recipe in user.recipeRelation], key=lambda i: i['id'], reverse=True)

    @staticmethod
    # this gets all newest recipes
    def get_recipes_based_on_follow_order_by_likes(id):
        people_user_follow = User.query.get_or_404(id).get_followings()
        return sorted([recipe.get_users_recipes() for user in people_user_follow for recipe in user.recipeRelation], key=lambda i: i['likes'], reverse=True)

    @staticmethod
    # not useful to get all followers as there will be many repeats
    # returns list of list of follow and follower
    def get_all_followers():
        follower_list = [[users, user] for users in User.query.all()
                         for user in users.followers.all()]
        return follower_list

    @staticmethod
    # def get_all_people_that_user_is_following():
    def to_list(followers):
        return [follower.id for follower in followers]
