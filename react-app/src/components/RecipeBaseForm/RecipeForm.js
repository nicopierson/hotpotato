import React , { useState, useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateRecipeForm.css';
import { createRecipe } from '../../store/recipe';
import { useHistory } from 'react-router';
import './CreateRecipeForm.css'

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
      <form onSubmit={onFormSubmitCreateRecipeBase}>

        <div className="create-recipe-base-title"> Start Your Creation</div>
          <ul className="error-group">
              {errors.map((error, idx) => <li key={idx}>*{error}</li>)}
          </ul>

          {/* FORM INPUTS */}
          <div className="create-recipe-base-card">
            <div>
              <label className="create-recipe-base-label">
                Title
              </label>
            </div>
            <div>
              <input className="create-recipe-base-input"
                  placeholder="example: 'tofu scramble'"
                  required
                  value={title}
                  onChange={setTitleE}
                  type="text" />
            </div>
          </div>

        <div className="create-recipe-base-card">
            <div>
            <label className="create-recipe-base-label">
                image url (optional)
              </label>
            </div>
            <div>
            <input className="create-recipe-base-input"
                  placeholder="www.tofuscrambleimage.com"
                  required
                  value={imageUrl}
                  onChange={setImageUrlE}
                  type="text" />
            </div>
          {imageUrl && 
          <div id="create-recipe-base-image-preview"
          className="create-recipe-base-card">
              <img src={imageUrl} alt="Can't Find"
              id="create-recipe-preview-image" />
            </div>
          }
          </div>

          <div className="input-wrapper">
            <button className="submit-list-button" type="submit">Start Creation</button>
          </div>


      </form>
    </div>
  )
}
