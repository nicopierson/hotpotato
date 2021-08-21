import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipe, updateDirection } from '../../store/recipe';

import styles from './EditDirections.module.css';
import styleUtils from '../RecipeUtils.module.css';

const EditDirections = ({ setShowEdit, isOwner, recipeDirections, recipeId }) => {
    const dispatch = useDispatch();
    const [directions, setDirections] = useState([]);
    const [directionsId, setDirectionsId] = useState([]);

    const ROW_HEIGHT = 4;
    const [textAreaRows, setTextAreaRows] = useState([]);

    const directionNumber = recipeDirections.length;

    
    useEffect(() => {
        dispatch(getRecipe(recipeId));
        // if (recipe_directions && directions.length === 0) {
            const addDirections = [];
            const directionsId = [];
            const textRows = [];
            recipeDirections.forEach(direction => {
                addDirections.push(direction.directions);
                directionsId.push(direction.id);
                textRows.push(ROW_HEIGHT)
            });
            setDirections(addDirections);
            setDirectionsId(directionsId);
            setTextAreaRows(textRows);
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

    const getNumberOfRows = (e) => {
        console.log(e.target.scrollHeight);
        return e.target.innerHTML.split('\n').length;
    };

    const handleDirections = (e, idx) => {
        e.preventDefault();

        // set direction state
        let directionsCopy =[ ...directions ];
        directionsCopy[idx] = e.target.value;
        setDirections(directionsCopy);
    };

    /* Unauthorized User */
    if (!isOwner) return <h2>403 Forbidden</h2>;
        
    return (
        <div>
            <div className={styleUtils.card_inner_container}>
                <div className={styleUtils.card_header}>
                    <h2>Edit Directions</h2>
                </div>
                <form 
                    className={`${styleUtils.card_form} ${styles.card_form}`}
                    onSubmit={handleEdit}
                >
                    <div className={styles.directions_container}>
                        { recipeDirections.length > 0 &&
                            recipeDirections.map((direction, idx) => (
                                <div key={ directions.steps } className={styles.directions_item}>
                                    <label htmlFor={`step-${idx + 1}`}>Step { idx + 1 } </label>
                                    <textarea
                                        type='text'
                                        name={`step-${idx + 1}`}
                                        onChange={(e) => handleDirections(e, idx)}
                                        value={directions[idx]}
                                        rows={textAreaRows[idx]}
                                    > 
                                    </textarea>
                                </div>
                            ))
                        }
                        <div className={styleUtils.edit_items_buttons}>
                            <button
                                className={`${styleUtils.button_style} ${styleUtils.cancel_button}`}
                                onClick={() => setShowEdit(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className={`${styleUtils.button_style} ${styleUtils.save_button}`}
                                type='submit'
                            >
                                <i className='fas fa-check-circle'></i>
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
};

export default EditDirections;