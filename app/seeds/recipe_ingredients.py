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
    cooked_broccoli = RecipeIngredient(
        ingredient='Broccoli (Cooked)', measurement='2 cups', recipe_id=2)
    raw_cauliflower = RecipeIngredient(
        ingredient='Cauliflower', measurement='1 head', recipe_id=2)
    coconut_oil = RecipeIngredient(
        ingredient='Coconut Oil', measurement='1 tablespoon', recipe_id=2)
    brown_rice = RecipeIngredient(
        ingredient='Brown Rice (Cooked)', measurement='3 cups', recipe_id=2)
    garlic_vegie_fried_rice = RecipeIngredient(
        ingredient='Garlic (Finely Chopped)', measurement='5 cloves', recipe_id=2)
    soy_sauce_vegie_fried_rice = RecipeIngredient(
        ingredient='Soy Sauce', measurement='3 tablespoons', recipe_id=2)
    frozen_peas = RecipeIngredient(
        ingredient='Frozen Peas', measurement='1 cup', recipe_id=2)
    scallion = RecipeIngredient(
        ingredient='Scallions', measurement='8 chopped', recipe_id=2)
    sesame_oil_vegie_fried_rice = RecipeIngredient(
        ingredient='Sesame Oil', measurement='2 teaspoons', recipe_id=2)
    sesame_seeds_vegie_fried_rice = RecipeIngredient(
        ingredient='Sesame Seeds', recipe_id=2)
    basil = RecipeIngredient(
        ingredient='Basil', measurement='1/4 cup', recipe_id=3)
    flour = RecipeIngredient(
        ingredient='Flour', measurement='1 cup', recipe_id=3)
    garlic_powder = RecipeIngredient(
        ingredient='Garlic Powder', measurement='1/4 teaspoon', recipe_id=3)
    garlic_salt = RecipeIngredient(
        ingredient='Garlic Salt', measurement='pinch', recipe_id=3)
    potatoes = RecipeIngredient(
        ingredient='Potatoes', measurement='4 whole', recipe_id=3)
    vegetable_oil_garlic_fries = RecipeIngredient(
        ingredient='Vegetable Oil', measurement='splash', recipe_id=3)
    banana = RecipeIngredient(
        ingredient='Banana', measurement='1/4 cup', recipe_id=4)
    graham_cracker_crumbs = RecipeIngredient(
        ingredient='Graham Cracker Crumbs', measurement='2 tablespoons', recipe_id=4)
    soy_milk = RecipeIngredient(
        ingredient='Soy Milk', measurement='1 cup', recipe_id=4)
    strawberry = RecipeIngredient(
        ingredient='Strawberry', measurement='1/2 cup', recipe_id=4)
    vanilla_yogurt = RecipeIngredient(
        ingredient='vanilla_yogurt', measurement='splash', recipe_id=4)
    balsamic_vinegar = RecipeIngredient(
        ingredient='Balsalmic Vinegar', measurement='3 tablespoons', recipe_id=5)
    garlic_garlicky_kale = RecipeIngredient(
        ingredient='Garlic', measurement='1 clove', recipe_id=5)
    kale = RecipeIngredient(
        ingredient='Kale', measurement='1 bunch', recipe_id=5)
    olive_oil = RecipeIngredient(
        ingredient='Olive_oil', measurement='splash', recipe_id=5)
    brown_rice_jumbalaya = RecipeIngredient(
        ingredient='Brown Rice (Cooked and Dried)', measurement='2 cups', recipe_id=6)
    carrots = RecipeIngredient(
        ingredient='Carrots', measurement='2 medium', recipe_id=6)
    celery = RecipeIngredient(
        ingredient='Celery', measurement='2 stalks', recipe_id=6)
    celery_seed = RecipeIngredient(
        ingredient='Celery Seeds', measurement='1 teaspoon', recipe_id=6)
    kidney_beans = RecipeIngredient(
        ingredient='Kidney Beans (Cooked and Dried)', measurement='2 cups', recipe_id=6)
    marjoram = RecipeIngredient(
        ingredient='Marjoram (Dried)', measurement='1 teaspoon', recipe_id=6)
    thyme = RecipeIngredient(
        ingredient='Thyme (Dried)', measurement='2 teaspoons', recipe_id=6)
    eggplant = RecipeIngredient(
        ingredient='Eggplant', measurement='1 medium', recipe_id=6)
    garlic_jumbalaya = RecipeIngredient(
        ingredient='Garlic', measurement='1/5 clove', recipe_id=6)
    green_beans = RecipeIngredient(
        ingredient='Green Beans', measurement='3 handfuls', recipe_id=6)
    black_pepper = RecipeIngredient(
        ingredient='Black Pepper (Fresh Ground)', measurement='pinch', recipe_id=6)
    sage = RecipeIngredient(
        ingredient='Sage (Ground)', measurement='2 teaspoons', recipe_id=6)
    liquid_smoke = RecipeIngredient(
        ingredient='Liquid Smoke', measurement='1/2 teaspoon', recipe_id=6)
    olive_oil_jumbalaya = RecipeIngredient(
        ingredient='Olive Oil', measurement='2 tablespoons', recipe_id=6)
    red_bell_pepper = RecipeIngredient(
        ingredient='Red Bell Pepper', measurement='1 medium', recipe_id=6)
    red_onion = RecipeIngredient(
        ingredient='Red Onion (Diced)', measurement='1 small', recipe_id=6)
    sea_salt = RecipeIngredient(
        ingredient='Sea Salt', measurement='1 1/2 tablespoons', recipe_id=6)
    siracha = RecipeIngredient(
        ingredient='Siracha', measurement='1 teaspoon', recipe_id=6)
    tomatoes = RecipeIngredient(
        ingredient='Tomatoes (Diced)', measurement='2 medium', recipe_id=6)
    vegetable_stock = RecipeIngredient(
        ingredient='Vegetable Stock', measurement='3 cups', recipe_id=6)
    
    

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
    db.session.add(cooked_broccoli)
    db.session.add(raw_cauliflower)
    db.session.add(coconut_oil)
    db.session.add(brown_rice)
    db.session.add(garlic_vegie_fried_rice)
    db.session.add(soy_sauce_vegie_fried_rice)
    db.session.add(frozen_peas)
    db.session.add(scallion)
    db.session.add(sesame_oil_vegie_fried_rice)
    db.session.add(sesame_seeds_vegie_fried_rice)
    db.session.add(basil)
    db.session.add(flour)
    db.session.add(garlic_powder)
    db.session.add(garlic_salt)
    db.session.add(potatoes)
    db.session.add(vegetable_oil_garlic_fries)
    db.session.add(banana)
    db.session.add(graham_cracker_crumbs)
    db.session.add(soy_milk)
    db.session.add(strawberry)
    db.session.add(vanilla_yogurt)
    db.session.add(balsamic_vinegar)
    db.session.add(garlic_garlicky_kale)
    db.session.add(kale)
    db.session.add(olive_oil)
    db.session.add(brown_rice_jumbalaya)
    db.session.add(carrots)
    db.session.add(celery)
    db.session.add(celery_seed)
    db.session.add(kidney_beans)
    db.session.add(marjoram)
    db.session.add(thyme)
    db.session.add(eggplant)
    db.session.add(garlic_jumbalaya)
    db.session.add(green_beans)
    db.session.add(black_pepper)
    db.session.add(sage)
    db.session.add(liquid_smoke)
    db.session.add(olive_oil_jumbalaya)
    db.session.add(red_bell_pepper)
    db.session.add(red_onion)
    db.session.add(sea_salt)
    db.session.add(siracha)
    db.session.add(tomatoes)
    db.session.add(vegetable_stock)
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipe_ingredients():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
