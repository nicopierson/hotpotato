import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import * as recipeActions from '../../store/recipe';

import './RecipePhoto.css'

const RecipePhoto = ({loaded}) => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe);
    const user = useSelector(state => state.session.user);
    const [recipeData] = Object.values(recipe);
    console.log(recipeData, 'recipeData_____DATA')

    const getPhotos = () => {
        let recipePhotos
        if(recipeData){
            console.log(recipeData.photos, 'photos______Phots')
            recipePhotos = recipeData.photos
        }
        return recipePhotos
    }

   

    useEffect(() => {
        dispatch(recipeActions.getRecipe(2))
    },[dispatch])
   
    return (
        <div className='recipe-carousel'>            
            {user && 
                <Carousel className='recipe-carousel-images'>
                    {getPhotos()?.map(recipe => (
                        <img src={recipe.img_url} alt={recipe} key={recipe.id} />
                    ))}
                </Carousel>
            }
        </div>
    )
}

export default RecipePhoto;