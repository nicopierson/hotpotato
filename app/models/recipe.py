from .db import db
from .category import categories_recipes


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    thumbnail_url = db.Column(db.String(1000))
    name = db.Column(db.String(255), nullable=False)
    # description = db.Column(db.String(1000), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    userRelation = db.relationship('User', back_populates='recipeRelation')
    comment_relation = db.relationship(
        'Comment', back_populates='recipe_relation', cascade="all, delete-orphan")
    photo_relation = db.relationship(
        'RecipePhoto', back_populates='recipe_relation', cascade="all, delete-orphan")
    recipe_ingredient_relation = db.relationship(
        'RecipeIngredient', back_populates='recipe_relation', cascade="all, delete-orphan")
    recipe_direction_relation = db.relationship(
        'RecipeDirection', back_populates='recipe_relation', cascade="all, delete-orphan")
    like_relation = db.relationship(
        'Like', back_populates='recipe_relation', cascade="all, delete-orphan")

    categories_relations = db.relationship(
        "Category",
        secondary=categories_recipes,
        back_populates="recipes_relations"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'thumbnail_url': self.thumbnail_url,
            'name': self.name,
            'user_id': self.user_id,
            'likes': len(self.like_relation),
        }

    def get_users_recipes(self):
        return {
            'id': self.id,
            'thumbnail_url': self.thumbnail_url,
            'name': self.name,
            'user_id': self.user_id,
            'likes': len(self.like_relation),
            'username': self.userRelation.username,
            'profile_img': self.userRelation.profile_img,
        }

    # def get_recipes_that_user_follows(self):
    #     return {
    #     }

    def get_recipes_with_all_relationship(self):
        return {
            'id': self.id,
            'thumbnail_url': self.thumbnail_url,
            'name': self.name,
            'comments': [{'id': comment.id, 'comment': comment.comment, 'user_id': comment.user_id, 'recipe_id': comment.recipe_id, 'username': comment.user_relation.username, 'profile_img': comment.user_relation.profile_img} for comment in self.comment_relation],
            'photos': [{'id': photo.id, 'video_url': photo.video_url, 'img_url': photo.img_url, 'recipe_id': photo.recipe_id} for photo in self.photo_relation],
            'recipe_ingredients': sorted([ingredient.to_dict() for ingredient in self.recipe_ingredient_relation], key=lambda i: i['id']),
            # example of sorting a diction by the key of age ---> sorted(lis, key = lambda i: i['age'])
            'recipe_directions': sorted([direction.to_dict() for direction in self.recipe_direction_relation], key=lambda i: i['steps']),
            'likes': len(self.like_relation),
            'user_id': self.user_id,
        }
