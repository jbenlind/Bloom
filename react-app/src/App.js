import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from './store/session';

import SplashPage from './components/SplashPage';
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
      <Switch>
          <Route path="/" exact={true}>
            <SplashPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
