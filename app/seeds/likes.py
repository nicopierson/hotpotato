from app.models import db, Like


def seed_likes():
    like_1 = Like(user_id=1, recipe_id=1)
    like_2 = Like(user_id=1, recipe_id=2)
    like_3 = Like(user_id=1, recipe_id=3)
    like_4 = Like(user_id=1, recipe_id=4)
    like_5 = Like(user_id=1, recipe_id=5)
    like_6 = Like(user_id=1, recipe_id=6)
    like_7 = Like(user_id=2, recipe_id=1)
    like_8 = Like(user_id=2, recipe_id=2)
    like_9 = Like(user_id=3, recipe_id=3)
    like_10 = Like(user_id=3, recipe_id=4)
    like_11 = Like(user_id=3, recipe_id=5)
    like_12 = Like(user_id=4, recipe_id=6)
    like_13 = Like(user_id=5, recipe_id=1)
    like_14 = Like(user_id=5, recipe_id=2)
    like_15 = Like(user_id=6, recipe_id=3)
    like_16 = Like(user_id=7, recipe_id=4)
    like_17 = Like(user_id=10, recipe_id=5)
    like_18 = Like(user_id=11, recipe_id=6)

    db.session.add(like_1)
    db.session.add(like_2)
    db.session.add(like_3)
    db.session.add(like_4)
    db.session.add(like_5)
    db.session.add(like_6)
    db.session.add(like_7)
    db.session.add(like_8)
    db.session.add(like_9)
    db.session.add(like_10)
    db.session.add(like_11)
    db.session.add(like_12)
    db.session.add(like_13)
    db.session.add(like_14)
    db.session.add(like_15)
    db.session.add(like_16)
    db.session.add(like_17)
    db.session.add(like_18)


    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
