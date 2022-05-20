import PostForm from "../../components/PostForm";
import PostList from "../../components/PostsList";

export default function Post() {
    return (
        <main>
            <PostForm label="Create Post" />
            <PostList />
        </main>
    )
}