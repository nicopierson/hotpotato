from flask.cli import AppGroup
from .users import seed_users, undo_users
from .likes import seed_likes, undo_likes
from .recipes import seed_recipes, undo_recipes
from .comments import seed_comments, undo_comments
from .recipe_photos import seed_recipe_photos, undo_recipe_photos
from .recipe_ingredients import seed_recipe_ingredients, undo_recipe_ingredients
from .recipe_directions import seed_recipe_directions, undo_recipe_directions
from .seed_recipe_from_json import seed_from_json, undo_seed_from_json
from .categories_recipes import seed_categories, undo_categories

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_recipes()
    seed_recipe_ingredients()
    seed_recipe_directions()
    seed_from_json()
    seed_comments()
    seed_recipe_photos()
    seed_likes()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_recipes()
    undo_recipe_ingredients()
    undo_recipe_directions()
    undo_seed_from_json()
    undo_comments()
    undo_recipe_photos()
    undo_likes()
