import { useState } from 'react';
import AddInput from './AddInput';

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
                <button
                    onClick={() => setShowAdd(true)}
                >
                    Add New Direction
                </button>
            }
        </div>
    )
};

export default AddDirection;