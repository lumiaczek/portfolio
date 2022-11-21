<script lang="ts" context="module">
	import Modal from '$lib/Modal.svelte';
	import service from '$lib/Services/Service';
</script>

<script lang="ts">
	interface Filter {
		web: boolean;
		cheapWeb: boolean;
		hardware: boolean;
	}
	export let cena: number;
	export let filter: Filter;

	let id: number = 0;
	let modalVisible: boolean = false;

	const toggleModal = (serviceID: number) => {
		id = serviceID;
		modalVisible = !modalVisible;
	};

	$: {
		if (modalVisible === true) {
			let scrollTop: number;
			let scrollLeft: number;
			try {
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
					(window.onscroll = () => {
						window.scrollTo(scrollLeft, scrollTop);
					});
			} catch {}
		}
		if (modalVisible === false) {
			window.onscroll = function () {};
		}
	}
</script>

{#if modalVisible}
	<Modal
		{id}
		on:closeModal={() => {
			modalVisible = false;
		}}
	/>
{/if}

<main class="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 w-full overflow-hidden">
	{#each $service as serv, i (serv.id)}
		{#if !(cena < serv.cena)}
			{#if !filter.web && !filter.cheapWeb && !filter.hardware}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="card flex flex-col text-center transition-all duration-200 cursor-pointer hover:scale-105"
					id={serv.id.toString()}
					on:click={() => {
						toggleModal(serv.id);
					}}
				>
					<div class="border-purple-700 border-2 px-2 py-4 rounded-lg h-full">
						{@html serv.svg}
						<h3 class="mx-auto text-2xl text-white">{serv.name}</h3>
						<p class="font-bold text-2xl mt-3">od {serv.cena}</p>
					</div>
				</div>
			{/if}
			{#if filter.web && serv.type === 'web'}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="card flex flex-col text-center transition-all duration-200 cursor-pointer hover:scale-105"
					id={serv.id.toString()}
					on:click={() => {
						toggleModal(serv.id);
					}}
				>
					<div class="border-purple-700 border-2 px-4 py-4 rounded-lg h-full">
						{@html serv.svg}
						<h3 class="mx-auto text-2xl text-white">{serv.name}</h3>
						<p class="font-bold text-2xl mt-3">od {serv.cena}</p>
					</div>
				</div>
			{/if}
			{#if filter.cheapWeb && serv.type === 'cheapWeb'}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="card flex flex-col text-center transition-all duration-200 cursor-pointer hover:scale-105"
					id={serv.id.toString()}
					on:click={() => {
						toggleModal(serv.id);
					}}
				>
					<div class="border-purple-700 border-2 px-2 py-4 rounded-lg h-full">
						{@html serv.svg}
						<h3 class="mx-auto text-2xl text-white">{serv.name}</h3>
						<p class="font-bold text-2xl mt-3">od {serv.cena}</p>
					</div>
				</div>
			{/if}
			{#if filter.hardware && serv.type === 'hardware'}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="card flex flex-col text-center transition-all duration-200 cursor-pointer hover:scale-105"
					id={serv.id.toString()}
					on:click={() => {
						toggleModal(serv.id);
					}}
				>
					<div class="border-purple-700 border-2 px-2 py-4 rounded-lg h-full">
						{@html serv.svg}
						<h3 class="mx-auto text-2xl text-white">{serv.name}</h3>
						<p class="font-bold text-2xl mt-3">od {serv.cena}</p>
					</div>
				</div>
			{/if}
		{/if}
	{/each}
</main>
