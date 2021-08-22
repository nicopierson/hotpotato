from .db import db


categories_recipes = db.Table(
    "categories_recipes",
    db.Column(
        "recipes",
        db.Integer,
        db.ForeignKey("recipes.id"),
        primary_key=True
    ),
    db.Column(
        "categories",
        db.Integer,
        db.ForeignKey("categories.id"),
        primary_key=True
    )
)


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.Text)
    recipes_relations = db.relationship(
        "Recipe",
        secondary=categories_recipes,
        back_populates="categories_relations"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'ingredient': self.ingredient,
            'measurement': self.measurement,
            'recipe_id': self.recipe_id,
        }

    def get_ingredient_user(self):
        return self.recipe_relation.user_id
