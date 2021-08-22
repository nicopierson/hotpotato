import { useState } from 'react';
import AddIngredientsInput from './AddIngredientsInput';

import styleUtils from '../RecipeUtils.module.css';

const AddIngredients = ({ recipeId }) => {
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <>
            {showAdd &&
                <AddIngredientsInput 
                    setShowAdd={setShowAdd}
                    recipeId={recipeId} 
                />
            }
            {!showAdd &&
                <div className={styleUtils.add_button_container}>
                    <button
                        className={`${styleUtils.button_style} ${styleUtils.add_button}`}
                        onClick={() => setShowAdd(true)}
                    >
                        Add Ingredient
                    </button>
                </div>
            }
        </>
    )
};

export default AddIngredients;