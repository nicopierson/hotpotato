import React, {useState, useEffect} from 'react'
import './LandingPage.css'
import {useSelector, useDispatch} from 'react-redux';

import RecipeCardComponent from '../RecipeCardComponent';
import { setAllCategories } from '../../store/category';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllRecipesForGivenCategory } from '../../store/recipe';
import { getAllRecipesForHomePage } from '../../store/recipe';
import { setMoreRecipesForHomePage } from '../../store/recipe';

const LandingPage = () => {
  const dispatch = useDispatch()

  // const user_id = useSelector(state => state.session.user?.id);
  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);
  const categories_from_server = useSelector((state)=> state.category?.categories)

  const [deviceType, setDeviceType] = useState('desktop');
  const [bannerText, setBannerText] = useState('Your Next hotpotato Starts Here');
  const [categoryDescription, setCategoryDescription] = useState('search here for your next culinary inspiration or create a Hotpotato of your own!');
  const [categorySelected, setCategorySelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

 


  const set_category_select = (value, description)=>{
    setCategorySelected(value);
    setBannerText(value);
    setCategoryDescription(description);
  }

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

  useEffect(() => {
    dispatch(setAllCategories())
    if (categorySelected){
      dispatch(getAllRecipesForGivenCategory(categorySelected))
    }
    else{
      currentPage === 1 ? dispatch(getAllRecipesForHomePage()): dispatch(setMoreRecipesForHomePage(currentPage))
    }
    // dispatch(getAllRecipesUserFollowsByNew(user_id))
  }, [dispatch, categorySelected, currentPage])



  return (
    <div>
      {categories_from_server && <div className="select-category-container">
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
            {categories_from_server.map(category=>
                // inline bg img based on category url
                // black transparent background
                // onHover, cover text, cover transparent bg, keep background img
                // on click add item to "select"
                <div onClick={()=>set_category_select(category.name, category.description)} className="category-background-container" >

                  <div style={{backgroundImage: `url(${category.image_url})`, 'backgroundRepeat':'no-repeat', 'backgroundSize':'cover'}} className="cbc__cover"></div>

                  <div className={categorySelected === category.name ? "test--selected": "test"}></div>

                  <div className="category-item">
                    {category.name}
                  </div>
                </div>
            )}
          </Carousel>
        </div>

        <div className="banner-container">
          <div className="bc__header"> {bannerText} </div>
          <div className="bc__description">{categoryDescription} </div>

          {/* search results for... */}

        </div>
      </div>}

      {/* cards */}
      <div className="feed-page-wrapper">
        {recipeDetails && <div className="fpw-feed-container">

            {recipeDetails &&
              <div className="fpw-feed-container__recipe-cards" >
                {/* render users recipes based on who they follow */}
                {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes} username={recipe.username} profileImg={recipe.profile_img}/>))}
              </div>}
        </div>}
      </div>
      <div className='explore-infinite-container'>
        <div onClick={()=>setCurrentPage(currentPage+1)}className="explore-infinite-button"> Load More</div>
      </div>

    </div>
  )
}

export default LandingPage;
