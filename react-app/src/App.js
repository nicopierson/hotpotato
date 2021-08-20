import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ViewEditRecipePage from './components/ViewEditRecipePage';
import Profile from './components/Profile';
import Footer from './components/Footer/Footer';
import RecipeCardComponent  from './components/RecipeCardComponent';
import ProfilePage  from './components/ProfilePage';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/view/recipe/:recipeId' exact={true}>
          <ViewEditRecipePage />
        </Route>
        <Route path='/card' exact={true}>
          <RecipeCardComponent />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
        </ProtectedRoute>
        <Route path='/profile/:userId' exact={true}>
          <ProfilePage />
        </Route>

      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
