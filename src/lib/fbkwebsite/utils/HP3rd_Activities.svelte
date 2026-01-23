<script lang="ts">
    import haku_sukonbu_01 from "$lib/fbkwebsite/assets/haku_sukonbu_01.png";
    import haku_sukonbu_cut_01_01 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_01.png";
    import nyc_01 from "$lib/fbkwebsite/assets/nyc_01.jpg";
    import haku_sukonbu_cut_01_02 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_02.png";
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('activity component mounted');
    })
</script>

<div class="bg-white p-10">
    <div class="relative w-[100vh-10rem] lg:h-[90vh] top-88px object-contain">
        <div class="relative m-10 h-[10vh] border-[3.5px] object-center flex items-center">
            <h1>OUR ACTIVITIES</h1>
        </div>
        <div class="grid lg:grid-cols-12 grid-row-4 lg:h-[80vh]
        lg:pl-[8vw] pl-[4vw] pr-[4vw] ">
            <div class="border-2 items-center content-center stamp-border-image justify-center
            lg:col-start-1 lg:col-end-3 left-[10vw]">
                <img alt="Exploration" src={haku_sukonbu_01} />
                <p class="font-[2rem] text-black text-center">
                    Exploring The Kingdom
                </p>
            </div>
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-4 lg:col-end-6">
                <img alt="Exploration" src={haku_sukonbu_cut_01_01} />
                <p class="font-[2rem] text-black text-center">
                    Meeting New Friends
                </p>
            </div>
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-7 lg:col-end-9">
                <img alt="Exploration" src={nyc_01} />
                <p class="font-[2rem] text-black text-center">
                    Festivals and Projects
                </p>
            </div>
            <div class="border-2 content-center stamp-border-image justify-center
            lg:col-start-10 lg:col-end-12">
                <img alt="Exploration" src={haku_sukonbu_cut_01_02} />
                <p class="font-[2rem] text-black text-center">
                    Translations and Writings
                </p>
            </div>
        </div>
    </div>
</div>