import { useState } from 'react';
import AddIngredientsInput from './AddIngredientsInput';

import styleUtils from '../RecipeUtils.module.css';

const AddIngredients = ({ recipeIngredients, recipeId }) => {
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <div>
            {showAdd &&
                <AddIngredientsInput 
                    setShowAdd={setShowAdd}
                    recipeIngredients={recipeIngredients}
                    recipeId={recipeId} 
                />
            }
            {!showAdd &&
                <div className={styleUtils.add_button_container}>
                    <button
                        className={`${styleUtils.button_style} ${styleUtils.add_button}`}
                        onClick={() => setShowAdd(true)}
                    >
                        Add New Ingredient
                    </button>
                </div>
            }
        </div>
    )
};

export default AddIngredients;