import { Link, useHistory } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { usePost } from "../hooks/posts";

export default function PostCard({ post }) {
    const { name, description, id } = usePost(post.id);
    const { user } = useUser();
    // const { posts } = usePosts();
    const isOwner = user.id === post.user_id;
    return (
        <>
          <div>
              <Link exact to={`/posts/${post.id}`}>
                <ul>
                    <li>{post.name}</li>
                    <li>{post.description}</li>
                </ul>
              </Link>
              {isOwner && <Link to={`/posts/${post.id}/edit`}>
                  <button>Edit Post</button>
              </Link>}
          </div>
        </>
    )
}