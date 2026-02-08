<script lang="ts">
    import type { LayoutProps } from './$types.js';
	import '../../app.css';
    import { on } from 'svelte/events';
    import Navbar from '$lib/fbkwebsite/utils/navbar.svelte';

    let { data, children }: LayoutProps = $props();
</script>

{@render children()}