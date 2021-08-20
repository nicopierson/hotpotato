import React, {useEffect} from 'react'
import './FeedPage.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesForGivenUser } from '../../store/recipe';
import  RecipeCardComponent  from '../RecipeCardComponent/';


export const FeedPage = () => {
  const dispatch = useDispatch()
  // const {userId} = useParams();

  const user_id = useSelector(state => state.session.user?.id);

  const recipeDetails= useSelector((state) => state.recipe?.users_recipes);

  useEffect(() => {
    dispatch(getAllRecipesForGivenUser(user_id))
  }, [dispatch])


  return (
    <div className="feed-page-wrapper">
      {/* banner (optional) */}
      {/* header and filter bar */}
      <div>
        This is the title
      </div>


      {/* render users recipes based on who they follow */}
      <div className="fpw-feed-container">
          {recipeDetails &&
            <div className="fpw-feed-container__recipe-cards" >
              {recipeDetails.map(recipe=>(<RecipeCardComponent key={recipe.id} id={recipe.id} name={recipe.name} thumbnail_url={recipe.thumbnail_url} user_id={recipe.user_id} likes={recipe.likes} username={recipe.username}/>))}
            </div>}
      </div>


    </div>
  )
}
