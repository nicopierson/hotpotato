import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ViewEditRecipePage from './components/ViewEditRecipePage';
import Footer from './components/Footer/Footer';
import RecipeCardComponent  from './components/RecipeCardComponent';
import ProfilePage  from './components/ProfilePage';
import FeedPage from './components/FeedPage';
import LandingPage from './components/LandingPage/LandingPage';


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
      <div className = "container-app">
        <Switch >
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
          <Route path='/explore' exact={true}>
            <LandingPage />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>

          <ProtectedRoute path='/feed' exact={true} >
            <FeedPage />
          </ProtectedRoute>

          <ProtectedRoute path='/' exact={true} >
              <Redirect to="/explore" />
          </ProtectedRoute>
          <ProtectedRoute path='/profile/:userId' exact={true}>
            <ProfilePage />
          </ProtectedRoute>
        </Switch>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
