<script lang="ts" context="module">
	import { createEventDispatcher } from 'svelte';
	import service from '$lib/Services/Service';
</script>

<script lang="ts">
	import Service from './Services/Service.svelte';

	const dispatch = createEventDispatcher();

	export let id: number;

	const closeModal = (event: any) => {
		if (event.code === 'Escape') {
			dispatch('closeModal');
		}
	};
</script>

<div
	class="fixed top-0 left-0 w-screen h-full z-50 bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg flex justify-center"
>
	<div
		class="w-full md:w-5/6 lg:w-3/4 2xl:w-1/2 h-fit text-white p-6 rounded-xl shadow bg-[#171717] mt-24"
	>
		<div class="border-2 pb-6 rounded-xl border-purple-700 border-opacity-25">
			<h3
				class="flex font-medium text-2xl justify-between items-center p-4 rounded-t-xl bg-purple-700 bg-opacity-25"
			>
				{$service[id - 1].name}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6 fill-black cursor-pointer"
					preserveAspectRatio="xMidYMid meet"
					on:click={() => {
						dispatch('closeModal');
					}}
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256s114.6 256 256 256zm-81-337c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
					/></svg
				>
			</h3>
			<div class="mt-3 px-4">
				<p class="text-lg text-center">
					{$service[id - 1].opis}
				</p>
				<h4 class="text-4xl mt-4 text-center font-bold">od {$service[id - 1].cena}zł</h4>
				<p class="text-center mt-4 text-2xl font-medium">Co otrzymujesz po wyborze tej usługi:</p>
				<ul class="list-disc text-center mt-2 space-y-1">
					{#each $service[id - 1].punkty as point}
						<li>{point}</li>
					{/each}
				</ul>
				<div class="flex flex-row justify-center">
					<button class="px-8 py-2 mx-auto bg-purple-700 bg-opacity-25 mt-4 rounded-xl text-lg"
						>Skontaktuj się</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<svelte:window on:keydown={closeModal} />
