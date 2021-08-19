import { useState } from 'react';
import AddInput from './AddInput';

const AddDirection = () => {
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <div>
            {showAdd &&
                <AddInput 
                    setShowAdd={setShowAdd} 
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