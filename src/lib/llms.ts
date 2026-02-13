import type { PostWithComputed } from '@/lib/posts';

export function postToMarkdown(post: PostWithComputed): string {
  const lines: Array<string> = [
    `# ${post.data.title}`,
    '',
    ...(post.data.metaDescription
      ? [`> ${post.data.metaDescription}`, '']
      : []),
    `Date: ${post.data.date.toISOString().split('T')[0]}`,
  ];

  if (post.data._computed.authors.length) {
    lines.push(
      `Authors: ${post.data._computed.authors.map((a) => a.data.name).join(', ')}`
    );
  }

  if (post.data.tags?.length) {
    lines.push(`Tags: ${post.data.tags.join(', ')}`);
  }

  lines.push('', '---', '', post.body ?? '');

  return lines.join('\n');
}
