import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from '../../store/recipe';

const ShowDirections = ({ setShowEdit }) => {
    const dispatch = useDispatch();
    const recipeId = 1; //! REMOVE LATER: with useParams to get from the url

    const recipe_directions = useSelector(state => state.recipe[1].recipe_directions);
    console.log(recipe_directions);

    useEffect(() => {
        dispatch(getRecipe(recipeId))
    }, [dispatch]);

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