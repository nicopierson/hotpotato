import React, {useEffect, useState} from 'react'
import './ViewEditRecipePage.css'
import RecipeBaseDetails from '../Recipe/RecipeBaseDetails';
import { useParams } from 'react-router';
import { getRecipe } from '../../store/recipe';
import { useDispatch } from 'react-redux';


const ViewEditRecipePage = () => {

  //the /:id from url, use the 'useParams' from react-router to get the correct id

  let {id} = useParams();
  const dispatch = useDispatch()

  // getting the recipe based on ID and adding it to the store.
  useEffect(()=>{
    dispatch(getRecipe(id))
  }, [dispatch, id])


  return (
    <div className="ver-page-container">
      <div className="content-container">
        <div className="recipe-base-container">
          <RecipeBaseDetails/>
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
