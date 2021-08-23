import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './RecipeBaseDetails.css'
import ShowRecipeBase from './ShowRecipeBase';

const RecipeBaseDetails = () => {
  let {recipeId} = useParams();
  const userId = useSelector(state => state.session.user?.id);
  const recipeDetails= useSelector((state) => state.recipe[recipeId]);

  const recipeOwnerId = recipeDetails?.user_id;
  const isOwner = userId === recipeOwnerId;
  const baseLikes = recipeDetails?.likes;
  const baseName = recipeDetails?.name;
  const baseThumbnail = recipeDetails?.thumbnail_url;
  // const baseDescription //add later

  const [showEdit, setShowEdit] = useState(false);
  


  return (
    <>
      {!showEdit && recipeDetails &&
          <ShowRecipeBase
              setShowEdit={setShowEdit}
              isOwner={isOwner}
              thumbnail_url={baseThumbnail}
              likes={baseLikes}
              name={baseName}
              recipeId={recipeId}
          />
      }
    </>
  )
}



// {recipeDetails &&
//   <div style={{backgroundImage: `url(${recipeDetails.thumbnail_url})`, height:'100%', 'background-repeat':'no-repeat', 'background-size':'cover' }}>
//     <div className="recipe-base__name">
//       {recipeDetails.name}
//     </div>
//     <div>
//       {/* thumbnail: {recipeDetails.thumbnail_url} */}
//     </div>
//     <div className="recipe-base__likes">
//       likes: {recipeDetails.likes}
//     </div>
//     <div className="recipe-base__id">
//       recipeId: {recipeId}
//     </div>
//   </div>}
export default RecipeBaseDetails
