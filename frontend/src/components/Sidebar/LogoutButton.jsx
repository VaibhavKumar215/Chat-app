import React from 'react';
import assets from '../../assets/assets';
import userLogout from '../../Hook/userLogout';

const LogoutButton = () => {
  const { loading, logout } = userLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <img
          src={assets.logoutButton}
          alt="Logout"
          onClick={logout}
          className="cursor-pointer"
        />
      ) : (
        <span className="loading loading-spinner" aria-label="Logging out..."></span>
      )}
    </div>
  );
};

export default LogoutButton;
