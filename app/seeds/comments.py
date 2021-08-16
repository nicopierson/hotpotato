from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    comment_1 = Comment(
        comment="I made a little bit more of the sauce than the recipe called for the second time to coat the tofu. The first time I made it, I followed the recipe, and while the broccoli was very good, the tofu was super bland. Marinating the tofu beforehand can also help!", user_id=1, recipe_id=1)
    comment_2 = Comment(
        comment="added mushrooms and doubled the sauce! It was delicious :) I also marinated the tofu for an hour", user_id=1, recipe_id=1)
    comment_3 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_4 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_5 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_6 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_7 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_8 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_9 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_10 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_11 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_12 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_13 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_14 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_15 = Comment(
        comment="", user_id=1, recipe_id=1)
    comment_16 = Comment(
        comment="", user_id=1, recipe_id=1)
    
    db.session.add(comment_1)
    db.session.add(comment_2)
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
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
