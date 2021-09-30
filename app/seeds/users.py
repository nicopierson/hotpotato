from app.models import db, User
from sqlalchemy import insert


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/dolly-983275890092.jpeg')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/marney-28974589.jpeg')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/Robert-238975892.jpeg')

    nico = User(
        username='nico', email='nico@gmail.com', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/7B7DB22F-9958-4C6C-9103-EF047518F0B1_1_201_a.jpg')
    leslie = User(
        username='leslie', email='leslie@gmail.com', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/72899446.jpeg')
    casey = User(
        username='casey', email='casey@gmail.com', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/61769975.jpeg')
    wes = User(
        username='wes', email='wes@gmail.com', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/32968155.jpeg')
    carme = User(
        username='carme_ruscalleda', email='carme_ruscalled@santpau.sp', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/carme-ruscalleda-1608023364.jpeg')
    gordon = User(
        username='gordon_ramsay', email='gordon_ramsay@hellskitchen.uk', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/gordon-ramsay-te-main-201019.jpeg')
    anne = User(
        username='anne-sophie_pic', email='anne-sophie_pic@maisonpic.fr', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/anne_sophie-pic-2398745982.jpg')
    anthony = User(
        username='anthonybourdain', email='anthonybourdain@noreservations.us', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/anthony-bourdain-345234543.jpeg')
    bobby = User(
        username='bobby_flay', email='bobbyflay@ironchef.us', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/flay-1531174427795.jpeg')
    hiroyuki = User(
        username='hiroyuki_sakai', email='hiroyuki_sakai@ironchef.fr', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/hiroyuki-290384.jpeg')
    masaharu = User(
        username='masaharu_morimoto', email='masaharu_morimoto@ironchef.jp', password='password', profile_img='https://hotpotato-app.s3.us-west-1.amazonaws.com/profile/masaharu-1536248277.jpeg')
    
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
