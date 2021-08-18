import { useState } from 'react';
import EditDirections from './EditDirections';
import ShowDirections from './ShowDirections';

const Directions = () => {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div>
            {!showEdit && 
                <ShowDirections setShowEdit={setShowEdit} />
            }
            {showEdit && 
                <EditDirections setShowEdit={setShowEdit} />
            }
        </div>
    );
};

export default Directions;