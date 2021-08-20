import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipe, updateIngredient } from '../../store/recipe';

import styles from './EditIngredients.module.css';
import styleUtils from '../RecipeUtils.module.css';

const EditIngredients = ({ setShowEdit, isOwner, recipeIngredients, recipeId }) => {
    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsId, setIngredientsId] = useState([]);
    const [measurements, setMeasurements] = useState([]);

    const ingredientNumber = recipeIngredients.length;
    
    useEffect(() => {
        dispatch(getRecipe(recipeId));
            const addIngredients = [];
            const ingredientsId = [];
            const addMeasurements = [];
            recipeIngredients.forEach(ingredient => {
                addIngredients.push(ingredient.ingredient);
                ingredientsId.push(ingredient.id);
                addMeasurements.push(ingredient.measurement);
            });
            setIngredients(addIngredients);
            setIngredientsId(ingredientsId);
            setMeasurements(addMeasurements);
        }, [dispatch, ingredientNumber]);
         
    const handleEdit = (e) => {
        e.preventDefault();
        // make a dispatch for each ingredient
        ingredients.forEach((ingredient, idx) => {
            const payload = {
                id: ingredientsId[idx],
                measurement: measurements[idx],
                ingredient,
                recipe_id: recipeId,
            }
            dispatch(updateIngredient(payload));
        });
        setShowEdit(false);
    };

    const handleIngredients = (e, idx) => {
        e.preventDefault();
        let ingredientsCopy =[ ...ingredients ];
        ingredientsCopy[idx] = e.target.value;
        setIngredients(ingredientsCopy);
    };

    const handleMeasurements = (e, idx) => {
        e.preventDefault();
        let measurementsCopy =[ ...measurements ];
        measurementsCopy[idx] = e.target.value;
        setMeasurements(measurementsCopy);
    };

    /* Unauthorized User */
    if (!isOwner) return <h2>403 Forbidden</h2>;
        
    return (
        <div className={styleUtils.card_inner_container}>
            <div className={styleUtils.card_header}>
                <h2>Edit Ingredients</h2>
            </div>
            <form 
                className={`${styleUtils.card_form} ${styles.card_form}`}
                onSubmit={handleEdit}
            >
                <div className={styles.measurements_container}>
                    <h3>Measurements</h3>
                    { recipeIngredients.length > 0 &&
                        recipeIngredients.map((ingredient, idx) => (
                            <div key={`measurement-input-${idx}`} className={styles.measurements_item}>
                                <input                                     
                                    type='text'
                                    name={`measurement-${idx + 1}`}
                                    onChange={(e) => handleMeasurements(e, idx)}
                                    value={measurements[idx]}
                                >
                                </input>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.ingredients_container}>
                    <h3>Ingredients</h3>
                    { recipeIngredients.length > 0 &&
                        recipeIngredients.map((ingredient, idx) => (
                            <div key={`ingredient-input-${idx}`} className={styles.ingredients_item}>
                                <input
                                    type='text'
                                    name={`ingredient-${idx + 1}`}
                                    onChange={(e) => handleIngredients(e, idx)}
                                    value={ingredients[idx]}
                                > 
                                </input>
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
    )
};

export default EditIngredients;