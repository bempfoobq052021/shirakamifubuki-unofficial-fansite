<script lang="ts">
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
</script>

<Footer footerType="sitemap" class="bg-footer-light dark:bg-footer-dark">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">Hololive Official</FooterLink>
        <FooterLink class="mb-4" href="/">Shirakami Fubuki's Twitter</FooterLink>
        <FooterLink class="mb-4" href="/">Unofficial Hololive Wiki</FooterLink>
        <FooterLink class="mb-4" href="/">Shirakami Temple Discord</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Translation</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">FBKINGDOM Story</FooterLink>
        <FooterLink class="mb-4" href="/">Articles</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="px-4 py-6 md:flex md:items-center md:justify-between  bg-footer-light dark:bg-footer-dark">
    <FooterCopyright class="text-sm text-gray-900 sm:text-center dark:text-gray-200" href="/" by="Flowbite™" />
    <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">
      <FooterIcon href="/">
        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
    </div>
  </div>
</Footer>