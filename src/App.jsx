import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './views/Header/Header';
import { PostsProvider } from './context/PostsContext';
import PostDetail from './views/PostDetail/PostDetail';
import Post from './components/Posts'

export default function App() {
  return (
    <Router>
      <UserProvider>
        <PostsProvider>
          <Header />
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <PrivateRoute path="/posts">
              <Post />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </PostsProvider>
      </UserProvider>
    </Router>
  );
}
