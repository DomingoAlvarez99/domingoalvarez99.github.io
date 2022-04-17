import { escapeSlashes } from '@/mixins/utils';

const findPosts = async () => {
  const path = require('path');

  const context = await require.context('@/content', true, /\.md$/);

  return await context.keys().map((key) => {
    return {
      ...context(key),
      path: `/${escapeSlashes(path.normalize(key.replace('.md', '')))}`,
    };
  });
};

const posts = findPosts();

export { posts };

export const findPost = async (path) => {
  return await require(`@/content${path}.md`);
};
