import React, { useRef } from "react";

export const AccountEdit = ({ sendRequest, reload }) => {
  const cashRef = useRef(null);
  const creditRef = useRef(null);

  const editHandler = () => {
    let updatedAccount = {};
    if (cashRef.current.value !== "") {
      updatedAccount.cash = Number.parseFloat(cashRef.current.value);
    }
    if (creditRef.current.value !== "") {
      updatedAccount.credit = Number.parseFloat(creditRef.current.value);
    }
    sendRequest(updatedAccount);
    reload();
  };

  return (
    <div className="AccountEdit">
      <div className="AccountEdit-input">
        <input ref={cashRef} type="number" placeholder="cash" />
        <input ref={creditRef} type="number" placeholder="credit" />
      </div>
      <div className="AccountEdit-buttons">
        <button onClick={editHandler}>Submit</button>
      </div>
    </div>
  );
};
