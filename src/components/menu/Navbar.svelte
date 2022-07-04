<script>
    import Hamburger from './Hamburger.svelte'
    import Menu from './Menu.svelte'

    export let sidebar = false
</script>

<header class="flex justify-between p-2 items-center text-slate-50">
    <nav class="flex">
        <Hamburger bind:open={sidebar}/>
        <picture class="mr-3">
            <source srcset="/assets/img/quan-project.webp" type="image/webp">
            <source srcset="/assets/img/quan-project.png" type="image/png">
            <img class="h-6 sm:h-6" src="/assets/img/quan-project.png" alt="Quan Project">
        </picture>
    </nav>
    <Menu/>
</header>

<style>
    header {
        background-color: #282a36ff;
    }
</style>