<script lang="ts">
    import FubuHeader from '$lib/fbkwebsite/utils/FubuHeader.svelte';
    import FubuFooter from '$lib/fbkwebsite/utils/FubuFooter.svelte';
    import HP1st_WelcomeSection from '$lib/fbkwebsite/utils/HP1st_WelcomeSection.svelte'
    import HP2ndLetter from '$lib/fbkwebsite/utils/HP2nd_Letter.svelte';
    import HP3rdActivities from '$lib/fbkwebsite/utils/HP3rd_Activities.svelte';
    import TranslatedDisplay from '$lib/fbkwebsite/utils/TranslatedDisplay.svelte';

</script>

<div class="content-container overflow-x-hidden">
    <HP1st_WelcomeSection />
    <HP2ndLetter />
    <TranslatedDisplay />
    <HP3rdActivities hidden={true}/>
    <div class="bg-white p-10 hidden">
        <div class="relative w-[100vh-10rem] h-[90vh] bg-fbksite-osmanthus top-88px border-1">
            <div class="h-[10vh] border-2 justify-center items-center">
                <p class="text-10 text-fbksite-darkblue">The Kings Times</p>
            </div>
            <div class="h-[10vh] border-2 justify-center items-center">
                <p class="text-10 text-fbksite-darkblue">Today's stream starts at ...</p>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex border-2 h-[70vh] items-center justify-center">
                    <div class="rotate-journey-left border-2">
                        <ul>
                            <li>Shriakami Fubuki's YouTube Channel</li>
                            <li>Hololive Official Homepage</li>
                            <li>Shirakami Fubuki's Twitter</li>
                        </ul>
                    </div>
                </div>
                <div class="flex border-2 h-[70vh] items-center justify-center">
                    <div class="rotate-journey-right border-2">
                        <ul>
                            <li>Shirakami Temple Discord</li>
                            <li>Virtual YouTuber, Shirkaami Fubuki's Page</li>
                            <li>Unofficial hololive wiki</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>