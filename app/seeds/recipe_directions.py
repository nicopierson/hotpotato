from app.models import db, RecipeDirection


# Adds a demo user, you can add other users here if you want
def seed_recipes():
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
    cauliflower_veggie_fried_rice_1 = RecipeDirection(
        steps=1, directions="Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_2 = RecipeDirection(
        steps=2, directions="Heat 1T butter and 1T oil in a large skillet over medium heat.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_3 = RecipeDirection(
        steps=3, directions="Add garlic and the white and light green pieces of scallion. Sauté about a minute.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_4 = RecipeDirection(
        steps=4, directions="Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_5 = RecipeDirection(
        steps=5, directions="Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_6 = RecipeDirection(
        steps=6, directions="Let it sit for about two minutes—so the rice can get toasted and a little crispy.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_7 = RecipeDirection(
        steps=6, directions="Add the peas and broccoli and stir again.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_8 = RecipeDirection(
        steps=8, directions="Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.", 
        recipe_id=2)
    cauliflower_veggie_fried_rice_9 = RecipeDirection(
        steps=9, directions="Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.", 
        recipe_id=2)
    garlic_basil_french_fries_1 = RecipeDirection(
        steps=1, directions="", recipe_id=1)
    berry_banana_smoothie = RecipeDirection(
        steps=1, directions="", recipe_id=1)
    garlicky_kale = RecipeDirection(
        steps=1, directions="", recipe_id=1)
    kidney_bean_jumbalaya = RecipeDirection(
        steps=1, directions="", recipe_id=1)

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
