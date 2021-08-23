import React, {useEffect} from 'react'
import './FeedPage.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesUserFollowsByNew } from '../../store/recipe';
// import { getAllRecipesForGivenUser } from '../../store/recipe';
// import { getAllRecipesUserFollowsByTrending } from '../../store/recipe';

import  RecipeCardComponent  from '../RecipeCardComponent/';
import DropDownMenu from '../DropDownMenu/DropDownMenu';


export const FeedPage = () => {
  const dispatch = useDispatch()
  // const {userId} = useParams();

  const user_id = useSelector(state => state.session.user?.id);

  // if sort is new use recipeDetails = ....
  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);

  useEffect(() => {
    // dispatch(getAllRecipesForGivenUser(user_id))
    dispatch(getAllRecipesUserFollowsByNew(user_id))
  }, [dispatch])


  return (
    <div className="feed-page-wrapper">
      {/* banner (optional) */}


      {recipeDetails && <div className="fpw-feed-container">
          {/* header and filter bar */}
          <div className="header-sort-container">
            <div className="hsc__title"> <span>View your follows </span>  <span>& interests </span>  </div>
            <div className="hsc__sort-container">
              <div className ="hsc-sc__sort-label"> sort</div>

              <div className="hsc-sc__drop-down">
                {user_id && <DropDownMenu user_id={user_id}></DropDownMenu>}
              </div>
            </div>
          </div>

          {recipeDetails &&
            <div className="fpw-feed-container__recipe-cards" >
              {/* render users recipes based on who they follow */}
              {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes} username={recipe.username}/>))}
            </div>}
      </div>}



    </div>
  )
}
