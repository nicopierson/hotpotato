from app.models import db, RecipeIngredient


# Adds a demo user, you can add other users here if you want
def seed_recipe_ingredients():
    tofu = RecipeIngredient(
        ingredient='Tofu (Extra Firm)', measurement='400 grams', recipe_id=1)
    cornflour_for_tofu = RecipeIngredient(
        ingredient='Cornflour (For Tofu)', measurement='2 tablespoons', recipe_id=1)
    salt = RecipeIngredient(
        ingredient='Salt', measurement='1/2 teaspoon', recipe_id=1)
    pepper = RecipeIngredient(
        ingredient='Pepper (Ground)', measurement='1/4 teaspoon', recipe_id=1)
    vegetable_oil_for_tofu = RecipeIngredient(
        ingredient='Vegetable Oil (For Tofu)', measurement='1 1/2 tablespoon', recipe_id=1)
    soy_sauce = RecipeIngredient(
        ingredient='Soy Sauce', measurement='1/4 cup', recipe_id=1)
    hoisin_sauce = RecipeIngredient(
        ingredient='Hoisin Sauce', measurement='2 teaspoons', recipe_id=1)
    rice_vinegar = RecipeIngredient(
        ingredient='Rice Vinegar', measurement='2 teaspoons', recipe_id=1)
    sesame_oil = RecipeIngredient(
        ingredient='Toasted Sesame Oil', measurement='1 tablespoon', recipe_id=1)
    chili_flakes = RecipeIngredient(
        ingredient='Chili Flakes', measurement='1 teaspoon', recipe_id=1)
    cornflour_for_sauce = RecipeIngredient(
        ingredient='Cornflour (For Sauce)', measurement='1 tablespoon', recipe_id=1)
    water = RecipeIngredient(
        ingredient='Water', measurement='1/4 cup', recipe_id=1)
    vegetable_oil_for_stirfry = RecipeIngredient(
        ingredient='Vegetable Oil (For Stir Fry)', measurement='1 tablespoon', recipe_id=1)
    garlic = RecipeIngredient(
        ingredient='Garlic (Finely Chopped)', measurement='4 cloves', recipe_id=1)
    ginger = RecipeIngredient(
        ingredient='Ginger (Peeled, Finely Chopped)', measurement='1 inch', recipe_id=1)
    broccoli = RecipeIngredient(
        ingredient='Broccoli Florets', measurement='1 whole head', recipe_id=1)
    sesame_seeds = RecipeIngredient(
        ingredient='Toasted Sesame Seeds', recipe_id=1)
    green_onion = RecipeIngredient(
        ingredient='Green Onion (Chopped)', recipe_id=1)
    
    db.session.add(tofu)
    db.session.add(cornflour_for_tofu)
    db.session.add(salt)
    db.session.add(pepper)
    db.session.add(vegetable_oil_for_tofu)
    db.session.add(soy_sauce)
    db.session.add(hoisin_sauce)
    db.session.add(rice_vinegar)
    db.session.add(sesame_oil)
    db.session.add(chili_flakes)
    db.session.add(cornflour_for_sauce)
    db.session.add(water)
    db.session.add(vegetable_oil_for_stirfry)
    db.session.add(garlic)
    db.session.add(ginger)
    db.session.add(broccoli)
    db.session.add(sesame_seeds)
    db.session.add(green_onion)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipe_ingredients():
    db.session.execute('TRUNCATE recipe_ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
