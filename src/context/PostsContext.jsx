import { createContext, useReducer } from "react";

export const PostsContext = createContext();

const postReducer = (posts, { type, payload}) => {
    switch (type) {
        case 'create':
            return [payload[0], ...posts];
        case 'update':
            return posts.map((s) => (s.id === payload.id ? payload : s));
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