import { client, checkError } from './client';

export async function getPosts() {
  const request = await client
    .from('posts')
    .select()
    .order('created_at', { ascending: false });

  return checkError(request);
}

export async function createPost({ user_id, description, email, name }) {
  const request = await client
    .from('posts')
    .insert({ user_id: user_id, description, email, name });
  return checkError(request);
}


export async function updatePost({ id, description }) {
  const request = await client
    .from('posts')
    .update({ description })
    .match({ id })
    .single();
  return checkError(request);
}

export async function getPost(id) {
  const request = await client
    .from('posts')
    .select()
    .match({ id })
    .single();
  return checkError(request);
}