import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditDirections from './EditDirections';
import ShowDirections from './ShowDirections';
import AddDirection from './AddDirection';

import styleUtils from '../RecipeUtils.module.css';

const Directions = () => {
    const { recipeId } = useParams();

    /* isOwner Boolean to check if recipe is owned by current user */
    const userId = useSelector(state => state.session.user?.id);
    const recipeOwnerId = useSelector(state => state.recipe[recipeId]?.user_id);
    const isOwner = userId === recipeOwnerId; 

    const [showEdit, setShowEdit] = useState(false);

    const recipeDirections = useSelector(state => state.recipe[recipeId]?.recipe_directions);

    return (
        <div className={styleUtils.card_container}>
            {!showEdit && 
                <ShowDirections 
                    setShowEdit={setShowEdit} 
                    isOwner={isOwner}
                    recipeDirections={recipeDirections}
                    recipeId={recipeId}
                />
            }
            {showEdit && isOwner &&
                <EditDirections 
                    setShowEdit={setShowEdit} 
                    isOwner={isOwner}
                    recipeDirections={recipeDirections}
                    recipeId={recipeId}
                />
            }
            {isOwner &&
                <AddDirection 
                    recipeDirections={recipeDirections}
                    recipeId={recipeId}
                />
            }
        </div>
    );
};

export default Directions;