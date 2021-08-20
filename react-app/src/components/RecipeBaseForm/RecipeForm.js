import React , { useState, useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateRecipeForm.css';
import { createRecipe } from '../../store/recipe';
import { useHistory } from 'react-router';

export const RecipeForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);


  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // const [userId, setUserId] = useState(1);
  const [errors, setErrors] = useState([]);

  let userId;
  if(user) userId = user.id;
  console.log("this is the user id from recipeForm!!", user.id)


  const setTitleE = (e) => setTitle(e.target.value);
  const setImageUrlE = (e) => setImageUrl(e.target.value);

  const onFormSubmitCreateRecipeBase = (e)=>{
    e.preventDefault();
    // if(!user) history.push('/')
    // else{
      const payload = {
        name: title,
        thumbnail_url: imageUrl,
        user_id: userId
      }
      setErrors([]);
      dispatch(createRecipe(payload)).then( (data)=>{
        // setTimeout(()=>console.log("loading"), 3000)
        if(data){
          history.push(`/view/recipe/${data.id}`);
          window.location.reload();
        }

      }).catch(async (res) =>{
        const data = res
        if(data && data.errors) setErrors(data.errors);
      })
    // }
  }


  return (
    <div>
      Hello from recipe form
      <form onSubmit={onFormSubmitCreateRecipeBase}>

        <div className=""> Start Your Creation</div>
          <ul className="error-group">
              {errors.map((error, idx) => <li key={idx}>*{error}</li>)}
          </ul>

          {/* FORM INPUTS */}
          <div className="">
            <label className="">
              Title:
            </label>
            <input className=""
                placeholder="title your awesome creation here"
                required
                value={title}
                onChange={setTitleE}
                type="text" />
          </div>

          <div className="input-wrapper">
            <label className="form-label-spacing">
              iage url (optional)
            </label>

            <input className="input-box-style"
                placeholder="www.mybestrecipeimage.com"
                required
                value={imageUrl}
                onChange={setImageUrlE}
                type="text" />
            <div className="cover-photo-preview">
              <img src={imageUrl} alt="Can't Find" />
            </div>
          </div>

          <div className="input-wrapper">
            <button className="submit-list-button" type="submit">Start Creation</button>
          </div>


      </form>
    </div>
  )
}
