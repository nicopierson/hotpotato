import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe, deleteDirection } from '../../store/recipe';

import AddDirection from './AddDirection';

import styles from './ShowDirections.module.css';

const ShowDirections = ({ setShowEdit, isOwner, recipeDirections, recipeId }) => {
    const dispatch = useDispatch();
    //! REMOVE recipeId from params LATER: with useParams to get from the url

    useEffect(() => {
        dispatch(getRecipe(recipeId))
    }, [dispatch]);

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteDirection(id, recipeId));
    };

    return (
        <div className={styles.directions_inner_container}>
            <div>
                <h2>Show Directions</h2>
                {isOwner &&
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit'
                    >
                    </i>
                }
            </div>
            { recipeDirections &&
                recipeDirections.map((direction, idx) => (
                    <div key={ direction.id } className={styles.directions_item}>
                        <p>
                            <span>{ idx + 1 }.</span> 
                            { direction.directions }
                            {isOwner &&
                                <i 
                                    className='fas fa-minus-circle'
                                    onClick={(e) => handleDelete(e, direction.id)}
                                ></i>
                            }
                        </p>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowDirections;