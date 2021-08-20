import { useDispatch } from 'react-redux';
import { deleteIngredient } from '../../store/recipe';

import styles from './ShowIngredients.module.css';

const ShowIngredients = ({ setShowEdit, isOwner, recipeIngredients, recipeId }) => {
    const dispatch = useDispatch();

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteIngredient(id, recipeId));
    };

    return (
        <div className={styles.ingredients_inner_container}>
            <div>
                <h2>Show Ingredients</h2>
                {isOwner &&
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit'
                    >
                    </i>
                }
            </div>
            { recipeIngredients &&
                recipeIngredients.map((ingredient, idx) => (
                    <div key={ ingredient.id } className={styles.ingredients_item}>
                        <p>
                            <span>{ idx + 1 }.</span> 
                            { ingredient.ingredients }
                            {isOwner &&
                                <i 
                                    className='fas fa-minus-circle'
                                    onClick={(e) => handleDelete(e, ingredient.id)}
                                ></i>
                            }
                        </p>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowIngredients;