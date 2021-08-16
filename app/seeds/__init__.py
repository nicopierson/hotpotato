from app.seeds.recipe_ingredients import seed_recipe_ingredients
from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes
from .recipe_ingredients import seed_recipe_ingredients, undo_recipe_ingredients
from .recipe_directions import seed_recipe_directions, undo_recipe_directions


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_recipes()
    seed_recipe_ingredients()
    seed_recipe_directions()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_recipes()
    undo_recipe_ingredients()
    undo_recipe_directions()

    # Add other undo functions here
