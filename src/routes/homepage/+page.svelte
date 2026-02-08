<script lang="ts">
    import type { PageProps } from './$types.js';
    import HP1st_WelcomeSection from '$lib/fbkwebsite/utils/HP1st_WelcomeSection.svelte'
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
    <div class="inner-borders">
        <span class="position-control-top inner-border-top"></span>
        <span class="position-control-right inner-border-right"></span>
        <span class="position-control-bottom inner-border-bottom"></span>
        <span class="position-control-left inner-border-left"></span>
    </div>
    <div class="corners">
        <span class="position-control-top border-corner corner-topleft"></span>
        <span class="position-control-right border-corner corner-topright"></span>
        <span class="border-corner corner-bottomright"></span>
        <span class="border-corner corner-bottomleft"></span>
    </div>
</div>
<div class="overflow-x-hidden bg-white">
    <HP1st_WelcomeSection />
    <TranslatedDisplay />
    <HP3rdActivities />
    <HP4th_KingsTimes />
</div>