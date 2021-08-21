import styles from './ShowDirections.module.css';
import styleUtils from '../RecipeUtils.module.css';

const ShowDirections = ({ setShowEdit, isOwner, recipeDirections, recipeId }) => {

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
                                <h3>Step { idx + 1 }</h3>
                                <div>
                                    { direction.directions }
                                </div> 
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default ShowDirections;