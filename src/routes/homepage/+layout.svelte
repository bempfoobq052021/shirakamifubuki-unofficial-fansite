<script lang="ts">
    import type { LayoutProps } from './$types.js';
	import '../../app.css';
    import { on } from 'svelte/events';
    import Navbar from '$lib/fbkwebsite/utils/navbar.svelte';

    let { data, children }: LayoutProps = $props();

    document.addEventListener("scroll", (event) => {
        var nav = document.querySelector(".navbar-fixed-top");
        if (nav === null) {
            console.log("The value is exactly null.");
            return;
        }
        nav.classList.toggle("scrolled_below_threshold_nbar_transparency");
    });
</script>

<Navbar />

{@render children()}