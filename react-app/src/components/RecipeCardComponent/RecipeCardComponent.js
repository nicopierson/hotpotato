import React from 'react'
import './RecipeCardComponent.css'

export const RecipeCardComponent = ({name, thumbnail_url, user_id, likes, id}) => {
  const default_image_url = 'https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/06/silken-tofu-soup-1-mini.jpg?fit=1000%2C667&ssl=1'
  const default_profile_url = 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
  let profile_image;

  return (
    <>
      <div style={{"margin-top":"50px"}}> </div>
      <div style={{backgroundImage: `url(${thumbnail_url? thumbnail_url: default_image_url})`, height:'100%', 'background-repeat':'no-repeat', 'background-size':'cover' }} className="recipe-card">
        <div className="recipe-card__image-container">
          <div className="rc-ic--appear-on-hover">
            <div className="rc-ic__title"> {`${name}`}</div>
          </div>
        </div>
      </div>
      <div className="recipe-card__metadata-container">
          <div className="profile-container">
            <div className="pc__image-container">
              <img className="pc-ic__image" src={`${profile_image? profile_image: default_profile_url}`} alt="" />
            </div>
            <div className="pc__username">username</div>
          </div>
          <div className="rc-mc-likes-container">
            <div className="rc-mc__likes">
              {`${likes? likes: 353}`}
            </div>
            {/* <i className="fas fa-heart rc-mc__likes-icon"> </i> {likes} */}
            <i className="far fa-heart rc-mc__likes-icon"></i>
          </div>

        </div>
    </>
  )
}
