import { usePosts } from "../hooks/posts";
import PostCard from "./PostCard";

export default function PostList() {
    const { posts } = usePosts();
    console.log('?????????POST', posts);
    if (!posts) {
        return <h3>No Posts</h3>;
    } else {
        return (
            <ul>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ul>
        )
    }
}