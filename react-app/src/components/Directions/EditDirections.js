import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipe, updateDirection } from '../../store/recipe';
import AddDirection from './AddDirection';

import styles from './EditDirections.module.css';

const EditDirections = ({ setShowEdit, isOwner, recipeDirections, recipeId }) => {
    const dispatch = useDispatch();
    const [directions, setDirections] = useState([]);
    const [directionsId, setDirectionsId] = useState([]);
    //! REMOVE recipeId from params LATER: with useParams to get from the url

    const directionNumber = recipeDirections.length;
    
    useEffect(() => {
        dispatch(getRecipe(recipeId));
        // if (recipe_directions && directions.length === 0) {
            const addDirections = [];
            const directionsId = [];
            recipeDirections.forEach(direction => {
                addDirections.push(direction.directions);
                directionsId.push(direction.id);
            });
            setDirections(addDirections);
            setDirectionsId(directionsId);
        }, [dispatch, directionNumber]);
         
    const handleEdit = (e) => {
        e.preventDefault();
        // make a dispatch for each direction
        directions.forEach((direction, idx) => {
            const payload = {
                id: directionsId[idx],
                steps: idx + 1,
                directions: direction,
                recipe_id: recipeId,
            }
            dispatch(updateDirection(payload));
        });
        setShowEdit(false);
    };

    const handleDirections = (e, idx) => {
        e.preventDefault();
        let directionsCopy =[ ...directions ];
        directionsCopy[idx] = e.target.value;
        setDirections(directionsCopy);
    };

    /* Unauthorized User */
    if (!isOwner) return <h2>403 Forbidden</h2>;
        
    return (
        <div>
            <div className={styles.directions_inner_container}>
                <div>
                    <h2>Edit Directions</h2>
                </div>
                <form onSubmit={handleEdit}>
                    { recipeDirections.length > 0 &&
                        recipeDirections.map((direction, idx) => (
                            <div key={ directions.steps } className={styles.directions_item}>
                                <label>{ idx + 1 }. </label>
                                <input
                                    type='text'
                                    name={`step-${idx + 1}`}
                                    onChange={(e) => handleDirections(e, idx)}
                                    value={directions[idx]}
                                > 
                                </input>
                            </div>
                        ))
                    }
                    <button type='submit'>Save Changes</button>
                </form>
            </div>
            <div>
                <button
                    onClick={() => setShowEdit(false)}
                >
                    Cancel
                </button>
            </div>
            {isOwner &&
                <AddDirection />
            }
        </div>
    )
};

export default EditDirections;