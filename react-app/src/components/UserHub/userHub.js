import React from "react";
import "./userHub.css";

import AuthForms from "../AuthForms";

const UserHub = ({ authenticated, setAuthenticated }) => {

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
