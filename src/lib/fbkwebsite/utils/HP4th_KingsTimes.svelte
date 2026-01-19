<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        console.log('activity component mounted');
    })
</script>

<div class="bg-white p-10">
    <div class="relative w-[100vh-10rem] h-[90vh] top-88px border-1">
        <div class="h-[10vh] mb-30 flex w-full justify-center items-center">
            <p class="xl:text-[9rem] text-[3rem] text-fbksite-darkblue">The Kings Times</p>
        </div>
        <div class="grid xl:grid-cols-2">
            <div class="border-2 flex justify-center w-full xl:m-5 mb-5 shrink">
                <p class="xl:text-[3.5rem] text-[2.2rem] text-center col-start-1 col-end-2 text-fbksite-darkblue"> FBKINGDOM NEWS </p>
            </div>
            <p class="border-2 xl:m-5 mb-5 w-full xl:col-start-1 xl:col-end-1 xl:text-[2rem] text-[1rem] text-center text-fbksite-darkblue">
                Fubuki's next stream starts at <br>
                -- No Schedule Announced --
            </p>
            <div class="border-2 xl:m-5 mb-5 w-full flex flex-wrap grid-row-3 justify-center mb-10 text-fbksite-darkblue">
                <p class="w-full xl:text-[2rem] text-[1rem] text-center">Her latest post (Update every 9AM, 2PM, and 8PM): </p>
                <div class="xl:text-[1rem] text-[0.8rem]">
                    <p class="ml-3 text-center">
                        おつこん！今回も無事に解体！！！<br>
                        UMAさん…その正体は本当にUMAなのか！？<br>
                        最後の天元様はなんなんだ…次回は辺獄へ…<br>
                        もっとっと知りたいことが沢山だ！！！！！！
                    </p>
                    <br>
                    <p class="ml-3 text-center">
                        Translation:
                        おつこん！今回も無事に解体！！！<br>
                        UMAさん…その正体は本当にUMAなのか！？<br>
                        最後の天元様はなんなんだ…次回は辺獄へ…<br>
                        もっとっと知りたいことが沢山だ！！！！！！
                        
                    </p>
                </div>
            </div>
            <div class="flex xl:col-start-2 xl:col-end-2 xl:row-start-1 xl:row-end-5 items-center justify-center">
                <ul class="">
                    <li class="text-wrap">Shriakami Fubuki's YouTube Channel</li>
                    <li class="text-wrap">Hololive Official Homepage</li>
                    <li class="text-wrap">Shirakami Fubuki's Twitter</li>
                    <li class="text-wrap">Shirakami Temple Discord</li>
                    <li class="text-wrap">Virtual YouTuber, Shirkaami Fubuki's Page</li>
                    <li class="text-wrap">Unofficial hololive wiki</li>
                </ul>
            </div>
        </div>
    </div>
</div>