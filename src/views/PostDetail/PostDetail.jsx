import { Link, useParams } from "react-router-dom";
import { getPosts } from "../../services/posts";
import { useEffect, useState } from "react";
import { usePost } from "../../hooks/posts";

export default function PostDetail() {
  const { id } = useParams();
  const  { post, loading }  = usePost(id);
  console.log(post, '|||||||||');
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
           </section>
      </>
  )
}