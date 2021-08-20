import { useState } from 'react';
import AddIngredientsInput from './AddIngredientsInput';

import stylesUtil from '../RecipeUtils.module.css';

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
                <button
                    className={stylesUtil.add_button}
                    onClick={() => setShowAdd(true)}
                >
                    Add New Ingredient
                </button>
            }
        </div>
    )
};

export default AddIngredients;