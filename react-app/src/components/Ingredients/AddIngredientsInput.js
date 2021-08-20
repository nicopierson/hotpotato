import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createIngredient } from '../../store/recipe';

const AddIngredientsInput = ({ setShowAdd, recipeIngredients, recipeId }) => {
    const dispatch = useDispatch();
    const [addIngredient, setAddIngredient] = useState('');
    const [addMeasurement, setAddMeasurement] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const payload = {
            ingredient: addIngredient,
            measurement: addMeasurement,
            recipe_id: recipeId,
        };
        dispatch(createIngredient(payload));
        setShowAdd(false);
    };

    return (
        <div>
            <label>
                Ingredient
            </label>
            <input
                type='text'
                name='Measurement'
                onChange={(e) => setAddMeasurement(e.target.value)}
                value={addMeasurement}
                placeholder='e.g. 1/4'
            >
            </input>
            <input
                type='text'
                name='Ingredient'
                onChange={(e) => setAddIngredient(e.target.value)}
                value={addIngredient}
                placeholder='Add a new ingredient...'
            >
            </input>
            <button
                onClick={handleAdd}
            >
                Add
            </button>
            <button
                onClick={() => setShowAdd(false)}
            >
                Cancel
            </button>
        </div>
    );
};

export default AddIngredientsInput;