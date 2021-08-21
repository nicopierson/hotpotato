import { useDispatch } from 'react-redux';
import { deleteDirection } from '../../store/recipe';

import styles from './ShowDirections.module.css';
import styleUtils from '../RecipeUtils.module.css';

const ShowDirections = ({ setShowEdit, isOwner, recipeDirections, recipeId }) => {
    const dispatch = useDispatch();

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteDirection(id, recipeId));
    };

    return (
        <div className={styles.directions_inner_container}>
            <div className={styleUtils.card_header}>
                <h2>Preparation</h2>
                {isOwner &&
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit'
                    >
                    </i>
                }
            </div>
            <div className={styles.directions_container}>
                { recipeDirections &&
                    recipeDirections.map((direction, idx) => (
                        <div key={ direction.id } className={styles.directions_item}>
                            <div className={styles.directions_step}>
                                <h4>Step { idx + 1 }</h4>
                                <div>
                                    { direction.directions }
                                </div> 
                            </div>
                            {isOwner &&
                                <i 
                                    className={`fas fa-minus-circle ${styleUtils.delete_item}`}
                                    onClick={(e) => handleDelete(e, direction.id)}
                                ></i>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ShowDirections;