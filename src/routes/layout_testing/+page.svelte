<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
</script>

<div class="w-[100vw] h-[100vh] flex justify-center items-center bg-white">
    <div class="relative w-[120px] h-[120px] bg-blue-200">
        <div class="absolute w-[100px] h-[161px] bg-red-500 right-[75px] -bottom-[20px] -rotate-8">
        </div>
        <div class="absolute w-[161px] h-[100px] bg-yellow-400 left-[25px] top-[5px] rotate-12">
        </div>
    </div>
</div>