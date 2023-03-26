import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/UserAccount.css";

import { UserAccountEdit } from "./UserAccountEdit";
import { NoPage } from "./NoPage";
import { Spinner } from "./Spinner";

import useDelete from "../hooks/useDelete";

export const UserAccount = ({ account, loading, error, reload }) => {
  const [showEdit, setShowEdit] = useState(false);
  const {
    sendRequest: deleteRequest,
    loading: deleteLoading,
    error: deleteError,
  } = useDelete(
    "https://carmine-ostrich-tie.cyclic.app/accounts/" + account._id
  );

  const handleDelete = () => {
    deleteRequest();
    reload();
  };
  if (loading || deleteLoading) return <Spinner />;
  if (error || deleteError) return <NoPage message="Delete request failed" />;

  return (
    <div className="UserAccount">
      <div className="UserAccount-data">
        <p>cash: {account.cash}</p>
        <p>credit: {account.credit}</p>
      </div>
      <div className="UserAccount-buttons">
        <button onClick={() => setShowEdit((showEdit) => !showEdit)}>
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="UserAccount-sections">
        {showEdit && (
          <UserAccountEdit
            account={account}
            loading={loading}
            error={error}
            reload={reload}
          />
        )}
      </div>
    </div>
  );
};
