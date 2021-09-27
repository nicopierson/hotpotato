import styles from './ShowIngredients.module.css';
import styleUtils from '../RecipeUtils.module.css';

const ShowIngredients = ({ setShowEdit, isOwner, recipeIngredients }) => {

    return (
        <div className={styles.ingredients_inner_container}>
            <div className={styleUtils.card_header}>
                <h2>Ingredients</h2>
                {isOwner && recipeIngredients?.length > 0 &&
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
                                    ingredient.measurement
                                }
                            </div>
                            <div className={styles.ingredients_elements}>
                                { ingredient.ingredient }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ShowIngredients;
