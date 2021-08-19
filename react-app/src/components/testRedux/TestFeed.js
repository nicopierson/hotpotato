import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllRecipes } from '../../store/recipe';
import { loadLikes } from '../../store/like';

const TestFeed = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecipes());
        dispatch(loadLikes(2));
    }, [dispatch]);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>Test Feed</h2>
        </div>
    )
};

export default TestFeed;