import React, {useState, useEffect} from 'react'
import './LandingPage.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

// todo
const LandingPage = () => {

  const sessionUser = useSelector(state => state.session.user);

  if(sessionUser) return (
    <Redirect to='/HomePage'/>
  )


  return (
    <div>

    </div>
  )
}

export default LandingPage;
