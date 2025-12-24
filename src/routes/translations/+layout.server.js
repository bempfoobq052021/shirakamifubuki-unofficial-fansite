import { posts } from './tld.js';

export function load() {
	return {
		package: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			prev: post.prev,
			next: post.next
		}))
	};
}