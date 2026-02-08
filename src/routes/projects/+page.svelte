<script lang="ts">
    import type { PageProps } from './$types.js';
    import kurokami_image from "$lib/fbkwebsite/assets/kurokami natsuiromatsuri 1202227787341299712.png";
    import burinyan_image from "$lib/fbkwebsite/assets/parufeito_burinyan_114553968_p0_web_edit_trsp.webp";
    import naila_image from "$lib/fbkwebsite/assets/INUTOBI21 1976254734580482524.webp";
    import washigayurusou_image from "$lib/fbkwebsite/assets/washigayurusou lgPBZsWN9Bw.webp";
    import oruyanke_image from "$lib/fbkwebsite/assets/oruyanke.png";
    import miteiru_image from "$lib/fbkwebsite/assets/miteiru.png";
    import sukonbu_image from "$lib/fbkwebsite/assets/sukon.png";
    import yukkuri_image from "$lib/fbkwebsite/assets/yukkuri.png";
    import header_image from "$lib/fbkwebsite/assets/syeimu fbkingdom explore 1857357636351778831.jpg";

    let { data }: PageProps = $props();
</script>

<div class="min-h-screen bg-fbksite-offwhite">

    <div class=""> 
        <!-- Header Image - 30% viewport height -->
        <header class="h-[39vh] relative overflow-hidden">
        <img 
            src="{header_image}"
            alt="Header landscape"
            class="w-full h-full object-cover object-[0% 20%]"
        />
        </header>
    </div>
    
    <h1 class="width-full text-center text-[10vh] text-fbksite-darkgreyblue"> Characters </h1>

    <!-- Content Sections -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Section 1 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="space-y-4">
            <h2 class="text-3xl">Chaos Choir</h2>
            <div class="col-md-8 ml-auto mr-auto">
                <p class="indent-2">
                    In the footsteps of our favorite artist, there's always 
                    an interest in singing and other musical arts in our group.
                    That interest culminated in The Chaos Choir, a virtual choir
                    involving members of our discord group. 
                </p>
                <p class="indent-2">
                    
                </p>
            </div>
        </div>
        <div class="h-80 overflow-hidden rounded-lg">
            <img
                src="{sukonbu_image}"
                alt="Modern workspace"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 2 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="h-80 overflow-hidden hidden rounded-lg order-2 md:order-1 hidden md:block">
            <img 
                src="{oruyanke_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
        <div class="space-y-4 order-1 md:order-2">
            <h2 class="text-3xl">Oruyanke</h2>
            <p>
                Oruyanke <strong>(おるやんけ) </strong>are bamboo shoots with Fubuki's tail and ears.
                The name very roughly means, "They're there!" in Kansai dialect, 
                referring to how bamboo grows in many places and conditions.
                <br><br>
                The mascot originated sometime during or before September 2018, 
                making it one of, if not the oldest mascots Fubuki has.
                Oruyanke also made an appearance in Azur Lane, 
                being a part of Fubuki's character in it.
                <br><br>
                Oruyanke is part of FBKINGDOM's citizen.
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg block order-1 md:order-2 md:hidden">
            <img
                src="{oruyanke_image}"
                alt="Modern workspace"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 3 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="space-y-4">
            <h2 class="text-3xl">Miteiru</h2>
            <p>
                Miteiru <strong>(ミテイル) </strong> 
                is a mascot that was 
                <a href="https://twitter.com/shirakamifubuki/status/1315217059257622530">
                    <strong>introduced shortly after her birthday in 2020.</strong>
                </a> 
                The mascot fittingly has a tie resembling her third birthday outfit, 
                and also has a similar tail to Fubuki's.
                <br><br>
                The name means "see" or "watch," and it is said to be able to stretch and grow in various ways. 
                Alongside that, it is very soft, sticks to the ceiling, and doesn't blink. 
                It has also been revealed that the miteiru is edible and apparently, 
                <a href="https://www.youtube.com/watch?v=H-RN8x-NFhg&amp;t=7292s">
                    <strong>delicious.</strong>
                </a>
                <br><br>
                Smaller Miteiru is also part of FBKINGDOM's citizen as a commonner.
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg">
            <img 
                src="{miteiru_image}"
                alt="something"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 4 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="h-80 overflow-hidden rounded-lg order-2 md:order-1 hidden md:block">
            <img 
                src="{yukkuri_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
        <div class="space-y-4 md:order-2">
            <h2 class="text-3xl">Fubuzilla</h2>
            <p>
                Fubuzilla <strong>(フブラ/Fubura) </strong> is a kaiju variation of Fubuki, 
                which can shoot beams from its mouth. 
                It first appeared in a <a href="https://www.youtube.com/watch?v=ljZwKRVrMps">
                    <strong> Holo no Graffiti</strong>
                </a> episode. 
                The name is a fairly obvious combination of "Fubuki" and "Godzilla."
                <br><br>
                Fubuzilla is also part of FBKINGDOM's citizen as a commonner.
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg order-1 md:order-2 block md:hidden">
            <img 
                src="{yukkuri_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 5 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="space-y-4">
            <h2 class="text-3xl">Kurokami Fubuki</h2>
            <p>
                Kurokami Fubuki <strong>(黒上フブキ) </strong> is a roommate of Shirakami Fubuki. 
                She contrasts with Shirakami in many ways, 
                such as having a dark color palette, a lower voice, 
                and a more aggressive personality.
                She tends to think of the viewers as servants instead of friends, 
                though it doesn't appear to trouble anybody. 
                <br><br>
                Her birthday is on September 6, being the day before her "debut" on September 7.
                A lot of people enjoy her appearances due to their uncommon nature, among other things.
                <br><br>
                Her role in FBKINGDOM is the Captain of The Guard.
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg">
            <img 
                src="{kurokami_image}"
                alt="something"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 6 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="h-80 overflow-hidden rounded-lg order-2 md:order-1 hidden md:block">
            <img 
                src="{burinyan_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
        <div class="space-y-4 md:order-2">
            <h2 class="text-3xl">White Prinyan</h2>
            <p>
                White Prinyan <strong>(ホワイトブリニャン / Howaito Burinyan ) </strong> is a catty friend of Fubuki. 
                She used to go around visiting other hololive members when they're doing faux host club streams, 
                but has since been jailed for public nuisance and bringing chaos to others streams. Apparently she's 
                pretty smart and powerful despite her silly look, and have escaped her jail numerous time.
                <br> <br>
                She can be found visiting other hololive members in special moments, like Valentine's day and White Day.
                She first appeared in a <a href="https://www.youtube.com/watch?v=JG48VfeF5tQ"><strong>Okayu's Faux Host Bar</strong></a>. 
                The name is a portmanteau of "White Princess" and "Nyan".
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg order-1 md:order-2 block md:hidden">
            <img 
                src="{burinyan_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 7 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="space-y-4">
            <h2 class="text-3xl">Naila</h2>
            <p>
                Naila is the Queen of the Underworld of FBKGINDOM. She's a very powerful monarch who made the Underworld 
                into a place for containing and healing the souls of the dead before they can reincarnate back into the world.
                She's also the host and the coordinator for FBKINGDOM Halloween Night event, where the dead briefly reunite with the living.
                <br> <br>
                She is strict and would not hesitate to use physical force to discipline her unruly subjects. 
                Hinted in the story is her powerful magical ability as she was the first to hold back the soul-crushing force of the 
                torrent of the Underworld and creating a city where the torrent was. She's usually pretty busy but bored.
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg">
            <img 
                src="{naila_image}"
                alt="something"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    <!-- Section 8 -->
    <section class="p-2 m-1 md:mb-16 border-[3px] border-solid border-fbksite-osmanthus 
    grid md:grid-cols-2 gap-8 items-center text-fbksite-darkgreyblue">
        <div class="h-80 overflow-hidden rounded-lg order-2 md:order-1 hidden md:block">
            <img 
                src="{washigayurusou_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
        <div class="space-y-4 md:order-2">
            <h2 class="text-3xl">Forgiving Dude</h2>
            <p>
                Forgiving Dude<strong>(わしがゆるそう/Washigayurusou) </strong> that started out as a voice in Fubuki's head.
                Recently <a href="https://www.youtube.com/watch?v=2DLVTOxyr_M">it manifested</a> as an standalone entity in FBKINGDOM, 
                portrayed as a physically powerful entity with a musical sensibility.
                <br><br>
                It first appeared in a <a href="https://www.youtube.com/watch?v=lgPBZsWN9Bw"><strong> Holo no Graffiti</strong></a> episode. 
                Other names include "KING", "That weird thing".
            </p>
        </div>
        <div class="h-80 overflow-hidden rounded-lg order-1 md:order-2 block md:hidden">
            <img 
                src="{washigayurusou_image}"
                alt="3rd"
                class="w-full h-full object-contain"
            />
        </div>
    </section>

    </main>
</div>