import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from './store/session';

import SplashPage from './components/SplashPage';
import Navigation from './components/Navigation';
import UserHub from './components/UserHub';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  // const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const user = await dispatch(authenticate());
  //     if (!user.errors) {
  //       // setAuthenticated(true);
  //     }
  //     setLoaded(true);
  //   })();
  // }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <>
      <Navigation />
        <Switch>
            <Route path="/" exact={true}>
              <SplashPage />
            </Route>
            <Route path="/userHub" exact={true}>
              <UserHub />
            </Route>
        </Switch>
    </>
  );
}

export default App;
