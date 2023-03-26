import React from "react";
import { useRef } from "react";

import "../styles/reset.css";
import "../styles/UserEdit.css";

import { NoPage } from "./NoPage";
import { Spinner } from "./Spinner";

export const UserEdit = ({ sendRequest, loading, error, reload }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const submitHandler = () => {
    sendRequest({ name: nameRef.current.value, email: emailRef.current.value });
    reload();
  };

  if (loading) return <Spinner />;
  if (error) return <NoPage message="Fail" />;

  return (
    <div className="UserEdit">
      <div className="UserEdit-input">
        <input type="text" placeholder="name" ref={nameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
      </div>
      <div className="UserEdit-buttons">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};
