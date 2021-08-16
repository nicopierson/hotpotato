from app.models import db, Recipe


# Adds a demo user, you can add other users here if you want
def seed_recipes():
    broccoli_tofu = Recipe(
        thumbnail_url='https://myfoodstory.com/wp-content/uploads/2018/07/Crispy-Tofu-Broccoli-Stir-Fry-2.jpg', name='Broccoli Tofu Stir-Fry', user_id=1)
    cauliflower_veggie_fried_rice = Recipe(
        thumbnail_url='https://spoonacular.com/recipeImages/716426-312x231.jpg', name='Cauliflower, Brown Rice, and Vegetable Fried Rice', user_id=2)
    garlic_basil_french_fries = Recipe(
        thumbnail_url='https://spoonacular.com/recipeImages/715594-312x231.jpg', name='Homemade Garlic and Basil French Fries', user_id=3)
    berry_banana_smoothie = Recipe(
        thumbnail_url='https://spoonacular.com/recipeImages/715497-312x231.jpg', name='Berry Banana Breakfast Smoothie', user_id=1)
    garlicky_kale = Recipe(
        thumbnail_url='https://spoonacular.com/recipeImages/644387-312x231.jpg', name='Garlicky Kale', user_id=2)
    kidney_bean_jumbalaya = Recipe(
        thumbnail_url='https://spoonacular.com/recipeImages/782601-312x231.jpg', name='Red Kidney Bean Jambalaya', user_id=3)

    db.session.add(broccoli_tofu)
    db.session.add(cauliflower_veggie_fried_rice)
    db.session.add(garlic_basil_french_fries)
    db.session.add(berry_banana_smoothie)
    db.session.add(garlicky_kale)
    db.session.add(kidney_bean_jumbalaya)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
