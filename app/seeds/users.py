from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    nico = User(
        username='nico', email='nico@gmail.com', password='password')
    leslie = User(
        username='leslie', email='leslie@gmail.com', password='password')
    casey = User(
        username='casey', email='casey@gmail.com', password='password')
    wes = User(
        username='wes', email='wes@gmail.com', password='password')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(nico)
    db.session.add(leslie)
    db.session.add(casey)
    db.session.add(wes)

    db.session.commit()



# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
