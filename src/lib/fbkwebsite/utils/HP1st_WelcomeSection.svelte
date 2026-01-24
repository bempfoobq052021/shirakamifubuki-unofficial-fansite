<script lang="ts">
    import cornimage from "$lib/fbkwebsite/assets/smolCorn.webp";
    import vlg_skb_01 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_01.png";
    import vlg_skb_02 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_02.png";
    import bg_hero_webm from "$lib/fbkwebsite/videos/bg-hero.webm";
    import bg_hero_mp4 from "$lib/fbkwebsite/videos/bg-hero.mp4";
</script>

<div id="letter_topside" class="bg-fbksite-lightosmanthus z-10 h-[99vh] w-[99vw]">
    <div class="font-serif z-15">
        <div class="absolute size-full p-[37px] z-10 bg-fbksite-lightosmanthus">
                <video class="absolute w-[calc(98vw-50px)] h-[calc(98vh-50px)] object-cover 
                z-5 object-[70%_0%] md:object-center" 
                playsinline loop muted autoplay id="bgvid">
                    <source src={bg_hero_webm} type="video/webm">
                    <source src={bg_hero_mp4} type="video/mp4">
                </video>
            <span class="absolute top-0 left-0 h-[50px] w-full 
            bg-fbksite-lightosmanthus z-15"></span>
            <span class="absolute top-0 right-0 h-full w-[50px] 
            bg-fbksite-lightosmanthus z-15"></span>
            <span class="absolute bottom-0 left-0 h-[50px] w-full 
            bg-fbksite-lightosmanthus z-15"></span>
            <span class="absolute top-0 left-0 h-full w-[50px] 
            bg-fbksite-lightosmanthus z-15"></span>
        </div>
        <div class="absolute text-title left-[10vw] top-[5vh] z-15">
            <p class="montez-regular md:text-[10vh] text-[5vh]">
                Greetings From</p>
        </div>
        <div class="absolute text-title right-[15vw] md:bottom-[5vh] bottom-[15vh] z-15">
            <p class="montez-regular lg:text-[10vh] text-[6vh] tracking-wide text-left">
            FBKINGDOM</p>
        </div>
    </div>
</div>

<div id="letter_inside" class="relative bg-white z-10 h-[99vh] w-[99vw]">
    <div class="p-[37px] size-full bg-fbksite-lightosmanthus font-serif p-5">
        <div class="relative text-fbksite-darkgreyblue top-[30%] md:top-[10%]">
            <p class="xl:text-[7rem] md:text-[2.5rem] text-[2rem] xl:ml-20 ml-5 
            lavishly-yours-regular tracking-normal">
                Dear Friends around the globe,
            </p>
        </div>
        <div class="relative text-fbksite-darkgreyblue 
        top-[40%] md:top-[30%] max-w-[50%]">
            <p class="text-[1rem] md:text-[1.5rem] xl:ml-20 
            ml-5 indie-flower-regular">
                I'm writing this from a desk, in a face, in a city of beautiful gardens. 
                The sun is shining brightly and I'm enjoying a simple afternoon tea. 
                Our travel, blessed with enjoyment and turmoil alike,
                led us into this amazing place. The king, Shirakami Fubuki, 
                is a kind soul to travellers like us - and the food here
                is great! Hope one day you can join us here!
            </p>
        </div>
        <div class="text-fbksite-darkgreyblue flex absolute 
        right-[50px] top-[50px] m-3">
            <div class="relative h-[120px] stamp-border-image">
                <p class="z-10 text-[10px] text-center md:mr-auto">ONE CORN</p>
                <img alt="post stamp" class="mt-[25px] stamp-image w-[60px]" 
                src={cornimage} />
            </div>
            <div class="relative h-[120px] stamp-border-image">
                    <p class="z-10 text-[10px] text-center mr-auto">ONE CORN</p>
                    <img alt="post stamp" class="mt-[25px] stamp-image w-[60px]" 
                    src={cornimage} />
            </div>
        </div>
        <div class="absolute bottom-[10%] md:bottom[30%] right-[0%] m-[20px] md:m-[50px] md:flex">
            <img alt="Village Sucorns" class="relative md:max-h-[200px] max-h-[100px] 
            -left-[20px] m-10 md:m-3" src={vlg_skb_01} />
            <img alt="Village Sucorns" class="relative md:max-h-[200px] max-h-[100px] 
            left-[20px] m-10 md:m-3" src={vlg_skb_02} />
        </div>
    </div>
</div>