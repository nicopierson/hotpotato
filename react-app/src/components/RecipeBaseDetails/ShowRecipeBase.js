import React from 'react'

const ShowRecipeBase = ({setShowEdit, isOwner, thumbnail_url, name, likes}) => {
  return (
    <>
      <div style={{backgroundImage: `url(${thumbnail_url})`, height:'100%', 'backgroundRepeat':'no-repeat', 'backgroundSize':'cover' }} className="recipe-base">
        <div className="recipe-base--appear-on-hover">
          <div className="recipe-base-header">
            <div className="recipe-base-header__name">
              {name}
            </div>
            <div className="recipe-base-header__icon-container">
              {/* {isOwner &&
                  <i
                      onClick={() => setShowEdit(true)}
                      className='fas fa-edit recipe-base-header__edit-icon'
                  >
                  </i>
              } */}
            </div>

            <div className="recipe-base__likes">
              <i className="fas fa-heart"> </i> {likes}
            </div>
          </div>


          <div className="recipe-base__description">
            <p className="recipe-base__description-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>



        {/* <div className="recipe-base__id">
          recipeId: {recipeId}
        </div> */}
      </div>
    </>
  )
}

export default ShowRecipeBase;
