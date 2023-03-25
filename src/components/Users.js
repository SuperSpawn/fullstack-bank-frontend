import React from "react";
import axios from "axios";
import { useEffect } from "react";

import "../styles/reset.css";
import "../styles/Users.css";

import { UserCard } from "../components/UserCard";

export const Users = () => {
  useEffect(() => {
    const localUsers = localStorage.getItem("users");
    if (!localUsers) {
      axios
        .get("http://localhost:5001/users")
        .then((response) => response.data)
        .then((data) => data.data)
        .then((data) => localStorage.setItem("users", JSON.stringify(data)))
        .catch((error) => console.error(error));
    }
  }, []);

  const users = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="Users">
      {users.map((user) => (
        <UserCard id={user._id} user={user} />
      ))}
    </div>
  );
};
