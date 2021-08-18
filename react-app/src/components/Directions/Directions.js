import { useState } from 'react';
import EditDirections from './EditDirections';
import ShowDirections from './ShowDirections';

import styles from './Directions.module.css';

const Directions = () => {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div className={styles.directions_container}>
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