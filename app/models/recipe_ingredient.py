from .db import db


class RecipeIngredient(db.Model):
    __tablename__ = 'recipe_ingredients'

    id = db.Column(db.Integer, primary_key=True)
    ingredient = db.Column(db.String(255), nullable=False)
    measurement = db.Column(db.String(255))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'), nullable=False)
