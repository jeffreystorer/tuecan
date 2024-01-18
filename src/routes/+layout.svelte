<script>
    export let data;
    import Hero from '$lib/Hero.svelte';
    import NavBar from '$lib/NavBar.svelte'
</script>

<main>
    <Hero />
    <NavBar data={data}/>
    <slot />
</main>