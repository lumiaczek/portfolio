<script context="module">
	import Projects from '$lib/Projects/Projects.svelte';
</script>

<svelte:head>
	<title>Daniel Borowski | Projekty</title>
</svelte:head>

<section
	class="xl:w-[90%] lg:h-[85vh] xl:mx-auto 3xl:w-[85%] flex flex-col xl:grid md:grid-cols-12 lg:gap-2 grid-cols-1 grid-rows-5 text-white p-6"
>
	<div class="col-start-1 col-end-6 ">
		<p class="text-3xl text-center md:text-left">Zobacz co już wykonałem</p>
		<h1 class="text-6xl text-orange-700 mb-4 font-medium text-center md:text-left">Projekty</h1>
	</div>
	<Projects />
</section>
