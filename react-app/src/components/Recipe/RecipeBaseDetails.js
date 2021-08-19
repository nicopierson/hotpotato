import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
// import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

const RecipeBaseDetails = () => {
  let {id} = useParams();
  // const dispatch = useDispatch()
  // const sessionUser = useSelector((state) => state.session.user);
  // const recipeDetails= useSelector((state) => state.recipe);

  const [name, setName] = useState('');
  const [thumbnail_url, setThumbnail_url] = useState('');
  const [likes, setLikes] = useState(null);
  const [recipeId, setRecipeId] = useState(null);

  // if (recipeDetails !== undefined) {
  //   const recipeBaseDetails = recipeDetails['`${id}`']
  //   console.log('recipe details', recipeBaseDetails);
  //   // for (const [key,value] of Object.entries(recipeBaseDetails)){
  //   //   console.log(key, value)
  //   // }

  //   setName(recipeBaseDetails['name'])
  //   setThumbnail_url(recipeBaseDetails['thumbnail_url'])
  //   setLikes(recipeBaseDetails.likes)
  //   setRecipeId(recipeBaseDetails.id)
  // }
  // if(recipeDetails !== undefined && recipeDetails !== null ) console.log('yes', recipeDetails['1'])


  // useEffect(()=>{
  //   dispatch(getRecipe(id))
  // }, [dispatch, id])



  return (
    <div>
      <div>
        name: {name}
      </div>
      <div>
        thumbnail: {thumbnail_url}
      </div>
      <div>
        likes: {likes}
      </div>
      <div>
        recipeId: {recipeId}
      </div>
    </div>
  )
}

export default RecipeBaseDetails
