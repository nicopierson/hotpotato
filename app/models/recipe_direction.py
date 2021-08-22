from .db import db


class RecipeDirection(db.Model):
    __tablename__ = 'recipe_directions'

    id = db.Column(db.Integer, primary_key=True)
    steps = db.Column(db.Integer, nullable=False)
    directions = db.Column(db.String(800), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        'recipes.id'), nullable=False)
    recipe_relation = db.relationship(
        'Recipe', back_populates='recipe_direction_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'steps': self.steps,
            'directions': self.directions,
            'recipe_id': self.recipe_id,
        }

    def get_direction_user(self):
        return self.recipe_relation.user_id

    @staticmethod
    def step_is_valid(recipe_id, step):
        return step == RecipeDirection.query.filter_by(
            recipe_id=recipe_id).count() + 1
