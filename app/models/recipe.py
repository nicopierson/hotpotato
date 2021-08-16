from .db import db


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    thumbnail_url = db.Column(db.String(500))
    name = db.Column(db.String(255), nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    userRelation = db.relationship('User', back_populates='recipeRelation')
    photo_relation = db.relationship('RecipePhoto', back_populates='recipe_relation')
    recipe_ingredient_relation = db.relationship('RecipeIngredient', back_populates='recipe_relation')
    recipe_direction_relation = db.relationship('RecipeDirection', back_populates='recipe_relation')

