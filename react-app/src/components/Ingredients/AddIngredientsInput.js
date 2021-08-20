import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createIngredient } from '../../store/recipe';

const AddIngredientsInput = ({ setShowAdd, recipeIngredients, recipeId }) => {
    const dispatch = useDispatch();
    const [addIngredient, setAddIngredient] = useState('');

    const steps = recipeIngredients;
    const numberSteps = steps[steps.length - 1].steps + 1;

    const handleAdd = (e) => {
        e.preventDefault();
        const payload = {
            steps: numberSteps,
            ingredients: addIngredient,
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