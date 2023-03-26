import React from "react";

import "../styles/reset.css";
import "../styles/UserDelete.css";

import useDelete from "../hooks/useDelete";

import { Spinner } from "./Spinner";
import { NoPage } from "./NoPage";

export const UserDelete = ({ user, reload }) => {
  const { sendRequest, loading, error } = useDelete(
    "https://carmine-ostrich-tie.cyclic.app/users/" + user._id
  );

  const deleteHandler = () => {
    sendRequest();
    reload();
  };

  if (loading) return <Spinner />;
  if (error) return <NoPage message="user DELETE failed" />;

  return (
    <div className="UserDelete">
      <button onClick={deleteHandler}>Are you sure?</button>
    </div>
  );
};
