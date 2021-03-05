import React, { useEffect } from "react";
import "./userHub.css";

import AuthForms from "../AuthForms";

const UserHub = ({ setTranslateNav, authenticated, setAuthenticated }) => {
  // const history = useHistory();

  useEffect(() => {
    const url = window.location.href;

    if (url.includes("userHub")) {
      setTranslateNav("translate");
    }
  });

  return (
    <>
      <div id="hub-background">
        <AuthForms
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
    </>
  );
};

export default UserHub;
