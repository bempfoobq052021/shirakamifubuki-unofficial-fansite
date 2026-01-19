<script lang="ts">
    import type { PageProps } from './$types.js';
    import HP1st_WelcomeSection from '$lib/fbkwebsite/utils/HP1st_WelcomeSection.svelte'
    import HP2ndLetter from '$lib/fbkwebsite/utils/HP2nd_Letter.svelte';
    import TranslatedDisplay from '$lib/fbkwebsite/utils/TranslatedDisplay.svelte';
    import HP4th_KingsTimes from '$lib/fbkwebsite/utils/HP4th_KingsTimes.svelte';
    import HP3rdActivities from '$lib/fbkwebsite/utils/HP3rd_Activities.svelte';

    let { data }: PageProps = $props();
</script>

<!-- <img class="site-overlay bg-no-repeat" alt=""/> -->

<div id="frames">
    <div class="borders">
        <span class="position-control-top border-top"></span>
        <span class="position-control-right border-right"></span>
        <span class="position-control-bottom border-bottom"></span>
        <span class="position-control-left border-left"></span>
    </div>
    <div class="corners">
        <span class="position-control-top border-corner corner-topleft"></span>
        <span class="position-control-right border-corner corner-topright"></span>
        <span class="border-corner corner-bottomright"></span>
        <span class="border-corner corner-bottomleft"></span>
    </div>
</div>
<div class="overflow-x-hidden bg-white">
<!--    <div class="envelope-wrapper">
        <div class="wrapper">
            <div class="lid one"></div>
            <div class="lid two"></div>
            <div class="envelope"></div>
            <div class="letter letter-right">
                <p>Right</p>
            </div>
            <div class="letter letter-left">
                <p>Welcome FBKINGDOM!</p>
            </div>
        </div>
    </div>
    <div>
        <div class="front w-[100vh-10rem] h-[100vh] bg-fbksite-osmanthus animation-go-up">
        </div>
        <div class="back w-[100vh-10rem] h-[100vh] bg-white animation-drop-and-open-letter">
        </div>
    <div class="back w-[100vh-10rem] h-[100vh] bg-cyan animation-drop-and-open-letter">
        </div>
        <div class="back w-[100vh-10rem] h-[100vh] bg-blue animation-drop-and-open-letter">
        </div> 
    </div>-->
    <HP1st_WelcomeSection />
    <TranslatedDisplay />
    <HP3rdActivities />
    <HP4th_KingsTimes />
</div>