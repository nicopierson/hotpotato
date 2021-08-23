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
    name = db.Column(db.String(255), nullable=False, unique=True)
    image_url = db.Column(db.Text)
    description = db.Column(db.String(500))
    recipes_relations = db.relationship(
        "Recipe",
        secondary=categories_recipes,
        back_populates="categories_relations"
    )
    
    def add_recipe(self, recipe):
        if not self.is_repeat(recipe):
            self.categories_recipes.append(recipe)
            return recipe
        return False

    def remove_recipe(self, recipe):
        if self.is_repeat(recipe):
            self.categories_recipes.remove(recipe)
            return recipe
        return False
    
    def is_repeat(self, recipe):
        return len(list(filter(
            lambda categories: categories.recipes == recipe.id, self.categories_recipes.all()))) > 0

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'image_url': self.image_url,
            'description': self.description
        }

    def to_dict_recipes_for_a_category(self):
        return {
            'id': self.id,
            'name': self.name,
            'image_url': self.image_url,
            'description': self.description,
            'category_recipes': [recipe.get_users_recipes() for recipe in self.recipes_relations],
        }
