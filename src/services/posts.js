import { client, checkError } from './client';

export async function getPosts() {
  const request = await client
    .from('posts')
    .select()
    .order('created_at', { ascending: false });

  return checkError(request);
}

export async function createPost({ user_id, description, email }) {
  const request = await client
    .from('posts')
    .insert({ user_id: user_id, description, email });
  return checkError(request);
}
