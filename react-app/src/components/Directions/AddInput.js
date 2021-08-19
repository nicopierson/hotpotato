import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createDirection } from '../../store/recipe';

const AddInput = ({ setShowAdd, recipeDirections, recipeId }) => {
    const dispatch = useDispatch();
    const [addDirection, setAddDirection] = useState('');
    //! REMOVE recipeId from params LATER: with useParams to get from the url

    const steps = recipeDirections;
    const numberSteps = steps[steps.length - 1].steps + 1;

    const handleAdd = (e) => {
        e.preventDefault();
        const payload = {
            steps: numberSteps,
            directions: addDirection,
            recipe_id: recipeId,
        };
        dispatch(createDirection(payload));
        setShowAdd(false);
    };

    return (
        <div>
            <label>
                Direction
            </label>
            <input
                type='text'
                name='Direction'
                onChange={(e) => setAddDirection(e.target.value)}
                value={addDirection}
                placeholder='Add a new direction...'
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

export default AddInput;