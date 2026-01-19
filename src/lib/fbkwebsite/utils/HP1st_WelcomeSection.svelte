<script lang="ts">
    import cornimage from "$lib/fbkwebsite/assets/smolCorn.webp";
    import { animate, utils, onScroll } from 'animejs';

	import { onMount } from 'svelte';
    onMount ( () => {
        const [ container ] = utils.$('.scroll-container');
        const debug = true;
        //Query DOM for trigger and target objects
        const letter_inside = document.getElementById("letter_inside");

        //Do Animation Here

    });
</script>

<div id="letter_topside" class="bg-white z-10 h-[100vh] w-[100vw]">
    <div class="m-[37px] h-[calc(100vh-90px)] w-[calc(100vw-90px)]
    grid grid-cols-2 grid-rows-2 gap-4 auto-rows-auto
    bg-image-fbkingdom-vista bg-cover bg-center font-serif">
        <div class="text-fbksite-darkgreyblue grid items-start 
        justify-items-start row-start-1">
            <p class="lavishly-yours-regular md:text-[10vh] text-[5vh] ml-[5vw]">
                Greetings From
            </p>
        </div>
        <div class="col-start-2 row-start-2 grid items-end justify-items-end-safe">
            <p class="text-fbksite-darkgreyblue alice-bold lg:text-[10vh] 
            md:text-[7vh] sm:text-[5vh] text-[3vh] tracking-wide text-left mr-[5vw]">
            FBKINGDOM
        </p>
        </div>
    </div>
</div>

<div id="letter_inside" class="relative bg-white z-10 h-[100vh] w-[100vw]">
    <div class="m-[37px] h-[calc(100vh-90px)] w-[calc(100vw-90px)]
    grid xl:grid-cols-12 xl:grid-rows-20 grid-cols-4 
    auto-rows-auto gap-x-5 gap-y-5 bg-fbksite-lightosmanthus font-serif p-5">
        <div class="text-fbksite-darkgreyblue flex xl:items-start items-start 
        xl:col-start-1 xl:row-start-3 xl:col-end-8 xl:row-end-5
        col-start-1 col-end-4 row-start-2 row-end-3">
            <p class="xl:text-[4rem] md:text-[2.5rem] text-[2rem] xl:ml-20 ml-5 
            lavishly-yours-regular tracking-normal">
                Dear Friends around the globe,
            </p>
        </div>
        <div class="text-fbksite-darkgreyblue flex items-start 
        xl:col-start-1 xl:col-end-7 xl:row-start-7 xl:row-end-20
        col-start-1 col-end-3 row-start-3 row-end-8">
            <p class="2xl:text-[1.6rem] xl:text-[1.2rem] xl:ml-20 md:text-[1rem] 
            text-[0.6rem] ml-5 indie-flower-regular">
                I'm writing this from a desk, in a face, 
                in a city of beautiful gardens. The sun
                is shining brightly and I'm enjoying 
                a simple afternoon tea. Our travel, 
                blessed with enjoyment and turmoil alike,
                led us into this amazing place. The king, 
                Shirakami Fubuki, is a kind soul even 
                to travellers like us - and the food here
                is great! Hope one day you can join us here!
            </p>
        </div>
        <div class="text-fbksite-darkgreyblue flex absolute right-[50px] top-[50px] m-3">
            <div class="relative h-[120px] stamp-border-image">
                <figure>
                    <p class="z-10 text-[10px] text-center md:mr-auto">
                        ONE CORN
                    </p>
                    <img alt="post stamp" class="mt-[25px] stamp-image w-[60px]" 
                    src={cornimage} />
                </figure>
            </div>
            <div class="relative h-[120px] stamp-border-image">
                    <p class="z-10 text-[10px] text-center mr-auto">
                        ONE CORN
                    </p>
                    <img alt="post stamp" class="mt-[25px] stamp-image w-[60px]" 
                    src={cornimage} />
            </div>
        </div>
    </div>
</div>