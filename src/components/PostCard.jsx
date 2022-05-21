import { Link, useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom/";
import { useUser } from "../context/UserContext";
import { usePosts } from "../hooks/posts";

export default function PostCard({ posts }) {
    const { name, description, id } = posts();
    const { user } = useUser();
    // const { posts } = usePosts();
    const isOwner = user.id === posts.user_id;
console.log('NAME???', name);
    return (
        <>
          <div>
              <Link to={`/posts/${id}`}>
                <ul>
                    <li>{name}</li>
                    <li>{description}</li>
                </ul>
              </Link>
              {isOwner && <Link to={`/posts/${id}/edit`}>
                  <button>Edit Post</button>
              </Link>}
          </div>
        </>
    )
}