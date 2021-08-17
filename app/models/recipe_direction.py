from .db import db


class RecipeDirection(db.Model):
    __tablename__ = 'recipe_directions'

    id = db.Column(db.Integer, primary_key=True)
    steps = db.Column(db.Integer, nullable=False)
    directions = db.Column(db.String(500), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        'recipes.id'), nullable=False)
    recipe_relation = db.relationship(
        'Recipe', back_populates='recipe_direction_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'steps': self.steps,
            'directions': self.directions,
        }
