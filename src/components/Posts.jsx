import { useState } from 'react';
import { createPost } from '../services/posts';
import { useUser } from '../context/UserContext';

export default function PostForm({ addPost }) {
  const { user } = useUser();
  const [description, setDescription] = useState('');
  const [name, setName] = useState('')

  const postInput = async (e) => {
    e.preventDefault();
    const entry = await createPost({ user_id: user.id, description, email: user.email, name });
    addPost(entry);
    setDescription('');
    setName('');
  };

  return (
    <>
      <div>
        <form onSubmit={postInput}>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='enter post!'
          />
          <textarea
            name='name'
            value={name}
            placeholder='enter name'
            onChange={(e) => setName(e.target.value)}
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
