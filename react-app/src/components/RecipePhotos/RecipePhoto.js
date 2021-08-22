import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Carousel, {consts} from 'react-elastic-carousel';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player'

import '../../../node_modules/video-react/dist/video-react.css'

import * as recipeActions from '../../store/recipe';

import './RecipePhoto.css'

const RecipePhoto = ({loaded}) => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe);
    const user = useSelector(state => state.session.user);
    const [recipeData] = Object.values(recipe);
    const {recipeId }  = useParams()


    /* isOwner Boolean to check if recipe is owned by current user */
    const recipeOwnerId = useSelector(state => state.recipe[recipeId]?.user_id);
    const isOwner = user?.id === recipeOwnerId;

    const [editPhoto, setEditPhoto] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [addVideo, setAddVideo] = useState(false);

    const getPhotos = () => {
        let recipePhotos
        if(recipeData){
            // console.log(recipeData.photos, 'photos______Phots')
            recipePhotos = recipeData.photos
        }
        return recipePhotos
    }

    const getVideos = () => {
        let recipeVideo

        if(recipeData){
            // console.log(recipeData.photos, 'Photos___________')
            let data = recipeData.photos?.map(item => {
                return item.video_url
            })

            recipeVideo = data
        }
        // console.log(recipeVideo, 'videossss')

        return recipeVideo
    }




    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            img_url: imageUrl,
            recipe_id: +recipeId,
            video_url: videoUrl
        }

        dispatch(recipeActions.createRecipePhoto(payload))

        setEditPhoto(false)
    }

    const arrows = ({type, onClick, isEdge}) => {
        const pointer = type === consts.PREV ? <div className='fas fa-chevron-circle-left left-arrow'></div> : <li className='fas fa-chevron-circle-right right-arrow'></li>

        return (
            <button onClick={onClick} disabled={isEdge} className='carousel-button'>{pointer}</button>
        )

    }

    // if(videoUrl){
    //     setAddVideo(true)
    // }


    useEffect(() => {
        dispatch(recipeActions.getRecipe(recipeId))
    },[dispatch])

    useEffect(() => {
        if(videoUrl){
        setAddVideo(true)
    }
    },[videoUrl])

    return (
        <>
            {!editPhoto &&
                < div className='recipe-carousel-with-edit'>

                    {isOwner &&
                        <button
                            onClick={() => setEditPhoto(true)}
                            className='fas fa-edit recipe-carousel-edit'
                        ></button>
                    }
                {/* enableAutoPlay */}
                    <Carousel className='recipe-carousel' enableAutoPlay renderArrow={arrows} 
                    >
                        {getPhotos()?.map(recipe => (
                            <img src={recipe.img_url} alt={recipe} key={recipe.id} className='recipe-carousel-images'/>
                        ))}

                        {

                            // <ReactPlayer url={videoUrl}></ReactPlayer>
                            getVideos()?.map(video => (
                                <ReactPlayer url={video}></ReactPlayer>
                            ))
                        }

                        {addVideo &&
                            <ReactPlayer url={videoUrl}></ReactPlayer>
                        }

                    </Carousel>
                </div>
            }
            {editPhoto &&
                <div className='recipe-carousel-images-edit'>
                    <button
                        onClick={() => setEditPhoto(false)}
                    className='fas fa-window-close recipe-carousel-cancel'
                        ></button>
                    <form onSubmit={onSubmit} className='recipe-carousel-edit-form'>
                        <input
                            placeholder='Enter image url'
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            type='text'
                            name='imageUrl'
                            className='recipe-carousel-edit-form-input'
                        >
                        </input>
                        <input
                            placeholder='Enter video url [optional]'
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            name='videoUrl'
                            className='recipe-carousel-edit-form-input'
                        ></input>
                        <button
                            type='submit'
                        className='recipe-carousel-save-form-button fas fa-check-circle'
                    > Save</button>
                    </form>
                </div>
            }
        </>
    )
}

export default RecipePhoto;
