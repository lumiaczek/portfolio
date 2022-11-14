<script context="module">
	import Hero from '$lib/Hero.svelte';
	import Me from '$lib/Benefits.svelte';
	import Offer from '$lib/Offer.svelte';
</script>

<script lang="ts">
	let showForm: boolean = false;

	const showContactForm = () => {
		showForm = !showForm;
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Profesjonalne aplikacje internetowe</title>
</svelte:head>

<Hero />
<Offer />
<Me />
