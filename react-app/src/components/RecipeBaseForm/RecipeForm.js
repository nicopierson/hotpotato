import React , { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateRecipeForm.css';
import { createRecipe } from '../../store/recipe';
import { useHistory } from 'react-router';

export const RecipeForm = () => {
  return (
    <div>
      Hello from recipe form
    </div>
  )
}
