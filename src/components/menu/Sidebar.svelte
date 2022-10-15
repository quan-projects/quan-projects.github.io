<script>
    export let open = false
</script>

<aside class="absolute w-full h-full border-r-2 shadow-lg md:hidden" class:open>
    <nav class="p-12 text-xl text-center font-bold">
        <ul class="list-none inline-grid grid-flow-row gap-4">
            <li><a class="hover:text-red-400 hover:no-underline" href="/">Home</a></li>
            <li><a class="hover:text-red-400 hover:no-underline" href="/asset-q1v">Asset Q1v</a></li>
            <li><a class="hover:text-red-400 hover:no-underline" href="/links">Links</a></li>
        </ul>
    </nav>
</aside>

<style>
    aside {
        left: -100%;
        transition: left 0.3s ease-in-out;
        background-color: #282a36ff;
    }

    .open {
        left: 0
    }
</style>