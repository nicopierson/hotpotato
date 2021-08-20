import React, {useEffect} from 'react'
import './ProfilePage.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesForGivenUser } from '../../store/recipe';
import  RecipeCardComponent  from '../RecipeCardComponent/';

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const {userId} = useParams();

  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);

  useEffect(() => {
    dispatch(getAllRecipesForGivenUser(userId))
  }, [dispatch])

  if(recipeDetails) recipeDetails.forEach(recipe => console.log(recipe))

  return (
    <div>
      <div style={{"margin-top":"50px"}}> hello from profile</div>
      {recipeDetails &&
        <div>
          {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes}/>))}
        </div>}

    </div>
  )
}
