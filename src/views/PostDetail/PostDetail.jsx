// import { Link, useParams } from "react-router-dom";
// import { getPosts } from "../../services/posts";
// import { useEffect, useState } from "react";
// import { usePost } from "../../hooks/posts";

// export default function PostDetail({}) {
//   const { id } = useParams();
//   const { post } = usePost(id);
//   console.log(id);
//   return (
//       <>
//        <Link to='/posts'>
//            Back to posts
//        </Link>
//            <section>
//                <p>{post.description}</p>
//                <h5>{post.name}</h5>
//            </section>
//       </>
//   )
// }