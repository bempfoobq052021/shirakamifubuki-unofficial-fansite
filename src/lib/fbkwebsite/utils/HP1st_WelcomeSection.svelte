<script lang="ts">
    import cornimage from "$lib/fbkwebsite/assets/smolCorn.webp";
    import vlg_skb_01 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_01.png";
    import vlg_skb_02 from "$lib/fbkwebsite/assets/haku_sukonbu_cut_01_02.png";
    import bg_hero_webm from "$lib/fbkwebsite/videos/bg-hero.webm";
    import bg_hero_mp4 from "$lib/fbkwebsite/videos/bg-hero.mp4";

</script>

<div id="letter_topside" class="bg-fbksite-offwhite z-10 h-[120vh] w-[99vw]">
    <div class="font-serif z-15">
        <div class="absolute size-full p-[37px] z-10 bg-fbksite-offwhite ">
                <video class="absolute w-[calc(98vw-50px)] h-[calc(120vh-50px)] object-cover 
                z-5 object-[70%_0%] md:object-center" 
                playsinline loop muted autoplay id="bgvid">
                    <source src={bg_hero_webm} type="video/webm">
                    <source src={bg_hero_mp4} type="video/mp4">
                </video>
            <span class="absolute top-0 left-0 h-[50px] w-full 
            bg-fbksite-offwhite z-15"></span>
            <span class="absolute top-0 right-0 h-[120%] w-[50px] 
            bg-fbksite-offwhite z-15"></span>
            <span class="absolute bottom-[-20%] left-0 h-[50px] w-full 
            bg-fbksite-offwhite z-15"></span>
            <span class="absolute top-0 left-0 h-[120%] w-[50px] 
            bg-fbksite-offwhite z-15"></span>
        </div>
        <div class="absolute text-title left-[10vw] top-[10vh] z-15">
            <p class="montez-regular md:text-[10vh] text-[5vh]">
                Greetings From</p>
        </div>
        <div class="absolute text-title right-[15vw] md:bottom-0 bottom-0 z-15">
            <p class="montez-regular lg:text-[10vh] text-[6vh] tracking-wide text-left">
            FBKINGDOM</p>
        </div>
    </div>
</div>

<span class="absolute w-[99vw] h-[20px] z-15 bg-gradient-to-b 
from-fbksite-offwhite via-white to-fbksite-offwhite">
    
</span>

<div id="letter_inside" class="relative bg-white z-10 h-[99vh] w-[99vw]">
    <div class="text-fbksite-darkgreyblue flex absolute 
    right-[50px] top-[50px] m-3">
        <div class="relative h-[70px] stamp-border-image">
            <p class="z-10 text-[0.5rem] text-center md:mr-auto">ONE CORN</p>
            <img alt="post stamp" class="mt-[5px] stamp-image w-[35px]" 
            src={cornimage} />
        </div>
    </div>
    <div class="absolute bottom-[10%] md:bottom[30%] right-[0%] m-[10px] md:m-[20px] md:flex">
        <img alt="Village Sucorns" class="relative md:max-h-[200px] max-h-[100px] 
        -left-[20px] m-10 md:m-px" src={vlg_skb_01} />
        <img alt="Village Sucorns" class="relative md:max-h-[200px] max-h-[100px] 
        left-[20px] m-10 md:m-px" src={vlg_skb_02} />
    </div>
    <section class="p-[37px] size-full bg-fbksite-offwhite font-serif p-5">
        <div class="relative text-fbksite-darkgreyblue top-[20%] md:top-[10%]">
            <p class="xl:text-[7rem] md:text-[2.5rem] text-[2rem] xl:ml-20 ml-5 
            lavishly-yours-regular tracking-normal">
                Dear Friends around the globe,
            </p>
        </div>
        <div class="letter-content relative text-fbksite-darkgreyblue 
        top-[30%] md:top-[15%] max-w-[50%]">
            <p class="text-[1rem] leading-[1.2rem] md:leading-[3rem] md:text-[1.5rem] xl:ml-20 
            ml-5 indie-flower-regular">
                This website is a fan-made letter, for Shirakami Fubuki. 
                With the aim of archiving our adventures in and with Fubukingdom.
                The king, Shirakami Fubuki, is a kind soul to travellers like us
                - and the jokes here are great! I hope one day you can join us!
            </p>
        </div>
    </section>
</div>