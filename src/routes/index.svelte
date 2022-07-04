<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>

<div class="py-10 sm:py-8 mt-10 sm:mb-20 w-full">
    <QuanProject />
    <Q1v />
</div>
<script>
    import Q1v from "../components/cards/Q1v.svelte";
    import QuanProject from "../components/cards/QuanProject.svelte";
    import Navbar from "../components/menu/Navbar.svelte";
    import Sidebar from "../components/menu/Sidebar.svelte";
    let open = false
</script>