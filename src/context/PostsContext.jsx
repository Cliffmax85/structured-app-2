import { createContext, useReducer } from "react";

export const PostsContext = createContext();

const postReducer = (posts, { type, payload }) => {
    switch (type) {
        case 'create':
            return [payload, ...posts];
        case 'reset':
            return payload;
        case 'update':
            return posts.map((s) => (s.id === payload.id ? payload : s));
        case 'delete':
            return posts.filter((post) => post.id !== payload.id);
        default: 
          throw new Error(`Action ${type} is broke dog`);
    }
}

export const PostsProvider = ({ children }) => {
    const [posts, dispatch] = useReducer(postReducer);

    return (
        <PostsContext.Provider value={{ posts, dispatch }}>
            {children}
        </PostsContext.Provider>
    );
};