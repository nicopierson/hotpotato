import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
// import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

const RecipeBaseDetails = () => {
  let {recipeId} = useParams();
  // const dispatch = useDispatch()
  // const sessionUser = useSelector((state) => state.session.user);
  const recipeDetails= useSelector((state) => state.recipe[recipeId]);

  // const [name, setName] = useState('');
  // const [thumbnail_url, setThumbnail_url] = useState('');
  // const [likes, setLikes] = useState(null);
  // const [recipeId, setRecipeId] = useState(null);

  if (recipeDetails) {
    // console.log('recipe details comments', recipeDetails.name);
    for (const [key,value] of Object.entries(recipeDetails)){
      console.log(key, value)
    }
  }


  // useEffect(()=>{
  //   dispatch(getRecipe(id))
  // }, [dispatch, id])



  return (
    <div>
      {recipeDetails &&
      <>
        <div>
          name: {recipeDetails.name}
        </div>
        <div>
          thumbnail: {recipeDetails.thumbnail_url}
        </div>
        <div>
          likes: {recipeDetails.likes}
        </div>
        <div>
          recipeId: {recipeId}
        </div>
      </>}
    </div>
  )
}

export default RecipeBaseDetails
