import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <Router>
      <Toaster />
      <UserProvider>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/posts">
            <Auth />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </UserProvider>
    </Router>
  );
}