import { useState } from 'react';
import { createPost } from '../services/posts';
import { useUser } from '../context/UserContext';
import { useForm } from '../hooks/useForm';
import { usePosts } from '../hooks/posts';


export default function PostForm() {
  const { user } = useUser();
  const { addNewPost } = usePosts();
  const { formState, handleFormChange, setFormError } = useForm({ 
    name: '',
    description: '',
    // user_id: user.id,
    // email: user.email
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formState.name) return setFormError('gimme a name!');
    if (!formState.description) return setFormError('gimme your post');
    addNewPost(formState);


  }

  return (
    <section>
      <p>Post your post</p>
      <form onSubmit={handleSubmit}>
        <input
          id='name'
          name='name'
          placeholder='name'
          value={formState.name}
          onChange={handleFormChange}
        />
        <input
        id='description'
        name='description'
        placeholder='description'
        value={formState.description}
        onChange={handleFormChange}
        />
        <button>Add post</button>
      </form>
    </section>
  )

  // const { user } = useUser();
  // const [description, setDescription] = useState('');
  // const [name, setName] = useState('')

  // const postInput = async (e) => {
  //   e.preventDefault();
  //   const entry = await createPost({ user_id: user.id, description, email: user.email, name });
  //   addPost(entry);
  //   setDescription('');
  //   setName('');
  // };

  // return (
  //   <>
  //     <div>
  //       <form onSubmit={postInput}>
  //         <textarea
  //           name="description"
  //           value={description}
  //           onChange={(e) => setDescription(e.target.value)}
  //           placeholder='enter post!'
  //         />
  //         <textarea
  //           name='name'
  //           value={name}
  //           placeholder='enter name'
  //           onChange={(e) => setName(e.target.value)}
  //           />
  //         <button 
  //           type="submit"
  //         >
  //             Add a post
  //         </button>
  //       </form>
  //     </div>
  //   </>
  // );
}
