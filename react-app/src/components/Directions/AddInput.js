import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createDirection } from '../../store/recipe';

const AddInput = ({ setShowAdd }) => {
    const dispatch = useDispatch();
    const [addDirection, setAddDirection] = useState('');
    const recipeId = 1; //! REMOVE LATER: with useParams to get from the url

    const steps = useSelector(state => state.recipe[recipeId]?.recipe_directions);
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