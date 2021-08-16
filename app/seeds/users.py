from app.models import db, User
from sqlalchemy import insert


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
    carme = User(
        username='carme_ruscalleda', email='carme_ruscalled@santpau.sp', password='password')
    gordon = User(
        username='gordon_ramsay', email='gordon_ramsay@hellskitchen.uk', password='password')
    anne = User(
        username='anne-sophie_pic', email='anne-sophie_pic@maisonpic.fr', password='password')
    anthony = User(
        username='anthonybourdain', email='anthonybourdain@noreservations.us', password='password')
    bobby = User(
        username='bobby_flay', email='bobbyflay@ironchef.us', password='password')
    hiroyuki = User(
        username='hiroyuki_sakai', email='hiroyuki_sakai@ironchef.fr', password='password')
    masaharu = User(
        username='masaharu_morimoto', email='masaharu_morimoto@ironchef.jp', password='password')
    
    # add followers users
    wes.followers.append(demo)
    wes.followers.append(marnie)
    nico.followers.append(leslie)
    nico.followers.append(wes)
    leslie.followers.append(casey)
    leslie.followers.append(nico)
    casey.followers.append(demo)
    casey.followers.append(leslie)

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(nico)
    db.session.add(leslie)
    db.session.add(casey)
    db.session.add(wes)


    db.session.add(carme)
    db.session.add(gordon)
    db.session.add(anne)
    db.session.add(anthony)
    db.session.add(bobby)
    db.session.add(hiroyuki)
    db.session.add(masaharu)    
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
