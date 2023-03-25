import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/UserCard.css";

export const UserCard = ({ user }) => {
  const [showAccounts, setShowAccounts] = useState(false);

  return (
    <div className="UserCard">
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.isActive === true ? "Active" : "Inactive"}</h3>
      <button onClick={setShowAccounts()}>Accounts</button>
    </div>
  );
};
