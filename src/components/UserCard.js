import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/UserCard.css";

import { UserAccounts } from "./UserAccounts";
import { UserEdit } from "./UserEdit";
import { UserDelete } from "./UserDelete";

import { NoPage } from "./NoPage";
import { Spinner } from "./Spinner";

import usePut from "../hooks/usePut";

export const UserCard = ({ user, index, reload }) => {
  const [showAccounts, setShowAccounts] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const { sendRequest, loading, error } = usePut(
    "https://carmine-ostrich-tie.cyclic.app/users/" + user._id
  );

  const handleToggleActivity = () => {
    sendRequest({ isActive: !user.isActive });
    reload();
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <NoPage message="Failed to send put request" />;
  }

  return (
    <div className="UserCard">
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.isActive === true ? "Active" : "Inactive"}</h3>
      <button onClick={() => setShowAccounts((showAccounts) => !showAccounts)}>
        Accounts
      </button>
      <button onClick={() => setShowEdit((showEdit) => !showEdit)}>Edit</button>
      <button onClick={() => setShowDelete((showDelete) => !showDelete)}>
        Delete
      </button>
      <button onClick={handleToggleActivity}>Toggle activity</button>
      {showAccounts && (
        <UserAccounts
          user={user}
          loading={loading}
          error={error}
          reload={reload}
        />
      )}
      {showEdit && (
        <UserEdit
          sendRequest={sendRequest}
          loading={loading}
          error={error}
          reload={reload}
        />
      )}
      {showDelete && <UserDelete user={user} reload={reload} />}
    </div>
  );
};
