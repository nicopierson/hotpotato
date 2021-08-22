from app.models import db, Recipe


# Adds a demo user, you can add other users here if you want
def seed_recipes():
    broccoli_tofu = Recipe(
        thumbnail_url='https://myfoodstory.com/wp-content/uploads/2018/07/Crispy-Tofu-Broccoli-Stir-Fry-2.jpg', name='Broccoli Tofu Stir-Fry', user_id=1)

    db.session.add(broccoli_tofu)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_recipes():
    db.session.execute('TRUNCATE recipes RESTART IDENTITY CASCADE;')
    db.session.commit()
