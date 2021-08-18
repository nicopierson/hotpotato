import { useState } from 'react';

const EditDirections = ({ setShowEdit }) => {
        const recipeId = 1; //! REMOVE LATER: link with useParams to get from the url
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