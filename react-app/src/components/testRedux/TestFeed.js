import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllRecipes } from '../../store/recipe';
import { loadLikes } from '../../store/like';
import Like from '../Like/Like';

const TestFeed = () => {
    const dispatch = useDispatch();
    const recipeId = 1;

    useEffect(() => {
        dispatch(getAllRecipes());
        dispatch(loadLikes(1));
    }, [dispatch]);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>Test Feed</h2>
            <Like 
                recipeId={recipeId}
            />
        </div>
    )
};

export default TestFeed;