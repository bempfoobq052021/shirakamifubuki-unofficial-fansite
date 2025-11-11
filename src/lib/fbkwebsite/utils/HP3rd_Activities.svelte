<script lang="ts">
    import cornimage from "$lib/fbkwebsite/assets/smolCorn.webp";
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('activity component mounted');
    })
</script>

<div class="bg-white p-10">
    <div class="relative w-[100vh-10rem] lg:h-[90vh] top-88px 
    border-1 object-contain">
        <div class="h-[10vh] border-2">
        </div>
        <div class="grid lg:grid-cols-12 grid-row-4 lg:h-[80vh]
        lg:pl-[8vw] pl-[4vw] pr-[4vw] ">
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-1 lg:col-end-3 left-[10vw]">
                <div class="rotate-journey-left border-2 object-contain">
                    <img class="object-contain" src={cornimage} alt="cornimage">
                </div>
                <p class="font-[2rem] text-black text-center">
                    Exploring FBKINGDOM
                </p>
            </div>
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-4 lg:col-end-6">
                <div class="rotate-journey-left border-2 object-contain">
                    <img class="object-contain" src={cornimage} alt="cornimage">
                </div>
                <p class="font-[2rem] text-black text-center">
                    Meeting New Friends
                </p>
            </div>
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-7 lg:col-end-9">
                <div class="rotate-journey-left border-2 object-contain">
                    <img class="object-contain" src={cornimage} alt="cornimage">
                </div>
                <p class="font-[2rem] text-black text-center">
                    Festivals and Projects
                </p>
            </div>
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-10 lg:col-end-12">
                <div class="rotate-journey-left border-2 object-contain">
                    <img class="object-contain" src={cornimage} alt="cornimage">
                </div>
                <p class="font-[2rem] text-black text-center">
                    Translations and Writings
                </p>
            </div>
        </div>
    </div>
</div>