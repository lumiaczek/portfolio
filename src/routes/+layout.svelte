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
		content="Profesjonalne tworzenie stron oraz aplikacji Internetowych, projektowanie oraz wdrażanie lokalnych sieci komputerowych, montaż i konserwacja systemów komputerowych."
	/>
</svelte:head>

<Navbar />
<slot />
