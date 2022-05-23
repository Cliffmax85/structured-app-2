import { useParams, useHistory, Link } from "react-router-dom";
import PostForm from "../../components/PostForm";
import { useUser } from "../../context/UserContext";
import { usePost } from "../../hooks/posts";

export default function EditPost() {
    const history = useHistory();
    const { id } = useParams();
    const { post, update, loading } = usePost(id);
    const { user } = useUser();

    if (loading) {
        return null;
    }

    const isOwner = user.id === post.user_id;
    const URL = `/posts/${id}`;

    if (!isOwner) {
        history.replace(URL);
        return null;
    }

    const handleSubmit = async (e) => {
        await update(e);
        history.push('/posts');
    };

    return (
        <>
        <Link to={URL}>Back</Link>
        <PostForm post={post}
        onSubmit={handleSubmit} />
        </>
    )
}