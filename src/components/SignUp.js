import React from "react";

import "../styles/reset.css";
import "../styles/SignUp.css";

export const SignUp = () => {
  return (
    <div className="SignUp">
      <p>name</p>
      <input type="text" placeholder="e.g. John Doe" />
      <p>email</p>
      <input type="email" placeholder="e.g. john@doe.com" />
    </div>
  );
};
