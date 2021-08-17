from .db import db


class RecipeIngredient(db.Model):
    __tablename__ = 'recipe_ingredients'

    id = db.Column(db.Integer, primary_key=True)
    ingredient = db.Column(db.String(255), nullable=False)
    measurement = db.Column(db.String(255))
    recipe_id = db.Column(db.Integer, db.ForeignKey(
        'recipes.id'), nullable=False)
    recipe_relation = db.relationship(
        'Recipe', back_populates='recipe_ingredient_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'ingredient': self.ingredient,
            'measurement': self.measurement,
            'recipe_id': self.recipe_id,
        }

    def get_ingredient_user(self):
        return self.recipe_relation.user_id
