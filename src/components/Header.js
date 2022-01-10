import React from 'react';

export default function Header({ setType }) {
  return (
    <div className="tabs">
      <h3
        onClick={() => {
          setType('signin');
        }}
      >
        Sign In
      </h3>
      <h3
        onClick={() => {
          setType('signup');
        }}
      >
        Sign Up
      </h3>
    </div>
  );
}
