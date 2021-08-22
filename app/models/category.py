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
    category_name = db.Column(db.String(255), nullable=False, unique=True)
    image_url = db.Column(db.Text)
    description = db.Column(db.String(500))
    recipes_relations = db.relationship(
        "Recipe",
        secondary=categories_recipes,
        back_populates="categories_relations"
    )

    def to_dict_categories(self):
        return {
            'id': self.id,
            'category_name': self.category_name,
            'image_url': self.image_url,
            'category_recipes': self.recipes_relations.get_users_recipes(),
        }
