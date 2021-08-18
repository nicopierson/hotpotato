import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipe, updateDirection } from '../../store/recipe';

import styles from './EditDirections.module.css';

const EditDirections = ({ setShowEdit }) => {
    const dispatch = useDispatch();
    const [directions, setDirections] = useState([]);
    const [directionsId, setDirectionsId] = useState([]);
    const recipeId = 1; //! REMOVE LATER: with useParams to get from the url

    const recipe_directions = useSelector(state => state.recipe[recipeId]?.recipe_directions);

    useEffect(() => {
        dispatch(getRecipe(recipeId));
        if (recipe_directions && directions.length === 0) {
            const addDirections = [];
            const directionsId = [];
            recipe_directions.forEach(direction => {
                addDirections.push(direction.directions);
                directionsId.push(direction.id);
            });
            setDirections(addDirections);
            setDirectionsId(directionsId);
        }
    }, [dispatch]);

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
        
    return (
        <div>
            <div className={styles.directions_inner_container}>
                <div>
                    <h2>Edit Directions</h2>
                </div>
                <form onSubmit={handleEdit}>
                    { directions.length > 0 &&
                        directions.map((direction, step) => (
                            <div key={ step + 1 } className={styles.directions_item}>
                                <label>{ step + 1 }. </label>
                                <input
                                    type='text'
                                    name={`step-${step + 1}`}
                                    onChange={(e) => handleDirections(e, step)}
                                    value={direction}
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
        </div>
    )
};

export default EditDirections;