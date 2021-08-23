from app.models import db, Recipe, Category


def seed_categories():

    # Example categories
    # Vietnamese, Indian, Greek, French, Caribbean, Italian, Thai, Japanese, African
    # Mexican, Mediterranean, Southern, German, Cajun, American, Korean, Jewish, Spanish, Irish
    temporary_description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    categories = [
        ["spicy", "https://penntoday.upenn.edu/sites/default/files/2019-02/spicypeppers.jpg"],
        ["antarctica", "https://www.coolantarctica.com/schools/DSCF3711.jpg"],
        ["vegan", "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210309101639/ri/1200/picture/2021/3/shutterstock_1652895442.jpg"],
        ["dessert", "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Cherry-Cheesecake-with-Berry-Sauce.png"],
        ["southern", "https://images.squarespace-cdn.com/content/v1/5e2a916ecd08830d90a67252/1586658131034-W73EE36EO02NKW3NL5FS/FBF23150-0ECB-4319-B2B6-B115C8720B98.JPG"],
        ["chadian", "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Feast_Jollof_037.jpg?itok=S141x1o1"],
        ["gluten free", "https://www.forksoverknives.com/wp-content/uploads/fly-images/111031/Curried-Millet-Sushi-wordpress-scaled-688x387-c.jpg"],
        ["french", "https://i1.wp.com/luxuryactivist.com/wp-content/uploads/Luxury-Diner-tips.jpg?ssl=1"],
        ["savory", "https://www.grandecig.com/hs-fs/hubfs/images/blog_images/2019-Blog-Images/Savory_Snacks.jpg?width=734&name=Savory_Snacks.jpg"],
        ["european", "https://www.omeron.travel/wp-content/uploads/2020/07/AdobeStock_163849044@0.5x-1024x683.jpg"],
        ["american", "https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/master/pass/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg"],
        ["meat", "https://www.firstlight.farm/assets/resized/sm/upload/fm/kk/km/dp/fl-11-9-19-0073-0-640-0-426-crop.jpg?k=9b160f824d"],
        ["australian", "https://www.lonsdaleinstitute.edu.au/blog/wp-content/uploads/2017/06/Lonsdale-Institute-12-Iconic-Foods-You-Must-Try-When-In-Australia-1.jpg"],
        ["beverages", "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage.jpg"],
        ["vegetarian", "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"],
        ["asian", "https://cdn.builtinchicago.org/sites/www.builtinchicago.org/files/styles/ckeditor_optimize/public/inline-images/chowbus.jpg"],
        ["seafood", "https://media.istockphoto.com/photos/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-picture-id1305699663?k=6&m=1305699663&s=612x612&w=0&h=xoKWmYbAeiv6Vac-5w4Tc5ziln3V3KQkSNlTEhMBxn0="],
        ["south american", "https://www.2knowandvote.com/wp-content/uploads/2016/11/South-America-Food-Tamales.jpg"],
        ["surprise Me", "https://www.worldatlas.com/r/w768/upload/f7/96/6f/shutterstock-217615369.jpg"],
    ]

    categories_to_db = []
    for category in categories:
        category_to_add = Category(
            image_url=category[1], name=category[0], description=temporary_description)
        categories_to_db.append(category_to_add)
    db.session.add_all(categories_to_db)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
