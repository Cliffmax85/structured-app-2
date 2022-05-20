import { Link, useParams } from "react-router-dom";
import { getPosts } from "../../services/posts";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const { posts, getPost } = getPosts();

  useEffect(() => {
      setPost(getPost(id));
  }, [id, posts]);
  
  return (
      <>
       <Link to='/posts'>
           <section>
               <p>{post.description}</p>
               <h5>{post.name}</h5>
           </section>
       </Link>
      </>
  )
}