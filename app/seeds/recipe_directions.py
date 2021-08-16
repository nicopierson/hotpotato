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
        steps=1, directions="Take your sliced fries and place them in a large mixing bowl. Add in your basil and garlic powder and mix well, coating them as evenly as possible.", 
        recipe_id=3)
    garlic_basil_french_fries_2 = RecipeDirection(
        steps=2, directions="Add in the flour and again mix well.", 
        recipe_id=3)
    garlic_basil_french_fries_3 = RecipeDirection(
        steps=3, directions="Heat up your vegetable oil and cook until floating on top and very lightly brown.", 
        recipe_id=3)
    garlic_basil_french_fries_4 = RecipeDirection(
        steps=4, directions="Remove from oil and place on napkins to remove excess oil. Then sprinkle with a dash of garlic salt and parsley to while still hot. Serve immediately.", 
        recipe_id=3)
    berry_banana_smoothie_1 = RecipeDirection(
        steps=1, directions="Take some yogurt in your favorite flavor and add 1 container to your blender.", 
        recipe_id=4)
    berry_banana_smoothie_2 = RecipeDirection(
        steps=2, directions="Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.", 
        recipe_id=4)
    garlicky_kale_1 = RecipeDirection(
        steps=1, directions="Heat the olive oil in a large pot over medium heat.", 
        recipe_id=5)
    garlicky_kale_2 = RecipeDirection(
        steps=2, directions="Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.", 
        recipe_id=5)
    garlicky_kale_3 = RecipeDirection(
        steps=3, directions="Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.", 
        recipe_id=5)
    garlicky_kale_4 = RecipeDirection(
        steps=4, directions="Serve hot.", 
        recipe_id=5)
    kidney_bean_jumbalaya_1 = RecipeDirection(
        steps=1, directions="Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.", 
        recipe_id=6)
    kidney_bean_jumbalaya_2 = RecipeDirection(
        steps=2, directions="Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.", 
        recipe_id=6)
    kidney_bean_jumbalaya_3 = RecipeDirection(
        steps=3, directions="Drain and set aside.", 
        recipe_id=6)
    kidney_bean_jumbalaya_4 = RecipeDirection(
        steps=4, directions="Heat the oil in a large saucepan over medium heat. When hot, add the onion and salt for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.", 
        recipe_id=6)
    kidney_bean_jumbalaya_5 = RecipeDirection(
        steps=5, directions="Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.", 
        recipe_id=6)
    kidney_bean_jumbalaya_6 = RecipeDirection(
        steps=6, directions="Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.", 
        recipe_id=6)

    db.session.add(broccoli_tofu_1)
    db.session.add(broccoli_tofu_2)
    db.session.add(broccoli_tofu_3)
    db.session.add(broccoli_tofu_4)
    db.session.add(cauliflower_veggie_fried_rice_1)
    db.session.add(cauliflower_veggie_fried_rice_2)
    db.session.add(cauliflower_veggie_fried_rice_3)
    db.session.add(cauliflower_veggie_fried_rice_4)
    db.session.add(cauliflower_veggie_fried_rice_5)
    db.session.add(cauliflower_veggie_fried_rice_6)
    db.session.add(cauliflower_veggie_fried_rice_7)
    db.session.add(cauliflower_veggie_fried_rice_8)
    db.session.add(cauliflower_veggie_fried_rice_9)
    db.session.add(garlic_basil_french_fries_1)
    db.session.add(garlic_basil_french_fries_2)
    db.session.add(garlic_basil_french_fries_3)
    db.session.add(garlic_basil_french_fries_4)
    db.session.add(berry_banana_smoothie_1)
    db.session.add(berry_banana_smoothie_2)
    db.session.add(garlicky_kale_1)
    db.session.add(garlicky_kale_2)
    db.session.add(garlicky_kale_3)
    db.session.add(garlicky_kale_4)
    db.session.add(kidney_bean_jumbalaya_1)
    db.session.add(kidney_bean_jumbalaya_2)
    db.session.add(kidney_bean_jumbalaya_3)
    db.session.add(kidney_bean_jumbalaya_4)
    db.session.add(kidney_bean_jumbalaya_5)
    db.session.add(kidney_bean_jumbalaya_6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipe_directions():
    db.session.execute('TRUNCATE recipe_directions RESTART IDENTITY CASCADE;')
    db.session.commit()
