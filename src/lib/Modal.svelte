<script lang="ts" context="module">
	import { createEventDispatcher } from 'svelte';
	import service from '$lib/Services/Service';
</script>

<script lang="ts">
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
		class="w-full md:w-5/6 lg:w-3/4 2xl:w-1/2 h-fit text-white p-6 rounded-lg shadow bg-[#171717] mt-24"
	>
		<h3 class="flex font-medium text-2xl justify-between items-center">
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
	</div>
</div>

<svelte:window on:keydown={closeModal} />
