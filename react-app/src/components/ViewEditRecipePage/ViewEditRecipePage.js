import React, {useEffect} from 'react'
import { useState } from 'react';
import './ViewEditRecipePage.css'
import RecipeBaseDetails from '../RecipeBaseDetails/RecipeBaseDetails';
import { useParams } from 'react-router';
import { getRecipe } from '../../store/recipe';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import RecipePhoto from '../RecipePhotos/RecipePhoto';

import Directions from '../Directions';
import Comments from '../Comments/Comments';
import Ingredients from '../Ingredients';
import Like from '../Like';

import { deleteRecipe } from '../../store/recipe';
import { loadLikes } from '../../store/like';



const ViewEditRecipePage = () => {
  const history = useHistory()

  //the /:id from url
  let { recipeId } = useParams();
  const user = useSelector(state => state.session.user);

  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch()

  // const recipeDetails= useSelector((state) => state.recipe[recipeId]);

  // fetching the recipe based on ID and adding it to the store.
  useEffect(() => {
    dispatch(getRecipe(recipeId));
    if (user?.id) {
      dispatch(loadLikes(user.id));
    }
  }, [dispatch, recipeId])

  useEffect(() => {
    if (deleted) {
      dispatch(deleteRecipe(recipeId));
      history.push('/');
    }
  }, [deleted, recipeId, dispatch])

  if (!recipeId) return <h2>Recipe Not Found</h2>;

  return (
    <div className="ver-page-container">
      <div className="content-container">
        <div className='recipe-utilities'>
          <button className='recipe-util-btn fas fa-minus-circle recipe-delete' value={deleted} onClick={() => setDeleted(true)}></button>
          <Like recipeId={+recipeId}/>
          <button className='recipe-share fas fa-share recipe-util-btn'></button>
        </div>
        <div className="recipe-base-container">
          <RecipeBaseDetails />
        </div>
        <div className="recipe-photos-container">
          <RecipePhoto/>
        </div>
        <div className="recipe-ingredients-container">
          <Ingredients />
        </div>
        <div className="recipe-directions-container">
          <Directions />
        </div>
        <div className="recipe-comments-container">
          <Comments />
        </div>
      </div>

    </div>
  )
}
export default ViewEditRecipePage;
