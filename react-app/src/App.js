import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";

import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import UserHub from "./components/UserHub";
import MyPage from "./components/MyPage";
import Templates from "./components/Templates";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const [authenticated, setAuthenticated] = useState(false);
  const [translateNav, setTranslateNav] = useState("");
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Navigation
        translateNav={translateNav}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Switch>
        <Route path="/" exact={true} authenticated={authenticated}>
          <SplashPage
            setTranslateNav={setTranslateNav}
            authenticated={authenticated}
          />
        </Route>
        <Route path="/userHub" exact={true} authenticated={authenticated}>
          <UserHub
            setTranslateNav={setTranslateNav}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route
          path="/myPage/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <MyPage
            setAuthenticated={setAuthenticated}
            translateNav={translateNav}
          />
        </Route>
        <Route path="/templates" exact={true}>
          <Templates translateNav={translateNav} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
