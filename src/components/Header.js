import './Header.css';
import classNames from 'classnames';

export default function Header({ type, setType }) {
  return (
    // {currentUser && <UserView signOutUser={signOutUser} />}
    // {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
    <div className="nav">
      <h4
        onClick={() => {
          setType('signin');
        }}
        className={classNames({ active: type === 'signin' })}
      >
        Sign In
      </h4>
      <h4
        onClick={() => {
          setType('signup');
        }}
        className={classNames({ active: type === 'signup' })}
      >
        Sign Up
      </h4>
    </div>
  );
}
