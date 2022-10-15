<script>
    import Navbar from "../components/menu/Navbar.svelte";
    import Sidebar from "../components/menu/Sidebar.svelte";
    import TabsQ1v from "../components/tabs/Q1v.svelte";
    let open = false
</script>
<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<div class="py-10 sm:py-8 mt-10 sm:mb-20 w-full">
    <TabsQ1v />
</div>