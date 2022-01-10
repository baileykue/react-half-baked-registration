import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Auth from './views/Auth';
import SignIn from './views/SignIn';
import { getUser, signOut } from './services/users';
import SignUp from './views/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  console.log(currentUser);
  // const logoutUser = async () => {
  //   await signOut();
  //   setCurrentUser(null);
  // };
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h1>I am Signed In</h1>
                <button>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
