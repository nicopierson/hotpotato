import React, {useState, useEffect} from 'react'
import './LandingPage.css'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

// todo
const LandingPage = () => {

  const sessionUser = useSelector(state => state.session.user);

  // if(sessionUser) return (
  //   <Redirect to='/HomePage'/>
  // )


  return (
    <div>
      Hello World~!
    </div>
  )
}

export default LandingPage;
