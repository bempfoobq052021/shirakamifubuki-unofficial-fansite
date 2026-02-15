<script lang="ts">
	import '../app.css';
	import { Drawer, Sidebar, SidebarWrapper, SidebarGroup, SidebarItem } from "flowbite-svelte";

	let isDrawerOpen = $state(false);
	let placement: "right" | "left" | "top" | "bottom" = $state("right");
    import cornimage from "$lib/fbkwebsite/assets/corn_corner_cropped.svg";
	let { children } = $props();

	import { resolve } from '$app/paths';
	const homepage_url = resolve(`/homepage`);
	const explore_url = resolve(`/explore`);
	const projects_url = resolve(`/projects`);
	const translations_url = resolve(`/translations`);


</script>
<div class="fixed z-999 right-[70vw] md:right-[30vw] h-full">
	<div class="fixed z-1000 mb-2 h-[5vh] right-[10px] top-[10px] aspect-square md:inline" 
	onclick={() => ((placement = "right"), (isDrawerOpen = true))}>
		<img src={cornimage} class="h-full w-full rounded-full bg-black"/>
	</div>

	<Drawer {placement} bind:open={isDrawerOpen} class="w-80 p-0 bg-fbksite-offwhite dark:bg-fbksite-darkblue">
		<Sidebar disableBreakpoints={true} class="bg-fbksite-offwhite dark:bg-fbksite-darkblue sidebar-custom">
			<SidebarWrapper class="overflow-y-hidden rounded-sm">
				<SidebarItem label="Top" href={homepage_url}>
				</SidebarItem>
				<SidebarItem label="About FBKINGDOM" href={explore_url}>
				</SidebarItem>
				<SidebarItem label="Projects" href={projects_url}>
				</SidebarItem>
				<SidebarItem label="Translations"href={translations_url}>
				</SidebarItem>
			</SidebarWrapper>
		</Sidebar>
	</Drawer>
</div>

{@render children()}
