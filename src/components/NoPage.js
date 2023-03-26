import React from "react";

import "../styles/reset.css";
import "../styles/NoPage.css";

export const NoPage = ({ message }) => {
  return (
    <div className="NoPage">
      <h1>{message}</h1>
    </div>
  );
};
