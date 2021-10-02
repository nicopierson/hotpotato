import React, {useEffect} from 'react'
import './ProfilePage.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesForGivenUser } from '../../store/recipe';
import { getAllFollowers, getAllFollowings } from '../../store/follow';

import  RecipeCardComponent  from '../RecipeCardComponent/';
import Profile from '../Profile'


export const ProfilePage = () => {
  const dispatch = useDispatch()
  const {userId} = useParams();

  // state recipesToDisplay
  // if recipesToDisplay === users, show users
  // if recipesToDisplay === likes, show recipe users liked
  const user = useSelector(state => state.session.user);
  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);

  useEffect(() => {
    dispatch(getAllRecipesForGivenUser(userId));
    if (user.id) {
      dispatch(getAllFollowers(user.id));
      dispatch(getAllFollowings(user.id));
    }
  }, [dispatch])




  return (
    <div className="page-cover-container">
      {/* cover photo */}
      {/* left sidebar */}

      <div className="sidebar-and-recipes-container">
        <div className="user-side-bar-wrapper">
          <div className="user-side-bar-container" > <Profile/></div>
        </div>


        {/* redner recipes that user liked */}

        {/* render users recipes */}
        <div className="users-recipes-container">
          {recipeDetails &&
            <div className="users-recipes-cards" >
              {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes} username={recipe.username} profileImg={recipe.profile_img}/>))}
            </div>}
        </div>

      </div>


    </div>
  )
}
