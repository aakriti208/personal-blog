import { getPost } from '$lib/data/posts.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) throw error(404, 'Post not found');
  return { post };
}
