import React, { useState, useEffect } from "react";

import "../styles/reset.css";
import "../styles/Users.css";

import { NoPage } from "../components/NoPage";
import { UserCard } from "../components/UserCard";
import { Spinner } from "./Spinner";

import useAxios from "../hooks/useAxios";

export const Users = () => {
  let { loading, error, data } = useAxios(
    "https://carmine-ostrich-tie.cyclic.app/users/"
  );
  const [users, setUsers] = useState(null);
  //const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (data) {
      setUsers(data.data);
    }
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <NoPage message="Error fetching users" />;
  }

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="Users">
      <div className="Users-navbar"></div>
      <div className="Users-users">
        {users &&
          users.map((user, index) => (
            <UserCard
              key={user._id}
              user={user}
              index={index}
              reload={reload}
            />
          ))}
      </div>
    </div>
  );
};
