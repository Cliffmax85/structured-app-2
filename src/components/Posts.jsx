import { useState } from 'react';
import { createPost } from '../services/posts';
import { useUser } from '../context/UserContext';

export default function PostForm({ addPost }) {
  const { user } = useUser();
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('')

  const postInput = async (e) => {
    e.preventDefault();
    const entry = await createPost({ user_id: user.id, description, email });
    addPost(entry);
    setDescription('');
  };

  return (
    <>
      <div>
        <form onSubmit={postInput}>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            name='email'
            value={email}
            placeholder='enter email'
            onChange={(e) => setEmail(e.target.value)}
            />
          <button 
            type="submit"
          >
              Add a post
          </button>
        </form>
      </div>
    </>
  );
}
