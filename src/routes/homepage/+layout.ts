import type { LayoutLoad } from './$types.js';
export const prerender = 'auto';
export const trailingSlash = 'always';

export const load = (async () => {
    return {};
}) satisfies LayoutLoad;