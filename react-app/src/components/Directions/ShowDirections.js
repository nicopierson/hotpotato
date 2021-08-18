import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from '../../store/recipe';

import styles from './ShowDirections.module.css';

const ShowDirections = ({ setShowEdit }) => {
    const dispatch = useDispatch();
    const recipeId = 4; //! REMOVE LATER: with useParams to get from the url

    const recipe_directions = useSelector(state => state.recipe[recipeId]?.recipe_directions);

    useEffect(() => {
        dispatch(getRecipe(recipeId))
    }, [dispatch]);

    return (
        <div className={styles.directions_inner_container}>
            <div>
                <h2>Show Directions</h2>
                <i 
                    onClick={() => setShowEdit(true)}
                    className='fas fa-edit'
                >
                </i>
            </div>
            { recipe_directions &&
                recipe_directions.map(direction => (
                    <div key={ direction.id } className={styles.directions_item}>
                        <p><span>{ direction.steps }.</span> { direction.directions }</p>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowDirections;