from .db import db

class RecipePhoto(db.Model):
    __tablename__ = 'recipe_photos'

    id = db.Column(db.Integer, primary_key=True)
    video_url = db.Column(db.String(500))
    img_url = db.Column(db.String(500))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))
    recipe_relation = db.relationship('Recipe', back_populates='photo_relation')

