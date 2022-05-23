import { useParams, useHistory, Link } from "react-router-dom";
import { usePost, usePosts } from "../../hooks/posts";
import PostForm from "../../components/PostForm";

export default function CopyPost() {
    const history = useHistory();
    const { id } = useParams();
    const { post, loading } = usePost(id);
    const { addNewPost } = usePosts();

    if (loading) return null;

    const handleCopy = async (e) => {
        await addNewPost(e);
        history.replace('/posts')
    };

    return (
        <>
          <Link to='posts'>Back</Link>
          <PostForm post={post} onCopy={handleCopy}/>
        </>
    )
}