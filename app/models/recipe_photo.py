from .db import db


class RecipePhoto(db.Model):
    __tablename__ = 'recipe_photos'

    id = db.Column(db.Integer, primary_key=True)
    video_url = db.Column(db.String(500))
    img_url = db.Column(db.String(500))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipes.id'))
    recipe_relation = db.relationship(
        'Recipe', back_populates='photo_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'video_url': self.video_url,
            'img_url': self.img_url,
            'recipe_id': self.recipe_id,
        }

    def get_photo_user(self):
        return self.recipe_relation.user_id
