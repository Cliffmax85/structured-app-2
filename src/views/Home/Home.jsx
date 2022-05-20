import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/posts';
import { useUser } from '../../context/UserContext';
import Posts from '../../components/PostForm';
import PostDetail from '../PostDetail/PostDetail';

export default function Home() {

  return (
    <>
      <h2>Welcome to InstaReddit</h2>
      <Link to='post'>Start posting posting</Link>
      
    </>
  )
  // const { user, logout } = useUser();
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchPosts = () => {
  //   getPosts()
  //     .then(setPosts)
  //     .finally(() => setLoading(false));
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  
  // // console.log('poststs', posts);
  // // console.log(user);

  // return (
  //   <>
  //     <main>
  //       <Router>
  //         <Link to="/create">
  //           <button>create</button>
  //         </Link>
  //         <Switch>
  //           <Route path="/create">
  //             <h1>create</h1>
  //             <Posts addPost={fetchPosts} user_id={user.id}/>
  //             <ul>{posts.map((post => (
  //                     <li key={post.id}>{post.description} 
  //                       <br/> 
  //                       {post.name}</li>
  //                        )))}</ul>
  //           </Route>
  //           <Route exact path="/details/:id">
  //             <PostDetail />
  //           </Route>
  //           <Route>
  //             <div className="listView">
  //               <ul>
  //                 <Link to="/details/:id">
  //                   <ul>{posts.map((post => (
  //                     <li key={post.id}>{post.description} 
  //                       <br/> 
  //                       {post.picture}</li>
  //                   )))}</ul>
  //                 </Link>
  //               </ul>
  //             </div>
  //           </Route>
  //         </Switch>
  //       </Router>
  //     </main>
  //   </>
  // );
}
