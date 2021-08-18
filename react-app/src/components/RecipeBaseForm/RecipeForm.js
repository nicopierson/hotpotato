import React , { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateRecipeForm.css';
import { createRecipe } from '../../store/recipe';
import { useHistory } from 'react-router';

export const RecipeForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  // const onFormSubmitCreateRecipeBase = (e)=>{
  //   e.preventDefault();
  //   if(!sessionUser) history.push('/')
  //   else{
  //     const payload = {

  //       // payload from state
  //     }
  //     setErrors([]);
  //     return dispatch(createItemThunk(payload,listId)).then((data)=>{
  //       // console.log("item creation returned data: ", data);
  //       history.push(`/view-list/${listId}`);
  //       window.location.reload();
  //     }).catch(async (res) =>{
  //       const data = await res.json();
  //       if(data && data.errors) setErrors(data.errors);
  //     })
  //   }
  // }


  return (
    <div>
      Hello from recipe form
    </div>
  )
}
