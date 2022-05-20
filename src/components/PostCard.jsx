import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/";
import { useUser } from "../context/UserContext";
import { usePost } from "../hooks/posts";

export default function PostCard({ post }) {
    const { name, description, id } = post();
    const { user } = useUser();
    const isOwner = user.id === user.user_id;
console.log(name);
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