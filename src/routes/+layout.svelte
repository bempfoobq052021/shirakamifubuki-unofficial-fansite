<script lang="ts">
	import '../app.css';
	import { Drawer, Sidebar, SidebarWrapper, SidebarGroup, SidebarItem } from "flowbite-svelte";
	let isDrawerOpen = $state(false);
	let placement: "right" | "left" | "top" | "bottom" = $state("right");
    import cornimage from "$lib/fbkwebsite/assets/corn_corner_cropped.svg";
	let { children } = $props();
</script>
<div class="fixed z-999 right-[70vw] md:right-[30vw] h-full">
	<div class="fixed z-1000 mb-2 h-[5vh] right-[10px] top-[10px] aspect-square md:inline" 
	onclick={() => ((placement = "right"), (isDrawerOpen = true))}>
		<img src={cornimage} class="h-full w-full rounded-full bg-black"/>
	</div>

	<Drawer {placement} bind:open={isDrawerOpen} class="w-80 p-0 bg-fbksite-offwhite dark:bg-fbksite-darkblue">
		<Sidebar disableBreakpoints={true} class="bg-fbksite-offwhite dark:bg-fbksite-darkblue sidebar-custom">
			<SidebarWrapper class="overflow-y-hidden rounded-sm">
				<SidebarItem label="Top" href="/homepage">
				</SidebarItem>
				<SidebarItem label="About" href="/explore">
				</SidebarItem>
				<SidebarItem label="Projects" href="/projects">
				</SidebarItem>
				<SidebarItem label="Translations"href="/translations">
				</SidebarItem>
				<SidebarItem label="Contact" href="/contacts">
				</SidebarItem>
			</SidebarWrapper>
		</Sidebar>
	</Drawer>
</div>

{@render children()}
