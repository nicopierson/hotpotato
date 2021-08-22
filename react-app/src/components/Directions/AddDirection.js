import { useState } from 'react';
import AddInput from './AddInput';

import styleUtils from '../RecipeUtils.module.css';

const AddDirection = ({ recipeDirections, recipeId }) => {
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <div>
            {showAdd &&
                <AddInput 
                    setShowAdd={setShowAdd}
                    recipeDirections={recipeDirections}
                    recipeId={recipeId} 
                />
            }
            {!showAdd &&
                <div className={styleUtils.add_button_container}>
                    <button
                        onClick={() => setShowAdd(true)}
                        className={`${styleUtils.button_style} ${styleUtils.add_button}`}
                    >
                        Add Step
                    </button>
                </div>
            }
        </div>
    )
};

export default AddDirection;