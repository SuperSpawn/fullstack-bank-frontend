import React, { useRef } from "react";

import "../styles/reset.css";
import "../styles/SignUp.css";

import usePost from "../hooks/usePost";

import { NoPage } from "./NoPage";
import { Spinner } from "./Spinner";

export const SignUp = ({ setSection }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const { sendRequest, loading, error } = usePost(
    "https://carmine-ostrich-tie.cyclic.app/users/"
  );

  const registerHandler = async () => {
    const user = {};
    user.name = nameRef.current.value;
    user.email = emailRef.current.value;
    nameRef.current.value = "";
    emailRef.current.value = "";

    sendRequest(user);
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <NoPage message="Post request failed" />;
  }

  return (
    <div className="SignUp">
      <div className="SignUp-input">
        <p>name</p>
        <input ref={nameRef} type="text" placeholder="e.g. John Doe" />
        <p>email</p>
        <input ref={emailRef} type="email" placeholder="e.g. john@doe.com" />
      </div>
      <div className="SignUp-buttons">
        <button onClick={registerHandler}>Register</button>
      </div>
    </div>
  );
};
