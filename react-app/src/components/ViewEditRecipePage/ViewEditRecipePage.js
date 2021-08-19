import React, {useEffect, useState} from 'react'
import './ViewEditRecipePage.css'
import RecipeBaseDetails from '../Recipe/RecipeBaseDetails';
import { useParams } from 'react-router';
import { getRecipe } from '../../store/recipe';
import { useDispatch, useSelector } from 'react-redux';


const ViewEditRecipePage = () => {

  //the /:id from url
  let {recipeId} = useParams();
  const dispatch = useDispatch()

  const recipeDetails= useSelector((state) => state.recipe[recipeId]);
  // console.log(recipeDetails)


  if (recipeDetails) {
    // console.log('recipe details comments', recipeDetails.name);
    for (const [key,value] of Object.entries(recipeDetails)){
      console.log(key, value)
    }

  }

  // getting the recipe based on ID and adding it to the store.
  useEffect(()=>{
    dispatch(getRecipe(recipeId))
  }, [dispatch], recipeId)


  return (
    <div className="ver-page-container">
      <div className="content-container">
        <div className="recipe-base-container">
          <RecipeBaseDetails />
        </div>
        <div className="recipe-photos-container">recipe photos</div>
        <div className="recipe-ingredients-container">ingredients</div>
        <div className="recipe-directions-container">directions</div>
        <div className="recipe-comments-container">comments</div>
      </div>

    </div>
  )
}
export default ViewEditRecipePage;
