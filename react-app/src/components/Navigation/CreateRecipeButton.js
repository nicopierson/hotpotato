import React from 'react'
// import './CreateRecipeButton.css'
// import { useHistory } from 'react-router'

export const CreateRecipeButton = () => {

  return (
      <div className = "create-recipe-base-wrapper">
        {/* <ItemFormModal listId={singleListItems.id}/> */}
        <button className="add-recipe-base-button">Add Recipe <i className="editicon fas fa-edit"></i></button>
      </div>
  )
}
