from .db import db


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    thumbnail_url = db.Column(db.String(500))
    name = db.Column(db.String(255), nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    userRelation = db.relationship('User', back_populates='recipeRelation')
    comment_relation = db.relationship(
        'Comment', back_populates='recipe_relation')
    photo_relation = db.relationship(
        'RecipePhoto', back_populates='recipe_relation')
    recipe_ingredient_relation = db.relationship(
        'RecipeIngredient', back_populates='recipe_relation')
    recipe_direction_relation = db.relationship(
        'RecipeDirection', back_populates='recipe_relation')
    like_relation = db.relationship('Like', back_populates='recipe_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'thumbnail_url': self.thumbnail_url,
            'name': self.name,
            'user_id': self.user_id,
        }

    def get_recipes_with_all_relationship(self):
        return {
            'id': self.id,
            'thumbnail_url': self.thumbnail_url,
            'name': self.name,
            'comments': [{'id': comment.id, 'comment': comment.comment, 'user_id': comment.user_id, 'recipe_id': comment.recipe_id} for comment in self.comment_relation],
            'photos': [{'id': photo.id, 'video_url': photo.video_url, 'img_url': photo.img_url,  'recipe_id': photo.recipe_id} for photo in self.photo_relation]
            # 'photos': self.photo_relation,
            # 'recipe_ingredients': [self.recipe_ingredient_relation,
            # 'recipe_directions': self.recipe_direction_relation,
            # 'likes': self.like_relation,
        }
