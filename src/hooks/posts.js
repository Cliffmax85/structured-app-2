import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import { getPost, getPosts, updatePost, createPost } from "../services/posts";

export function usePosts() {
    const context = useContext(PostsContext);

    if (context === undefined) {
        throw new Error('usePosts must be wrapped within a PostsContext');
    }

    const { posts, dispatch } = context;

console.log('3posts3', );    
    useEffect(() => {
        if (posts) return;
        const load = async () => {
            try {
                const payload = await getPosts();
                dispatch({ type: 'reset', payload: payload });
            } catch (error) {
                throw new Error('Somethign went wrong getting data')
            }
        };
        load();
    }, []);

    const addNewPost = async (post) => {
        try {
            const newPost = await createPost(post);
            dispatch({ type: 'create', payload: newPost })
        } catch (error) {
            throw new Error('could not add new post');
        }
    };
    return { posts, addNewPost }
}

export function usePost(id) {
    const context = useContext(PostsContext);

    if (context === undefined) {
        throw new Error('usePost must be wrapped within a PostsContext');
    }

    const { posts, dispatch } = context;

    const [post, setPost] = useState(null);
    console.log('posts2', post);

    useEffect(() => {
        const load = async () => {
            try {
                const post = await getPost(id);
                setPost(post);
            } catch (error) {
                throw new Error('Falied to get post by id')
            }
        };
          load();
    }, [id]);

    const update = async (edits) => {
        if (!post) return;

        try {
            const updated = await updatePost({ ...post, ...edits });
            const payload = { ...updated, name: posts.name };
            setPost(payload);
            if (posts) dispatch({ type: 'update', payload });
            return payload;
        } catch (error) {
            throw new Error('failed to update');
        }
    }

    return { post, update };
}