import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getRecipe } from "../store/recipe";

const Recipe = () => {

    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe)

    useEffect(() => {
        dispatch(getRecipe(1)) // get recipe with all ingredients and directions, etc.
        dispatch(getAllRecipes()); // get all recipes only in recipe table
    }, [dispatch]);

    return (
        <>
            <h2>Test Recipe Redux!!!!!!</h2>
        </>
    )
};

export default Recipe;