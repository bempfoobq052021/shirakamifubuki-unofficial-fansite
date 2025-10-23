<script lang="ts">
    import cornimage from "$lib/fbkwebsite/assets/smolCorn.webp";
    import { onMount } from 'svelte';

    let { hidden } = $props();
    let addclass = $state();

    onMount(() => {
        console.log('activity component mounted');
        addclass = hidden ? "hidden" : "" ;
    })
</script>

<div class="bg-white p-10 {addclass}">
    <div class="relative w-[100vh-10rem] h-[90vh] bg-fbksite-osmanthus top-88px border-1">
        <div class="h-[10vh] border-2">
        </div>
        <div class="grid grid-rows-2 grid-cols-2">
            <div class="flex border-2 h-[40vh] items-center justify-center">
                <div class="rotate-journey-left border-2">
                    <img src={cornimage} alt="cornimage">
                    Exploring FBKINGDOM
                </div>
            </div>
            <div class="flex border-2 h-[40vh] items-center justify-center">
                <div class="rotate-journey-right border-2">
                    <img src={cornimage} alt="cornimage">
                    Meeting New Friends
                </div>
            </div>
            <div class="flex border-2 h-[40vh] items-center justify-center">
                <div class="rotate-journey-right border-2">
                    <img src={cornimage} alt="cornimage">
                    Festivals and Projects
                </div>
            </div>
            <div class="flex border-2 h-[40vh] items-center justify-center">
                <div class="rotate-journey-left border-2">
                    <img src={cornimage} alt="cornimage">
                    Translations and Writings
                </div>
            </div>
        </div>
    </div>
</div>