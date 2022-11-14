<script context="module">
	import Navbar from '$lib/Navbar.svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
</script>

<script lang="ts">
	import '../app.css';

	beforeNavigate(() => {
		document.documentElement.style.scrollBehavior = 'auto';
	});
	afterNavigate(() => {
		document.documentElement.style.scrollBehavior = '';
	});
</script>

<svelte:head>
	<meta
		name="description"
		content="Daniel Borowski, strona oferująca usługi informatyczne w tym tworzenie aplikacji oraz stron internetowych i usługi informatyczne"
	/>
</svelte:head>

<Navbar />
<slot />
