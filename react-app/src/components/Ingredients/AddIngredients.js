import { useState } from 'react';
import AddIngredientsInput from './AddIngredientsInput';

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
                    onClick={() => setShowAdd(true)}
                >
                    Add New Ingredient
                </button>
            }
        </div>
    )
};

export default AddIngredients;