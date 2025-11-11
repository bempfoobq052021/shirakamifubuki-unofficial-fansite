<script>
    let { data } = $props();
</script>

<div class="overflow-x-hidden bg-image-paper bg-cover p-10">
    <div class="w-<80%>">
        <div class="w-<50%> flex justify-start text-black">
            <a href="translation/">&larr; Previous Page</a>
        </div>
        <div class="w-<50%> flex justify-end text-black">
            <a href="translation/EP.2">
                EP.2 &rarr;
            </a>
        </div>
    </div>
    <div class="w-full text-fbksite-darkblue ">
        <p class="text-[2rem] md:text-[4rem] text-center 
        fbkingdom-novel-translation font-weight-400">
            { data.post.title }
        </p>
        <br/>
        <p class="text-base md:text-xl text-center text-fbksite-darkblue">
            Original Ideas: Shirakami Fubuki</p>
        <p class="text-base md:text-xl text-center text-fbksite-darkblue">
            Writer : Kayano Niko</p>
        <p class="text-base md:text-xl text-center text-fbksite-darkblue">
            Translators: Caligula, Ruanronan, Nyan, Silver, Xyrix</p>
        <p class="text-base md:text-xl text-center text-fbksite-darkblue">
            Proofreaders: Calran, Ruanronan, Xyrik</p>
    </div>
    <div class="flex fbkingdom-novel-translation mt-10 
    items-center justify-center w-full h-full">
        <div class="md:w-[60rem] w-[90wh] p-4 overflow-y-visible overflow-x-hidden 
        text-black wrap-anywhere">
            { data.post.content }
        </div>
    </div>
</div>
