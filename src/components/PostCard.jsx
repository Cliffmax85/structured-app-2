import { Link, useHistory } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { usePost } from "../hooks/posts";

export default function PostCard({ post }) {
    const { del } = usePost(post.id);
    const { user } = useUser();
    // const { posts } = usePosts();
    const isOwner = user.id === post.user_id;
    const handleDelete = async () => {
        if (!confirm('delete?')) return;
        await del();
    }
    return (
        <>
          <div>
              <Link to={`/posts/${post.id}`}>
                <ul>
                    <li>{post.name}</li>
                    <br/>
                    <li>{post.description}</li>
                </ul>
              </Link>
              <br/>
              {isOwner && <Link to={`/posts/${post.id}/edit`}>
                  <button>Edit Post</button>
              </Link>}
              {isOwner && <button onClick={handleDelete}>Delete</button>}
          </div>
        </>
    )
}