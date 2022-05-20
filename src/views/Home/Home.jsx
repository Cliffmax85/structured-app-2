import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/posts';
import { useUser } from '../../context/UserContext';
import Posts from '../../components/Posts';

export default function Home() {
  const { user, logout } = useUser();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  
  console.log(posts);
  console.log(user);

  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/">
          <h1>ironicgram</h1>
        </Link>
        <h3>Hello {user.email}</h3>
        <button onClick={logout}>signout</button>
      </header>
      <main>
        <Router>
          <Link to="/create">
            <button>create</button>
          </Link>
          <Switch>
            <Route path="/create">
              <h1>create</h1>
              <Posts addPost={fetchPosts} user_id={user.id}/>

              <input
                type="file"
                accept="image/*"
                id="upload-dish-image"
                name="dish-image"
              />
              <form 
                type="text"
                id="description"
              >
              </form>
            </Route>
            <Route path="/details">
              <h1>details</h1>
            </Route>
            <Route>
              <div className="listView">
                <ul>
                  <Link to="/details/:id">
                    <ul>{posts.map((post => (
                      <li key={post.id}>{post.description} 
                        <br/> 
                        {post.picture}</li>
                    )))}</ul>
                  </Link>
                </ul>
              </div>
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}
