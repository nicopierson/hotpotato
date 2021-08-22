import React, {useState, useEffect} from 'react'
import './LandingPage.css'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import RecipeCardComponent from '../RecipeCardComponent';
import { getAllRecipesForGivenUser } from '../../store/recipe';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import MobileDetect from "mobile-detect";
// todo
const LandingPage = () => {
  const dispatch = useDispatch()

  const user_id = useSelector(state => state.session.user?.id);
  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);
  // fetch categories

  // temporary categories
  // https://leafyplace.com/types-of-cuisine/
  let categories = ["spicy", "vegan", "dessert", "soul", "McDs", "dinner", "savory", "sweet", "meat", "appetizers", "beverages", "greens", "seafood", "North America", "South America", "Europe", "Africa", "Asia", "Australia", "Antartica", "Surprise" ]

  const testing_img_url ="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"

  const [deviceType, setDeviceType] = ('desktop');

  useEffect(() => {
    dispatch(getAllRecipesForGivenUser(user_id))
    // dispatch(getAllRecipesUserFollowsByNew(user_id))
  }, [dispatch])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 700 },
      items: 7,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <div>
      <div className="select-category-container">
        <div className="scc__carousel">

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="400ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carousel-wrapper"
          >
            {/* for each category, create category style, onclick, run query with category to update redux store */}
            {categories.map(category=>
                // inline bg img based on category url
                // black transparent background
                // onHover, cover text, cover transparent bg, keep background img
                // on click add item to "select"
                <div className="category-background-container" >

                  <div style={{backgroundImage: `url(${testing_img_url})`, 'backgroundRepeat':'no-repeat', 'backgroundSize':'cover'}} className="cbc__cover"></div>

                  <div className="test"></div>

                  <div className="category-item">
                    {category}
                  </div>

                </div>

            )}

          </Carousel>

        </div>
        <div className=""> Text Banner Goes Here</div>
      </div>

      <div className="feed-page-wrapper">
        {recipeDetails && <div className="fpw-feed-container">

            {recipeDetails &&
              <div className="fpw-feed-container__recipe-cards" >
                {/* render users recipes based on who they follow */}
                {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes} username={recipe.username}/>))}
              </div>}
        </div>}
      </div>
    </div>
  )
}

export default LandingPage;
