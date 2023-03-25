import React from "react";

export const Navbar = ({ setSection }) => {
  return (
    <div className="Navbar">
      <button onClick={() => setSection(1)}>Signup</button>
      <button onClick={() => setSection(0)}>Users</button>
      <button>User</button>
    </div>
  );
};
