import './Header.css';
import { useState } from 'react';

export default function Header({ setType }) {
  return (
    <div className="nav">
      <h4
        onClick={() => {
          setType('signin');
        }}
      >
        Sign In
      </h4>
      <h4
        onClick={() => {
          setType('signup');
        }}
      >
        Sign Up
      </h4>
    </div>
  );
}
