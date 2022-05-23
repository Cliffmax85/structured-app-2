import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './views/Header/Header';
import { PostsProvider } from './context/PostsContext';
import PostDetail from './views/PostDetail/PostDetail';
import PostList from './components/PostsList';
import Post from './views/Posts/Posts';
import EditPost from './views/Posts/EditPost';
import CopyPost from './views/Posts/CopyPost';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <PostsProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path='/posts/:id/edit'>
              <EditPost />
            </PrivateRoute>
            <PrivateRoute exact path='/posts/:id/copy' >
              <CopyPost />
            </PrivateRoute>
            <PrivateRoute exact path='/posts/:id'>
              <PostDetail />
            </PrivateRoute>
            <PrivateRoute path="/posts">
              <PostList />
            </PrivateRoute>
            <Route path="/login">
              <Auth />
            </Route>
            <PrivateRoute path="/create">
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
