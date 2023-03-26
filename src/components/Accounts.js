import React, { useState, useEffect, useRef } from "react";

import "../styles/reset.css";
import "../styles/Accounts.css";

import { Spinner } from "./Spinner";
import { NoPage } from "./NoPage";
import { Account } from "./Account";

import useAxios from "../hooks/useAxios";
import usePut from "../hooks/usePut";

export const Accounts = () => {
  const cashRef = useRef(null);
  const creditRef = useRef(null);

  //const [refresh, setRefresh] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const { data, loading, error } = useAxios(
    "https://carmine-ostrich-tie.cyclic.app/accounts/"
  );
  const {
    sendRequest: transferRequest,
    loading: transferLoading,
    error: transferError,
  } = usePut(
    "https://carmine-ostrich-tie.cyclic.app/accounts/" +
      from +
      "/transfer/" +
      to
  );

  useEffect(() => {
    if (data) {
      setAccounts(data.data);
    }
  }, [data]);

  const reload = () => {
    window.location.reload();
  };

  const transferHandler = () => {
    let transfer = {};
    if (cashRef.current.value !== "") {
      transfer.cash = Number.parseFloat(cashRef.current.value);
    }
    if (creditRef.current.value !== "") {
      transfer.credit = Number.parseFloat(creditRef.current.value);
    }
    transferRequest(transfer);
    reload();
  };

  if (loading || transferLoading) return <Spinner />;
  if (error || transferError)
    return <NoPage message="Accounts GET request failed" />;

  return (
    <div className="Accounts">
      <div className="Accounts-actions">
        <input ref={cashRef} type="number" placeholder="cash" />
        <input ref={creditRef} type="number" placeholder="credit" />
        <button onClick={transferHandler}>Transfer</button>
      </div>
      <div className="Accounts-data">
        {accounts &&
          accounts.map((account) => (
            <Account
              key={account._id}
              reload={reload}
              account={account}
              setFrom={setFrom}
              setTo={setTo}
            />
          ))}
      </div>
    </div>
  );
};
