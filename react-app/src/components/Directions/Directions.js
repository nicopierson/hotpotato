import { useState } from 'react';
import { useSelector } from 'react-redux';

import EditDirections from './EditDirections';
import ShowDirections from './ShowDirections';
import AddDirection from './AddDirection';

import styles from './Directions.module.css';

const Directions = () => {
    /* isOwner Boolean to check if recipe is owned by current user */
    const recipeId = 4;
    const userId = useSelector(state => state.session.user.id);
    const recipeOwnerId = useSelector(state => state.recipe[recipeId]?.user_id);
    const isOwner = userId === recipeOwnerId; 

    const [showEdit, setShowEdit] = useState(false);

    const recipeDirections = useSelector(state => state.recipe[recipeId]?.recipe_directions);

    return (
        <div className={styles.directions_container}>
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