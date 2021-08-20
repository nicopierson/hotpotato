import React, {useEffect} from 'react'
import './ProfilePage.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesForGivenUser } from '../../store/recipe';
import  RecipeCardComponent  from '../RecipeCardComponent/';

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const {userId} = useParams();
  // state recipesToDisplay
  // if recipesToDisplay === users, show users
  // if recipesToDisplay === likes, show recipe users liked

  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);

  useEffect(() => {
    dispatch(getAllRecipesForGivenUser(userId))
  }, [dispatch])

  if(recipeDetails) recipeDetails.forEach(recipe => console.log(recipe))

  return (
    <div className="page-cover-container">
      {/* cover photo */}
      {/* left sidebar */}

      <div className="sidebar-and-recipes-container">
        <div className="user-side-bar-container"> left side bar</div>


        {/* redner recipes that user liked */}

        {/* render users recipes */}
        <div className="users-recipes-container">
          {recipeDetails &&
            <div className="users-recipes-cards">
              {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes}/>))}
            </div>}
        </div>

      </div>


    </div>
  )
}
