import React from 'react'
import './RecipeCardComponent.css'
import { useHistory } from 'react-router';

export const RecipeCardComponent = ({name, thumbnail_url, user_id, likes, id, username, profileImg}) => {
  const default_image_url = 'https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/06/silken-tofu-soup-1-mini.jpg?fit=1000%2C667&ssl=1'

  const history = useHistory();

  return (
    <div className="recipe-card-wrapper">
      <div className="recipe-elements-container">


        {/* image */}
        <div style={{backgroundImage: `url(${thumbnail_url ? thumbnail_url: default_image_url})`, height:'100%', width:'100%', 'backgroundRepeat':'no-repeat', 'backgroundSize':'cover', 'objectFit': 'cover' }} className="recipe-card">
          <div className="recipe-card__image-container" onClick={()=>{history.push(`/view/recipe/${id}`)}}>
            <div className="rc-ic--appear-on-hover">
              <div className="rc-ic__title"> {`${name}`}</div>
            </div>
          </div>
        </div>

        {/* profile img, name, likes */}
        <div className="recipe-card__metadata-container" >
          <div className="profile-container" onClick={()=>{history.push(`/profile/${user_id}`)}} >
            <div className="pc__image-container" >
              <img className="pc-ic__image" src={profileImg} alt="" />
            </div>
            <div className="pc__username">{`${username}`}</div>
          </div>
          <div className="rc-mc-likes-container">
            <div className="rc-mc__likes">
              {`${likes}`}
            </div>
            {/* <i className="fas fa-heart rc-mc__likes-icon like-hover"> </i> */}
            <i className="fas fa-heart rc-mc__likes-icon"></i>

          </div>
        </div>
      </div>

    </div>
  )
}
