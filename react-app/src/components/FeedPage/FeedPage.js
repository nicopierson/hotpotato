import React, {useEffect, useState} from 'react'
import './FeedPage.css'

import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesUserFollowsByNew } from '../../store/recipe';
// import { getAllRecipesForGivenUser } from '../../store/recipe';
// import { getAllRecipesUserFollowsByTrending } from '../../store/recipe';
import { getAllRecipesUserFollowsByTrending } from '../../store/recipe';

import  RecipeCardComponent  from '../RecipeCardComponent/';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export const FeedPage = () => {
  const dispatch = useDispatch()
  const user_id = useSelector(state => state.session.user?.id);
  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);

  const [searchBy, setsearchBy] = useState("Most Recent")

  useEffect(() => {
    // dispatch(getAllRecipesForGivenUser(user_id))
    switch (searchBy) {
      case 'Most Recent':
        dispatch(getAllRecipesUserFollowsByNew(user_id))
        break;
      case 'Trending':
        dispatch(getAllRecipesUserFollowsByTrending(user_id))
        break;
      default:
        // dispatch(getAllRecipesUserFollowsByNew(user_id))
        break;
    }

  }, [dispatch, searchBy])




  return (
    <div className="feed-page-wrapper">
      {/* banner (optional) */}


      {recipeDetails && <div className="fpw-feed-container">
          {/* header and filter bar */}
          <div className="header-sort-container">
            <div className="hsc__title"> <span>View your follows </span>  <span>& interests </span>  </div>
            <div className="hsc__sort-container">

              {/* <div className ="hsc-sc__sort-label">
                 <div className="sort-sort">sort</div>
              </div> */}

              <div className="hsc-sc__drop-down">
                <div className="dropdown">
                  <span>{searchBy}</span>
                  <i className="fas fa-caret-down hhsc-sc-dd__sort-icon"></i>

                  <div className="dropdown-content">
                    <div onClick={()=>setsearchBy('Most Recent')} className="dropdown-button">Most Recent</div>
                    <div onClick={()=>setsearchBy('Trending')} className="dropdown-button">Trending</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {recipeDetails &&
            <div className="fpw-feed-container__recipe-cards" >
              {/* render users recipes based on who they follow */}
              {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes} username={recipe.username} profileImg={recipe.profile_img}/>))}
            </div>}
      </div>}
      <div className='explore-infinite-container'>
        <div className="explore-infinite-button"> Load More</div>
      </div>



    </div>
  )
}
