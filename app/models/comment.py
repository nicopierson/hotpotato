from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'), nullable=False)
    
    user_relation = db.relationship('User', back_populates='comment_relation')
    recipe_relation = db.relationship('Recipe', back_populates='comment_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'user_id': self.user_id,
            'recipe_id': self.recipe_id,
        }
