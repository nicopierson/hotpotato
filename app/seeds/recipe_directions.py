from app.models import db, RecipeDirection


# Adds a demo user, you can add other users here if you want
def seed_recipe_directions():
    broccoli_tofu_1 = RecipeDirection(
        steps=1, directions="Dab the tofu with a kitchen towel or paper towel to get rid of any extra moisture. Cut into 1/2 inch cubes and toss them in a mixture of cornflour, salt and pepper.", 
        recipe_id=1)
    broccoli_tofu_2 = RecipeDirection(
        steps=2, directions="Whisk together all the ingredients for the sauce and set aside.", 
        recipe_id=1)
    broccoli_tofu_3 = RecipeDirection(
        steps=3, directions="Heat oil in a non stick pan and spread the tofu pieces out so that they are evenly layered on the pan. Cook each side till its a light golden brown and remove from the pan. Don’t worry if the tofu pieces stick to each other a bit. You can easily pull them apart once they are cooked and crispy.", 
        recipe_id=1)
    broccoli_tofu_4 = RecipeDirection(
        steps=4, directions="Heat oil in the same pan and once its hot, add garlic and ginger. Saute for a minute and add the broccoli florets. Cook them for a minute and pour the sauce into the pan. Stir fry for a minute or two on high heat to let the sauce thicken and then add the tofu. Quickly toss everything together and turn off the flame. Top with sesame seeds and green onions and serve.", 
        recipe_id=1)

    db.session.add(broccoli_tofu_1)
    db.session.add(broccoli_tofu_2)
    db.session.add(broccoli_tofu_3)
    db.session.add(broccoli_tofu_4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipe_directions():
    db.session.execute('TRUNCATE recipe_directions RESTART IDENTITY CASCADE;')
    db.session.commit()
