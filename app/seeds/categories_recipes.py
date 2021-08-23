from app.models import db, Recipe, Category


def seed_categories():

    # Example categories
    # Vietnamese, Indian, Greek, French, Caribbean, Italian, Thai, Japanese, African
    # Mexican, Mediterranean, Southern, German, Cajun, American, Korean, Jewish, Spanish, Irish
    temporary_description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    categories = [
        ["vegetarian", "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"],
        ["dairy free", "https://purewows3.imgix.net/images/articles/2017_02/dairy_free_2.jpg?auto=format,compress&cs=strip"],
        ["gluten free", "https://www.forksoverknives.com/wp-content/uploads/fly-images/111031/Curried-Millet-Sushi-wordpress-scaled-688x387-c.jpg"],
        ["asian", "https://cdn.builtinchicago.org/sites/www.builtinchicago.org/files/styles/ckeditor_optimize/public/inline-images/chowbus.jpg"],
        ["healthy", "https://www.eatthis.com/wp-content/uploads/sites/4/2020/02/air-fryer-falafel.jpg?quality=82&strip=1&resize=640%2C360"],
        ["surprise me", "https://www.worldatlas.com/r/w768/upload/f7/96/6f/shutterstock-217615369.jpg"],
        ["vegan", "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20210309101639/ri/1200/picture/2021/3/shutterstock_1652895442.jpg"],
        ["vietnamese", "https://www.telegraph.co.uk/content/dam/food-and-drink/2019/03/07/Vietnamese-Recipes-Bun-Cha_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1400"],
        ["southern", "https://images.squarespace-cdn.com/content/v1/5e2a916ecd08830d90a67252/1586658131034-W73EE36EO02NKW3NL5FS/FBF23150-0ECB-4319-B2B6-B115C8720B98.JPG"],
        ["mexican", "https://img.delicious.com.au/ku6i2Q-s/del/2018/05/mexican-black-bean-and-corn-nachos-81127-2.jpg"],
        ["mediterranean", "https://images.everydayhealth.com/images/diet-nutrition/mediterranean-diet/mediterranean-diet-recipes-01-722x406.jpg?w=768"],
        ["cajun", "https://www.eatwell101.com/wp-content/uploads/2020/03/Cajun-Shrimp-and-Sausage-recipe.jpg"],
        ["german", "https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Cooked-Reuben-Brats_exps90708_TH132767B04_24_1bC_RMS-2.jpg?fit=700,1024"],
        ["thai", "https://assets.epicurious.com/photos/5b19aa4a18f10d6be39984cc/master/w_1280,c_limit/Thai-Style-Squid-and-Cucumber-Salad-recipe-30052918.jpg"],
        ["japanese", "https://img.taste.com.au/etA1_4lZ/w643-h428-cfill-q90/taste/2018/04/quick-japanese-chicken-curry-136596-1.jpg"],
        ["caribbean", "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/carribean-chicken_CR-f27e7f5.jpg?webp=true&quality=90&crop=10px%2C2881px%2C4409px%2C1897px&resize=940%2C399"],
        ["greek", "https://heatherchristo.com/wp-content/uploads/2020/02/49484292936_c81d7706bd_o-scaled.jpg"],
        ["indian", "https://delhi6sweets.com.au/wp-content/uploads/2021/04/image1.jpg"],
        ["chadian", "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Feast_Jollof_037.jpg?itok=S141x1o1"],
        ["french", "https://www.omeron.travel/wp-content/uploads/2020/07/AdobeStock_163849044@0.5x-1024x683.jpg"],
        ["american", "https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/master/pass/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg"],
        ["dessert", "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Cherry-Cheesecake-with-Berry-Sauce.png"],
        ["savory", "https://www.grandecig.com/hs-fs/hubfs/images/blog_images/2019-Blog-Images/Savory_Snacks.jpg?width=734&name=Savory_Snacks.jpg"],
        ["meat", "https://www.firstlight.farm/assets/resized/sm/upload/fm/kk/km/dp/fl-11-9-19-0073-0-640-0-426-crop.jpg?k=9b160f824d"],
        ["australian", "https://www.lonsdaleinstitute.edu.au/blog/wp-content/uploads/2017/06/Lonsdale-Institute-12-Iconic-Foods-You-Must-Try-When-In-Australia-1.jpg"],
        ["beverages", "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage.jpg"],
        ["spicy", "https://penntoday.upenn.edu/sites/default/files/2019-02/spicypeppers.jpg"],
        ["antarctica", "https://www.coolantarctica.com/schools/DSCF3711.jpg"],
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
