<script lang="ts">
    import haku_sukonbu_01 from "$lib/fbkwebsite/assets/haku_sukonbu_01.png";
    import nyc_01 from "$lib/fbkwebsite/assets/nyc_01.jpg";
    import haku_sukonbu_cut_01_02 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_02.png";
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('activity component mounted');
    })
</script>

<div class="bg-fbksite-offwhite p-10 border-1">
    <div class="relative w-[100vh-10rem] lg:h-[90vh] object-contain">
        <div class="relative md:p-10 object-center flex items-center">
            <h1 class="lg:text-[10vh] text-[5vh] text-center">ACTIVITIES</h1>
        </div>
        <div class="grid lg:grid-cols-3 grid-row-4 lg:h-[60vh]
        pl-[4vw] lg:pl-[8vw] pr-[4vw]">
            <a href="/explore" class="border-2 items-center content-center 
            stamp-border-image justify-center bg-contain
            left-[10vw]">
                <img alt="Exploration" src={haku_sukonbu_01} />
                <p class="font-[2rem] text-black text-center">
                    Explore and Meet The Friends!
                </p>
            </a>
            <a href="/projects" class="border-2 content-center 
            stamp-border-image justify-center">
                <img alt="Exploration" src={nyc_01} />
                <p class="font-[2rem] text-black text-center">
                    FBKINGDOM Festivals and Projects Gallery
                </p>
            </a>
            <a href="/translations" class="border-2 content-center 
            stamp-border-image justify-center">
                <img alt="Exploration" src={haku_sukonbu_cut_01_02} />
                <p class="font-[2rem] text-black text-center">
                    Translations and Writings
                </p>
            </a>
        </div>
    </div>
</div>