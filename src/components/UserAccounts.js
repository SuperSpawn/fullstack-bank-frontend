import React from "react";

import "../styles/reset.css";
import "../styles/UserAccounts.css";

import { UserAccount } from "./UserAccount";
import { NoPage } from "./NoPage";
import { Spinner } from "./Spinner";

import usePost from "../hooks/usePost";

export const UserAccounts = ({ user, loading, error, reload }) => {
  const {
    sendRequest: postRequest,
    loading: postLoading,
    error: postError,
  } = usePost("https://carmine-ostrich-tie.cyclic.app/accounts/");

  const handleAddAccount = () => {
    const account = { cash: 1, credit: 1, owner: user._id };
    postRequest(account);
    reload();
  };
  if (loading || postLoading) return <Spinner />;
  if (error || postError) return <NoPage message="Error creating account" />;

  return (
    <div className="UserAccounts">
      <div className="UserAccounts-navbar">
        <button onClick={handleAddAccount}>Add account</button>
      </div>
      <div className="UserAccounts-accounts">
        {user.accounts.map((account) => (
          <UserAccount
            key={account._id}
            account={account}
            loading={loading}
            error={error}
            reload={reload}
          />
        ))}
      </div>
    </div>
  );
};
