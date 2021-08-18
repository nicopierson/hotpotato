import { useState } from 'react';

const EditDirections = ({ setShowEdit }) => {
    return (
        <div>
            <h2>Edit Directions</h2>
            <div>
                <button
                    onClick={() => setShowEdit(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
};

export default EditDirections;