import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useParams } from 'react-router';

import * as recipeActions from '../../store/recipe';

import './RecipePhoto.css'

const RecipePhoto = ({loaded}) => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe);
    const user = useSelector(state => state.session.user);
    const [recipeData] = Object.values(recipe);
    const {recipeId }  = useParams()
    // console.log(recipeData, 'recipeData_____DATA')

    const [editPhoto, setEditPhoto] = useState(false);

    const getPhotos = () => {
        let recipePhotos
        if(recipeData){
            // console.log(recipeData.photos, 'photos______Phots')
            recipePhotos = recipeData.photos
        }
        return recipePhotos
    }

   

    useEffect(() => {
        dispatch(recipeActions.getRecipe(recipeId))
    },[dispatch])
   
    return (
        <>            
            {user && 
                <Carousel className='recipe-carousel-images'>
                    {getPhotos()?.map(recipe => (
                        <img src={recipe.img_url} alt={recipe} key={recipe.id} />
                    ))}
                </Carousel>
            }
        </>
    )
}

export default RecipePhoto;