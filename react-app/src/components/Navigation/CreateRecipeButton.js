import React from 'react'
import Recipe from '../Recipe'
// import './CreateRecipeButton.css'
// import { useHistory } from 'react-router'
import RecipeFormModal from '../RecipeBaseForm'

export const CreateRecipeButton = () => {

  return (
      <div className = "create-recipe-base-wrapper">
        {/* <ItemFormModal listId={singleListItems.id}/> */}
        <RecipeFormModal />
      </div>
  )
}
