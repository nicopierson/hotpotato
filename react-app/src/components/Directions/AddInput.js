import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createDirection } from '../../store/recipe';

import styleUtils from '../RecipeUtils.module.css';
import styles from './AddInput.module.css';

const AddInput = ({ setShowAdd, recipeDirections, recipeId }) => {
    const dispatch = useDispatch();
    const [addDirection, setAddDirection] = useState('');

    const steps = recipeDirections;
    const numberSteps = steps.length > 0 ? steps[steps.length - 1].steps + 1 : 1;

    const ROW_HEIGHT = 4;

    const handleAdd = (e) => {
        e.preventDefault();
        const payload = {
            steps: numberSteps ? numberSteps : ROW_HEIGHT,
            directions: addDirection,
            recipe_id: recipeId,
        };
        dispatch(createDirection(payload));
        setShowAdd(false);
    };

    return (
        <div className={styles.direction_add_container}>
            <div className={styles.direction_textarea}>
                <textarea
                    type='text'
                    name='Direction'
                    onChange={(e) => setAddDirection(e.target.value)}
                    value={addDirection}
                    placeholder='Add a step...'
                    rows={ROW_HEIGHT}
                    autoFocus={true}
                >
                </textarea>
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
                    disabled={!addDirection}
                >
                    <i className='fas fa-check-circle'></i>
                    <span>Add Step</span>
                </button>
            </div>
        </div>
    );
};

export default AddInput;
