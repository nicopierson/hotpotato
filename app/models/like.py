from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        'recipes.id'), nullable=False)

    user_relation = db.relationship('User', back_populates='like_relation')
    recipe_relation = db.relationship(
        'Recipe', back_populates='like_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'recipe_id': self.recipe_id
        }
