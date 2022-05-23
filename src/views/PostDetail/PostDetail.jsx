import { Link, useParams } from "react-router-dom";
import { getPosts } from "../../services/posts";
import { useEffect, useState } from "react";
import { usePost } from "../../hooks/posts";
import { useUser } from "../../context/UserContext";

export default function PostDetail() {
  const { id } = useParams();
  const  { post, loading }  = usePost(id);
  const { user } = useUser();
  const isOwner = user.id === post.user_id;
  console.log(isOwner);
  if (loading) {
      return null;
  } 
  return (
      <>
       <Link to='/posts'>
           Back to posts
       </Link>
           <section>
               <p>{post.description}</p>
               <p>Hello!</p>
               <h5>{post.name}</h5>
               {isOwner || (
                  <Link to={`/posts/${post.id}/copy`}>
                      <button>Copy Post</button>
                  </Link>
              )}
           </section>
      </>
  )
}