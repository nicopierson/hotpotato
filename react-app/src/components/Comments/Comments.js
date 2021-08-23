import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import ShowComments from './ShowComments';

const Comments = () => {
    const { recipeId } = useParams();

    const comments = useSelector(state => state.recipe[recipeId]?.comments)


    const [showEdit, setShowEdit] = useState(false);

    return (
        <>
            {!showEdit &&
                <ShowComments
                    recipeId={recipeId}
                    comments={comments}
                />
            }
        </>
    );
};

export default Comments;
