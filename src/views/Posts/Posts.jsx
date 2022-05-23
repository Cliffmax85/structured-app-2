import PostForm from "../../components/PostForm";
import PostList from "../../components/PostsList";
import { usePosts } from "../../hooks/posts";

export default function Post() {
    const { posts } = usePosts();
    return (
        <main>
            <PostForm />
            {/* <PostList posts={posts} /> */}
        </main>
    )
}