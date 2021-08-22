import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipe, updateDirection, deleteDirection } from '../../store/recipe';

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
        if (directionNumber > 0) {
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
        } else {
            setShowEdit(false);
        }
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

        // set direction state
        let directionsCopy =[ ...directions ];
        directionsCopy[idx] = e.target.value;
        setDirections(directionsCopy);
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteDirection(id, recipeId));
    };

    /* Unauthorized User */
    if (!isOwner) return <h2>403 Forbidden</h2>;
        
    return (
        <div>
            <div className={styleUtils.card_inner_container}>
                <div className={styleUtils.card_header}>
                    <h2>Edit Preparations</h2>
                </div>
                <div 
                    className={`${styleUtils.card_form} ${styles.card_form}`}
                >
                    <div className={styles.directions_container}>
                        { recipeDirections.length > 0 &&
                            recipeDirections.map((direction, idx) => (
                                <div key={ direction.id } className={styles.directions_item}>
                                    <div>
                                        <label htmlFor={`step-${idx + 1}`}>Step { idx + 1 }</label>
                                        {isOwner &&
                                            <i 
                                                className={`fas fa-minus-circle ${styleUtils.delete_item}`}
                                                onClick={(e) => handleDelete(e, direction.id)}
                                            ></i>
                                        }
                                    </div>
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
                                type='button'
                                onClick={handleEdit}
                            >
                                <i className='fas fa-check-circle'></i>
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
};

export default EditDirections;