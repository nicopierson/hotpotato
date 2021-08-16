from app.models import db, RecipePhoto


# Adds a demo user, you can add other users here if you want
def seed_recipe_photos():
    broccoli_tofu = RecipePhoto(
        video_url='https://www.youtube.com/watch?v=mTFi3oW-JRM', img_url='https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80', recipe_id=1)
    cauliflower_veggie_fried_rice = RecipePhoto(
        video_url='https://www.youtube.com/watch?v=Osb1MpN5y-4', img_url='https://images.unsplash.com/photo-1627662235835-1c1d3817418e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80', recipe_id=2)
    garlic_basil_french_fries = RecipePhoto(
        video_url='https://www.youtube.com/watch?v=3IhKjd9SVoU', img_url='https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', recipe_id=3)
    berry_banana_smoothie = RecipePhoto(
        video_url='https://www.youtube.com/watch?v=3_h-ILdpfXI', img_url='https://images.unsplash.com/photo-1514995669114-6081e934b693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', recipe_id=1
    )
    garlicky_kale = RecipePhoto(
        video_url='https://www.youtube.com/watch?v=BYxY6K1IaUs', img_url='https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', recipe_id=2
    )
    kidney_bean_jumbalaya = RecipePhoto(
        video_url='https://www.youtube.com/watch?v=MTw0CjjZcD0', img_url='https://lh3.googleusercontent.com/proxy/uNpi4nyrs-q_v17NafSXagyrvNeaiy98zbo7S8GcUlal3JA8CrfGUMlo7_vAWOZjc0ZZs4165eSPpklV_y1_u2Z4GyyK0--ZCNcW6qGYTK4lXBKkVvIYyVw5SLj-AmTuNFTOBQNO', recipe_id=3
    )

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
def undo_recipe_photos():
    db.session.execute('TRUNCATE recipe_photos RESTART IDENTITY CASCADE;')
    db.session.commit()
