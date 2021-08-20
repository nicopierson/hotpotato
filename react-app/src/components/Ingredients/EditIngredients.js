import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipe, updateIngredient } from '../../store/recipe';

import styles from './EditIngredients.module.css';

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
        <div>
            <div className={styles.ingredients_inner_container}>
                <div>
                    <h2>Edit Ingredients</h2>
                </div>
                <form onSubmit={handleEdit}>
                    { recipeIngredients.length > 0 &&
                        recipeIngredients.map((ingredient, idx) => (
                            <div key={`ingredient-input-${idx}`} className={styles.ingredients_item}>
                                <label>{ idx + 1 }. </label>
                                <input                                     
                                    type='text'
                                    name={`measurement-${idx + 1}`}
                                    onChange={(e) => handleMeasurements(e, idx)}
                                    value={measurements[idx]}
                                >
                                </input>
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

export default EditIngredients;