<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem } from "flowbite-svelte";
  import favicon from "$lib/fbkwebsite/assets/smolCorn.webp";

  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-gray-900 bg-green-700 md:bg-transparent md:text-grey-900 md:dark:text-white dark:bg-grey-200 md:dark:bg-transparent";
  let nonActiveClass = "text-gray-500 hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-grey-800 dark:text-grey-400 md:dark:hover:text-white dark:hover:bg-gray-200 dark:hover:text-white md:dark:hover:bg-transparent";
</script>

<Navbar fluid={true} class="sticky start-0 top-0 px-2 py-2.5 sm:px-4 bg-navbar-light dark:bg-navbar-dark flex">
    <NavBrand href="/" class="text-gray-800 dark:text-white">
        <img src={favicon} class="me-3 h-6 sm:h-9" alt="Fansite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap">Fansite!</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl} classes={{ active: activeClass, nonActive: nonActiveClass }} class="order-1">
        <NavLi href="/" class="">Home</NavLi>
        <NavLi href="/" class="">Translations</NavLi>
    </NavUl>
    <div class="flex md:order-2">
        
    </div>
</Navbar>