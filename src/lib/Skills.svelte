<script lang="ts" context="module">
	import Html from './Skills/Frontend/Html.svelte';
	import Js from './Skills/Frontend/JS.svelte';
	import Svelte from './Skills/Frontend/Svelte.svelte';
	import Ts from './Skills/Frontend/TS.svelte';
	import ExpressJs from './Skills/Backend/ExpressJS.svelte';
	import Mongodb from './Skills/Backend/Mongodb.svelte';
	import Node from './Skills/Backend/Node.svelte';
	import Php from './Skills/Backend/Php.svelte';
	import Css from './Skills/Frontend/Css.svelte';
	import Tailwind from './Skills/Frontend/Tailwind.svelte';
	import Netlify from './Skills/Backend/Netlify.svelte';
</script>

<script lang="ts">
	import MySql from './Skills/Backend/MySQL.svelte';
	import Figma from './Skills/Design/Figma.svelte';
	import Gimp from './Skills/Design/Gimp.svelte';
	import Inkscape from './Skills/Design/Inkscape.svelte';

	let current: string = 'front';

	const changeCurrent = (n: string) => {
		current = n;
	};
</script>

<section
	class="xl:w-[90%] lg:h-[90vh] xl:mx-auto 3xl:w-[85%] flex flex-col xl:grid md:grid-cols-11 lg:gap-2 grid-cols-1 grid-rows-4  text-white mt-10 p-6"
>
	<div class="col-start-1 col-end-7 row-start-1">
		<p class="text-3xl text-center md:text-left">W czym jestem dobry</p>
		<h1 class="text-5xl md:text-6xl text-orange-700 font-medium text-center md:text-left">
			Moje umiejętności
		</h1>
		<div
			class="flex flex-row items-center gap-2 mb-4 justify-center md:justify-start mt-8 flex-wrap"
		>
			<button
				class="btn-about"
				class:current={current === 'front'}
				on:click={() => {
					changeCurrent('front');
				}}>Frontend</button
			>
			<button
				class="btn-about"
				class:current={current === 'back'}
				on:click={() => {
					changeCurrent('back');
				}}>Backend</button
			>
			<button
				class="btn-about"
				class:current={current === 'design'}
				on:click={() => {
					changeCurrent('design');
				}}>UI/UX Design</button
			>
		</div>
	</div>
	<div class="row-start-2 col-span-full row-span-full mt-10">
		{#if current === 'front'}
			<div class="items-center gap-6 flex lg:flex-row flex-col mb-6 ">
				<Html />
				<Css />
				<Js />
			</div>
			<div class="items-center gap-6 flex lg:flex-row flex-col">
				<Svelte />
				<Tailwind />
				<Ts />
			</div>
		{:else if current === 'back'}
			<div class="items-center gap-6 flex lg:flex-row flex-col mb-6">
				<Node />
				<Php />
				<Mongodb />
			</div>
			<div class="items-center gap-6 flex lg:flex-row flex-col">
				<ExpressJs />
				<Netlify />
				<MySql />
			</div>
		{:else if current === 'design'}
			<div class="items-center gap-6 flex lg:flex-row flex-col mb-6">
				<Figma />
				<Inkscape />
				<Gimp />
			</div>
			<div class="items-center gap-6 flex lg:flex-row flex-col" />
		{/if}
	</div>
</section>
