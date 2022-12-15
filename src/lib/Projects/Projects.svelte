<script context="module">
	import projects from './Projects';
	import { fly } from 'svelte/transition';
</script>

<script lang="ts">
	let position = 0;

	$: {
		if (position == $projects.length) {
			position = 0;
		}
	}

	const moveUp = () => {
		position++;
	};
	const moveDown = () => {
		if (position === 0) {
			return;
		}
		position--;
	};
</script>

<section
	class="lg:grid p-4 grid-cols-12 col-start-1 grid-rows-3 col-end-13 row-start-2 row-span-full w-full border-2 border-blue-700 gap-2 rounded-xl"
>
	<button
		class="rounded-xl text-2xl text-white bg-blue-700 bg-opacity-25 text-center cursor-pointer"
		on:click={moveDown}
		>&#8592;
	</button>
	<button
		class="rounded-xl text-2xl text-white bg-blue-700 bg-opacity-25 text-center cursor-pointer"
		on:click={moveUp}
	>
		&#8594;
	</button>
	<img
		src="/{$projects[position].imgUrl}"
		alt="Obrazek strony hydrobar"
		class="w-full h-full col-start-1 col-end-10 rounded-xl row-start-1 row-span-full"
	/>
	<div class="rounded-xl col-start-10 col-end-13 z-30 row-start-1 row-span-full bg-[#171717] p-4">
		<h2>{$projects[position].title}</h2>
		<p class="text-xl text-center">
			{$projects[position].opis}
		</p>
	</div>
</section>
