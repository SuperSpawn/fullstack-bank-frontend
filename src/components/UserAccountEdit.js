import React, { useRef } from "react";

import "../styles/reset.css";
import "../styles/UserAccountEdit.css";

import { NoPage } from "./NoPage";
import { Spinner } from "./Spinner";

import usePut from "../hooks/usePut";

export const UserAccountEdit = ({ account, loading, error, reload }) => {
  const cashRef = useRef(null);
  const creditRef = useRef(null);
  const {
    sendRequest: sendPut,
    loading: putLoading,
    error: putError,
  } = usePut("https://carmine-ostrich-tie.cyclic.app/accounts/" + account._id);

  const updateHandler = () => {
    let updatedAccount = {};
    if (cashRef.current.value !== "") {
      updatedAccount.cash = cashRef.current.value;
    }
    if (creditRef.current.value !== "") {
      updatedAccount.credit = creditRef.current.value;
    }
    sendPut(updatedAccount);
    reload();
  };

  if (loading || putLoading) return <Spinner />;
  if (error || putError) return <NoPage message="Account PUT request failed" />;

  return (
    <div className="UserAccountEdit">
      <div className="UserAccountEdit-input">
        <input ref={cashRef} type="number" placeholder="cash" />
        <input ref={creditRef} type="number" placeholder="credit" />
      </div>
      <div className="UserAccountEdit-buttons">
        <button onClick={updateHandler}>Submit</button>
      </div>
    </div>
  );
};
