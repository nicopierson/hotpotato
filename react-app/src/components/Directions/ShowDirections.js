import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe, deleteDirection } from '../../store/recipe';

import styles from './ShowDirections.module.css';

const ShowDirections = ({ setShowEdit }) => {
    const dispatch = useDispatch();
    const recipeId = 1; //! REMOVE LATER: with useParams to get from the url

    const recipe_directions = useSelector(state => state.recipe[recipeId]?.recipe_directions);

    useEffect(() => {
        dispatch(getRecipe(recipeId))
    }, [dispatch]);

    const handleDelete = (e, id) => {
        e.preventDefault();
        // console.log(step);
        dispatch(deleteDirection(id, recipeId));
    };

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
                recipe_directions.map((direction, idx) => (
                    <div key={ direction.id } className={styles.directions_item}>
                        <p>
                            <span>{ idx + 1 }.</span> 
                            { direction.directions }
                            <i 
                                className='fas fa-minus-circle'
                                onClick={(e) => handleDelete(e, direction.id)}
                            ></i>
                        </p>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowDirections;