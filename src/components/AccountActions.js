import React, { useRef } from "react";

export const AccountActions = ({ sendRequest, reload }) => {
  const cashRef = useRef(null);
  const creditRef = useRef(null);

  const withdrawHandler = () => {
    let updateAmount = {};
    if (cashRef.current.value !== "") {
      updateAmount.cash = -Number.parseFloat(cashRef.current.value);
    }
    if (creditRef.current.value !== "") {
      updateAmount.credit = -Number.parseFloat(creditRef.current.value);
    }
    sendRequest(updateAmount);
    reload();
  };
  const depositHandler = () => {
    let updateAmount = {};
    if (cashRef.current.value !== "") {
      updateAmount.cash = Number.parseFloat(cashRef.current.value);
    }
    if (creditRef.current.value !== "") {
      updateAmount.credit = Number.parseFloat(creditRef.current.value);
    }
    sendRequest(updateAmount);
    reload();
  };

  return (
    <div className="AccountActions">
      <div className="AccountActions-input">
        <input ref={cashRef} type="number" placeholder="cash" />
        <input ref={creditRef} type="number" placeholder="credit" />
      </div>
      <div>
        <button onClick={depositHandler}>Deposit</button>
        <button onClick={withdrawHandler}>Withdraw</button>
      </div>
    </div>
  );
};
