import { useState } from 'react';

const ShowDirections = ({ setShowEdit }) => {
    return (
        <div>
            <h2>Show Directions</h2>
            <div>
                <button
                    onClick={() => setShowEdit(true)}
                >
                    Edit
                </button>
            </div>
        </div>
    )
};

export default ShowDirections;