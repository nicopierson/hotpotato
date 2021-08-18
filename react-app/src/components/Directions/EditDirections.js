import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecipe } from '../../store/recipe';

import styles from './EditDirections.module.css';

const EditDirections = ({ setShowEdit }) => {
    const dispatch = useDispatch();
    const recipeId = 1; //! REMOVE LATER: with useParams to get from the url

    const recipe_directions = useSelector(state => state.recipe[recipeId]?.recipe_directions);

    useEffect(() => {
        dispatch(getRecipe(recipeId))
    }, [dispatch]);
        
    return (
        <div>
            <div className={styles.directions_inner_container}>
                <div>
                    <h2>Edit Directions</h2>
                </div>
                { recipe_directions &&
                    recipe_directions.map(direction => (
                        <div key={ direction.id } className={styles.directions_item}>
                            <p><span>{ direction.steps }.</span> { direction.directions }</p>
                        </div>
                    ))
                }
            </div>
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