from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    comment_1 = Comment(
        comment="I made a little bit more of the sauce than the recipe called for the second time to coat the tofu. The first time I made it, I followed the recipe, and while the broccoli was very good, the tofu was super bland. Marinating the tofu beforehand can also help!", user_id=1, recipe_id=1)
    comment_2 = Comment(
        comment="added mushrooms and doubled the sauce! It was delicious :) I also marinated the tofu for an hour", user_id=2, recipe_id=1)
    comment_3 = Comment(
        comment="This was a BIG hit. I followed the advice to double the sauce (basically everything but the tofu and broccoli) and it was perfect.", user_id=3, recipe_id=1)
    comment_4 = Comment(
        comment="This was delicious. Needed a lot more soy sauce but I’m now officially a tofu person", user_id=1, recipe_id=1)
    comment_5 = Comment(
        comment="This was great! I marinated the tofu in soy sauce so it would have some flavor. I also added in onion, bell peppers, mushrooms, and carrots to make it a stir fry.", user_id=1, recipe_id=2)
    comment_6 = Comment(
        comment="I made it with tricolor quinoa! It was delicious!", user_id=2, recipe_id=2)
    comment_7 = Comment(
        comment="add some water chestnuts and some sriracha. thank me later", user_id=3, recipe_id=2)
    comment_8 = Comment(
        comment="It’s my first time making n drinking a smoothie,and I don’t eat any fruits or vegetables at all. I made this and it was easy and good!! I’ll make it again 4 sure! If u want it more sweet - add tbsp of honey ( for me it was sweet enough)", user_id=1, recipe_id=4)
    comment_9 = Comment(
        comment="DELICIOUS!!! I make it so much I honestly love it !", user_id=3, recipe_id=4)
    comment_10 = Comment(
        comment="I adde chia seeds, flax seeds & oats for added thickness & fiber to keep for for longer. It helps if you want the smoothie to replace a meal.", user_id=2, recipe_id=4)
    comment_11 = Comment(
        comment="I used dried oregano instead of dried basil. Still very tasty! 😋", user_id=1, recipe_id=3)
    comment_12 = Comment(
        comment="These where great! Me and my sister made them for Christmas “dinner” (lunch😂)", user_id=3, recipe_id=3)
    comment_13 = Comment(
        comment="I added mushrooms and onions too it! Amazing ❤️", user_id=1, recipe_id=5)
    comment_14 = Comment(
        comment="Garlic Kale was so so good!!!!! This is a must do again dish!!!", user_id=3, recipe_id=5)
    comment_15 = Comment(
        comment="This is a pretty accurate jambalaya! As someone from New Orleans, I was skeptical of the recipe at first but it’s great. Honestly I was surprised.", user_id=1, recipe_id=6)
    comment_16 = Comment(
        comment="Wow!!! This came out sooooo delicious. Definitely will continue to make this over and over and over again. Yummmmmmmy!!!", user_id=2, recipe_id=6)
    
    db.session.add(comment_1)
    db.session.add(comment_2)
    db.session.add(comment_3)
    db.session.add(comment_4)
    db.session.add(comment_5)
    db.session.add(comment_6)
    db.session.add(comment_7)
    db.session.add(comment_8)
    db.session.add(comment_9)
    db.session.add(comment_10)
    db.session.add(comment_11)
    db.session.add(comment_12)
    db.session.add(comment_13)
    db.session.add(comment_14)
    db.session.add(comment_15)
    db.session.add(comment_16)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
