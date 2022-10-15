<script>
    import Tabs from "./Tabs.svelte";
    import Links from '../links/Q1v.svelte'
    import Q1v from "../cards/Q1v.svelte";
    import QA from "../faqs/Qa-item.svelte";
    import faq from "../../data/asset-q1v-faq.json";
    // List of tab items with labels and values.
    let tabItems = [
        { label: "Sobre", value: 1 },
        { label: "FAQ", value: 2 },
        { label: "Links", value: 3 }
    ];
    // Current active tab
    let currentTab;
    let active = 0;
    const changeActive = event => {
        active = event.detail;
    };
</script>

<Tabs bind:activeTabValue={currentTab} items={tabItems} />
<div class="p-2">
    {#if 1 === currentTab}
        <Q1v />
    {/if}
    {#if 2 === currentTab}
        <h2 class="p-4 text-2xl text-center font-bold font-heading tracking-px-n
        text-amber-400 leading-none">Frequently Asked Questions</h2>
        <dl class="space-y-6 divide-y divide-amber-400">
            {#each faq as item, i}
                <QA { item } { i } {active} on:activeState="{changeActive}"/>
            {/each}
        </dl>
    {/if}
    {#if 3 === currentTab}
        <Links />
    {/if}
</div>