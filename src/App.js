import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser, signOut } from './services/users';
import Auth from './views/Auth';
import UserView from './components/UserView';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const signOutUser = async () => {
    await signOut();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && <UserView signOutUser={signOutUser} currentUser={currentUser} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
