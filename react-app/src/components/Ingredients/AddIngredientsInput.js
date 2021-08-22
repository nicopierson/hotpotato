import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createIngredient } from '../../store/recipe';

import styles from './AddIngredientsInput.module.css';
import styleUtils from '../RecipeUtils.module.css';

const AddIngredientsInput = ({ setShowAdd, recipeId }) => {
    const dispatch = useDispatch();
    const [addIngredient, setAddIngredient] = useState('');
    const [addMeasurement, setAddMeasurement] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const payload = {
            ingredient: addIngredient,
            measurement: addMeasurement,
            recipe_id: +recipeId,
        };
        dispatch(createIngredient(payload));
        setShowAdd(false);
    };

    return (
        <div className={styles.add_container}>
            <div className={styleUtils.card_form}>
                <div className={styles.measurements_container}>
                    <input
                        type='text'
                        name='Measurement'
                        onChange={(e) => setAddMeasurement(e.target.value)}
                        value={addMeasurement}
                        placeholder='e.g. 1/4'
                    >
                    </input>
                </div>
                <div className={styles.ingredients_container}>
                    <input
                        type='text'
                        name='Ingredient'
                        onChange={(e) => setAddIngredient(e.target.value)}
                        value={addIngredient}
                        placeholder='Add a ingredient...'
                        autoFocus={true}
                    >
                    </input>
                </div>
            </div>
             <div className={styleUtils.edit_items_buttons}>
                <button
                    className={`${styleUtils.button_style} ${styleUtils.cancel_button}`}
                    onClick={() => setShowAdd(false)}
                >
                    Cancel
                </button>
                <button
                    className={`${styleUtils.button_style} ${styleUtils.save_button}`}
                    onClick={handleAdd}
                    disabled={!addIngredient}
                >
                    <i className='fas fa-check-circle'></i>
                    <span>Add</span>
                </button>
            </div>
        </div>
    );
};

export default AddIngredientsInput;