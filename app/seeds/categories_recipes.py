from app.models import db, Recipe, Category
from sqlalchemy import insert

# seed categories and recipes - then add relationship


def seed_categories():

    # add recipes
    broccoli_tofu = Recipe(
        thumbnail_url='https://myfoodstory.com/wp-content/uploads/2018/07/Crispy-Tofu-Broccoli-Stir-Fry-2.jpg', name='Broccoli Tofu Feast', user_id=2)
    garlic_basil_french_fries = Recipe(
        thumbnail_url='https://spoonacular.com/recipeImages/715594-312x231.jpg', name='Homemade Special Garlic and Basil French Fries', user_id=2)

    # db.session.add(broccoli_tofu)
    # db.session.add(garlic_basil_french_fries)
    # db.session.commit()

    temporary_description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    categories = {
        ["spicy", "https://penntoday.upenn.edu/sites/default/files/2019-02/spicypeppers.jpg"],
        ["Antartica", "https://www.coolantarctica.com/schools/DSCF3711.jpg"],
        ["dessert", "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Cherry-Cheesecake-with-Berry-Sauce.png"],
        ["soul", "https://images.squarespace-cdn.com/content/v1/5e2a916ecd08830d90a67252/1586658131034-W73EE36EO02NKW3NL5FS/FBF23150-0ECB-4319-B2B6-B115C8720B98.JPG"],
        ["Africa", "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Feast_Jollof_037.jpg?itok=S141x1o1"],
        ["fancy", "https://i1.wp.com/luxuryactivist.com/wp-content/uploads/Luxury-Diner-tips.jpg?ssl=1"],
        ["savory", "https://www.grandecig.com/hs-fs/hubfs/images/blog_images/2019-Blog-Images/Savory_Snacks.jpg?width=734&name=Savory_Snacks.jpg"],
        ["Europe", "https://www.omeron.travel/wp-content/uploads/2020/07/AdobeStock_163849044@0.5x-1024x683.jpg"],
        ["North America", "https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/master/pass/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg"],
        ["meat", "https://www.firstlight.farm/assets/resized/sm/upload/fm/kk/km/dp/fl-11-9-19-0073-0-640-0-426-crop.jpg?k=9b160f824d"],
        ["Australia", "https://www.lonsdaleinstitute.edu.au/blog/wp-content/uploads/2017/06/Lonsdale-Institute-12-Iconic-Foods-You-Must-Try-When-In-Australia-1.jpg"],
        ["beverages", "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage.jpg"],
        ["greens", "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"],
        ["Asia", "https://cdn.builtinchicago.org/sites/www.builtinchicago.org/files/styles/ckeditor_optimize/public/inline-images/chowbus.jpg"],
        ["seafood", "https://media.istockphoto.com/photos/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-picture-id1305699663?k=6&m=1305699663&s=612x612&w=0&h=xoKWmYbAeiv6Vac-5w4Tc5ziln3V3KQkSNlTEhMBxn0="],
        ["South America", "https://www.2knowandvote.com/wp-content/uploads/2016/11/South-America-Food-Tamales.jpg"],
        ["Surprise Me", "https://www.worldatlas.com/r/w768/upload/f7/96/6f/shutterstock-217615369.jpg"],
    }

    # add categories
    vegan = Category(
        image_url="https://post.healthline.com/wp-content/uploads/2020/09/vegan-diet-guide-fb-1200x628.jpg", name='vegan', description=temporary_description)

    vegan.category_recipes.append(garlic_basil_french_fries)
    vegan.category_recipes.append(broccoli_tofu)

    db.session.add(vegan)
    db.session.commit()

    categories_to_db = []
    for category in categories:
        category_to_add = Category(
            image_url=category[1], name=category[0], description=temporary_description)
        categories_to_db.append(category_to_add)
    db.session.add_all(categories_to_db)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
