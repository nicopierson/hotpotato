import { useDispatch } from 'react-redux';
import { deleteIngredient } from '../../store/recipe';

import styles from './ShowIngredients.module.css';
import styleUtils from '../RecipeUtils.module.css';

const ShowIngredients = ({ setShowEdit, isOwner, recipeIngredients, recipeId }) => {
    const dispatch = useDispatch();

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteIngredient(id, recipeId));
    };

    return (
        <div className={styles.ingredients_inner_container}>
            <div className={styleUtils.card_header}>
                <h2>Ingredients</h2>
                {isOwner &&
                    <i 
                        onClick={() => setShowEdit(true)}
                        className='fas fa-edit'
                    >
                    </i>
                }
            </div>
            <div className={styles.ingredients_container}>
                { recipeIngredients &&
                    recipeIngredients.map((ingredient, idx) => (
                        <div key={ ingredient.id } className={styleUtils.item_container}>
                            <div className={styles.measurements_container}>
                                {ingredient.measurement &&
                                <>
                                    { ingredient.measurement }
                                    <span> of </span>
                                </>
                                }    
                            </div>   
                            <div className={styles.ingredients_container}>
                                { ingredient.ingredient }
                            </div>
                            {isOwner &&
                                <i 
                                className={`fas fa-minus-circle ${styleUtils.delete_item}`}
                                onClick={(e) => handleDelete(e, ingredient.id)}
                                ></i>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ShowIngredients;