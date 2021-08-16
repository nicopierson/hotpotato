from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    recipeRelation = db.relationship('Recipe', back_populates='userRelation')
    comment_relation = db.relationship('Comment', back_populates='user_relation')

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
        backref=db.backref("following", lazy="dynamic"),
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

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    # def add_follower(self, user_id_follow_owner, user_id_follower ):
    #     self.follows
