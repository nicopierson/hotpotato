import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditIngredients from './EditIngredients';
import ShowIngredients from './ShowIngredients';
import AddIngredients from './AddIngredients';

import styleUtils from '../RecipeUtils.module.css';

const Ingredients = () => {
    const { recipeId } = useParams();

    /* isOwner Boolean to check if recipe is owned by current user */
    const userId = useSelector(state => state.session.user?.id);
    const recipeOwnerId = useSelector(state => state.recipe[recipeId]?.user_id);
    const isOwner = userId === recipeOwnerId; 

    const [showEdit, setShowEdit] = useState(false);

    const recipeIngredients = useSelector(state => state.recipe[recipeId]?.recipe_ingredients);

    return (
        <div className={styleUtils.card_container}>
            {!showEdit && 
                <ShowIngredients 
                    setShowEdit={setShowEdit} 
                    isOwner={isOwner}
                    recipeIngredients={recipeIngredients}
                    recipeId={+recipeId}
                />
            }
            {showEdit && isOwner &&
                <EditIngredients 
                    setShowEdit={setShowEdit} 
                    isOwner={isOwner}
                    recipeIngredients={recipeIngredients}
                    recipeId={+recipeId}
                />
            }
            {isOwner &&
                <AddIngredients
                    recipeId={+recipeId}
                />
            }
        </div>
    );
};

export default Ingredients;