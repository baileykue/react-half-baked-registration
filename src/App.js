import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            Home Page
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
