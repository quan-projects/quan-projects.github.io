<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>