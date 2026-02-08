<script>
    import { page } from '$app/stores'; // SvelteKit store to track the current page

    // Define your navigation links
    const navItems = [
      { name: 'Home', route: '/' },
      { name: 'About', route: '/about' },
      { name: 'Settings', route: '/settings' },
    ];
</script>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #333;
        color: white;
        padding: 0.5rem 1rem;
    }

    .logo a {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
       margin-left: 1rem;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
    }

    a.active {
       border-bottom: 2px solid #4CAF50;
    }
</style>