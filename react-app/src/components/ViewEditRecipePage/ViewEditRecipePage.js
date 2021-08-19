import React, {useEffect, useState} from 'react'
import './ViewEditRecipePage.css'
import RecipeBaseDetails from '../Recipe/RecipeBaseDetails';
import { useParams } from 'react-router';
import { getRecipe } from '../../store/recipe';
import { useDispatch, useSelector } from 'react-redux';


const ViewEditRecipePage = () => {

  //the /:id from url, use the 'useParams' from react-router to get the correct id

  let {recipeId} = useParams();
  const dispatch = useDispatch()

  const sessionUser = useSelector((state) => state.session.user);
  const recipeDetails= useSelector((state) => state.recipe.single_recipe);
  console.log(sessionUser.id)
  console.log(recipeDetails)

  // get the state to be passed to child
  const [name, setName] = useState('');
  const [thumbnail_url, setThumbnail_url] = useState('');
  const [likes, setLikes] = useState(null);


  if (recipeDetails) {
    console.log('recipe details comments', recipeDetails.comments);
    // for (const [key,value] of Object.entries(recipeBaseDetails)){
    //   console.log(key, value)
    // }

    // setName(recipeBaseDetails['name'])
    // setThumbnail_url(recipeBaseDetails['thumbnail_url'])
    // setLikes(recipeBaseDetails.likes)
    // setRecipeId(recipeBaseDetails.id)
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
