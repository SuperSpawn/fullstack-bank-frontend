import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/Account.css";

import { AccountEdit } from "./AccountEdit";
import { AccountActions } from "./AccountActions";

import usePut from "../hooks/usePut";
import useDelete from "../hooks/useDelete";

import { Spinner } from "./Spinner";
import { NoPage } from "./NoPage";

export const Account = ({ reload, account, setFrom, setTo }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { sendRequest, loading, error } = usePut(
    "https://carmine-ostrich-tie.cyclic.app/accounts/" + account._id
  );
  const {
    sendRequest: sendInteract,
    loading: interactLoading,
    error: interactError,
  } = usePut(
    "https://carmine-ostrich-tie.cyclic.app/accounts/interact/" + account._id
  );
  const {
    sendRequest: deleteRequest,
    loading: deleteLoading,
    error: deleteError,
  } = useDelete(
    "https://carmine-ostrich-tie.cyclic.app/accounts/" + account._id
  );

  if (loading || deleteLoading || interactLoading) return <Spinner />;
  if (error || interactError)
    return <NoPage message="Account PUT request failed" />;
  if (deleteError) return <NoPage message="Account DELETE request failed" />;

  const deleteHandler = () => {
    deleteRequest();
    reload();
  };

  return (
    <div className="Account">
      <div className="Account-data">
        <p>owner: {account.owner}</p>
        <p>cash: {account.cash}</p>
        <p>credit: {account.credit}</p>
      </div>
      <div className="Account-buttons">
        <button onClick={() => setShowEdit((showEdit) => !showEdit)}>
          Edit
        </button>
        <button
          onClick={() => {
            setFrom(account._id);
          }}
        >
          From
        </button>
        <button
          onClick={() => {
            setTo(account._id);
          }}
        >
          To
        </button>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={() => setShowActions((showActions) => !showActions)}>
          Account actions
        </button>
      </div>
      <div className="Account-actions">
        {showEdit && <AccountEdit sendRequest={sendRequest} reload={reload} />}
        {showActions && (
          <AccountActions sendRequest={sendInteract} reload={reload} />
        )}
      </div>
    </div>
  );
};
