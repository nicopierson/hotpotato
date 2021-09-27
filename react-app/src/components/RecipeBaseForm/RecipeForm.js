import React , { useState, useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateRecipeForm.css';
import { createRecipe } from '../../store/recipe';
import { useHistory } from 'react-router';
import './CreateRecipeForm.css'
import { setAllCategories } from '../../store/category';

export const RecipeForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user_id = useSelector((state) => state.session.user?.id);
  const categories_from_server = useSelector((state)=> state.category?.categories)



  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoriesSelected, setCategoriesSelected] = useState(new Set());
  const [errors, setErrors] = useState([]);

  const setTitleE = (e) => setTitle(e.target.value);
  const setImageUrlE = (e) => setImageUrl(e.target.value);

  const removeCategoryFromState = (category_name) =>{
    const arr = [...categoriesSelected].filter(x => x !== category_name)
    setCategoriesSelected(new Set(arr))
  }

  const addCategoryToState = (category_name) =>{
    setCategoriesSelected(() => new Set([...categoriesSelected, category_name]))
  }

  const onFormSubmitCreateRecipeBase = (e)=>{
    console.log("start 0")
    e.preventDefault();
    // if(!user) history.push('/')
    // else{
      console.log("start 0")
      const payload = {
        name: title,
        thumbnail_url: imageUrl,
        user_id: user_id,
        categories_relations: [...categoriesSelected]
      }
      setErrors([]);
      dispatch(createRecipe(payload)).then( (data)=>{
        if(data && data.id){
          history.push(`/view/recipe/${data.id}`);
          window.location.reload();
        }
        else if(data && data.errors){
          setErrors(data.errors);
          console.log("error1")
        }
        else{
          setErrors(['something went wrong, please try again.'])
        }
      }).catch(async (res) =>{
        setErrors(['something went wrong, please try again.'])
      })
    // }
  }



  useEffect(() => {
    dispatch(setAllCategories())

    }, [dispatch])




  return (
    <div>
      <form onSubmit={onFormSubmitCreateRecipeBase}>

        <div className="create-recipe-base-title"> Start Your Creation</div>

          {/* FORM INPUTS */}
          <div className="create-recipe-base-card">
            <div>
              <ul className="error-group">
                  {errors.map((error, idx) => error.includes("Creation") && <li className="error-text" key={idx}>*{error}</li>)}
              </ul>
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

          {/* FORM Categories */}
          <div className="create-recipe-base-card">
            <div>
              <label className="create-recipe-base-label">
                Select A Few Categories
              </label>
            </div>
            <div className="crbc__categories">
              {categories_from_server && categories_from_server.map(category=>{
                // add conditional rendering for style if category in array
                // onclick add to state
                return <div onClick={()=>categoriesSelected.has(category.name) ? removeCategoryFromState(category.name) : addCategoryToState(category.name)} className={categoriesSelected.has(category.name) ? "crbc-c__category--selected": "crbc-c__category" }> {category.name} </div>
              })}

            </div>
          </div>


        <div className="create-recipe-base-card">
            <div>
            <ul className="error-group">
                  {errors.map((error, idx) => error.includes("URL") && <li className="error-text" key={idx}>*{error}</li>)}
              </ul>
            <label className="create-recipe-base-label">
                Image url (optional)
              </label>
            </div>
            <div>
            <input className="create-recipe-base-input"
                  placeholder="www.tofuscrambleimage.com"

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

            <div className="create-button-input-wrapper">
              <button className="submit-list-button"
              id="start-creation-btn" type="submit">Start Creation</button>
            </div>
          </div>




      </form>
    </div>
  )
}
