<script lang="ts" context="module">
	import Bio from '$lib/About/Bio.svelte';
	import Edu from '$lib/About/Edu.svelte';
	import Exp from '$lib/About/Exp.svelte';
</script>

<script lang="ts">
	let current: string = 'bio';

	const changeCurrent = (n: string) => {
		current = n;
	};
</script>

<section
	class="xl:w-[90%] lg:h-[90vh] xl:mx-auto 3xl:w-[85%] flex flex-col xl:grid md:grid-cols-12 lg:gap-2 grid-cols-1 grid-rows-2 text-white mt-6 p-6"
>
	<div class="col-start-1 col-end-6 row-span-2 ">
		<p class="text-3xl text-center md:text-left">Kilka słów</p>
		<h1 class="text-6xl text-purple-700 mb-4 font-medium text-center md:text-left">O mnie</h1>
		<div class="flex flex-row items-center gap-2 mb-4 justify-center md:justify-start">
			<button
				class="btn-about"
				class:current={current === 'bio'}
				on:click={() => {
					changeCurrent('bio');
				}}>Bio</button
			>
			<button
				class="btn-about"
				class:current={current === 'exp'}
				on:click={() => {
					changeCurrent('exp');
				}}>Doświadczenie</button
			>
			<button
				class="btn-about"
				class:current={current === 'edu'}
				on:click={() => {
					changeCurrent('edu');
				}}>Szkoła</button
			>
		</div>
		{#if current === 'bio'}
			<Bio />
		{:else if current === 'exp'}
			<Exp />
		{:else if current === 'edu'}
			<Edu />
		{/if}
	</div>

	<img
		src="/hero2.svg"
		alt=""
		class="col-start-7 col-span-5 row-span-2 w-full sm:w-1/2 md:hidden xl:w-full xl:inline mt-10 mx-auto xl:m-0"
	/>
</section>
