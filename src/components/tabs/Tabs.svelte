<script>
    import { onMount } from "svelte";

    export let items = [];
    export let activeTabValue = 0;

    onMount(() => {
        // Set default tab value
        if (Array.isArray(items) && items.length && items[0].value) {
            activeTabValue = items[0].value;
        }
    });

    const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul class="flex flex-wrap border-b border-purple-800 uppercase font-bold">
    {#if Array.isArray(items)}
        {#each items as item}
            <li class="">
                <span on:click={handleClick(item.value)}
                      class="inline-block rounded-t-md py-2 px-4 text-sm select-none
                      text-center{activeTabValue === item.value ? ' bg-purple-800 cursor-default' : ' hover:text-red-400 cursor-pointer'}">{item.label}</span>
            </li>
        {/each}
    {/if}
</ul>