<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Daniel Borowski | Błąd 404</title>
</svelte:head>

<main
	class="xl:w-[90%] lg:h-[88vh] xl:mx-auto 3xl:w-[85%] flex flex-col justify-center items-center mt-10 p-6"
>
	<h2 class="text-4xl mb-4 col-span-full text-white text-center">
		<strong class="text-purple-700 font-medium">Upss...</strong> Wygląda na to że nie znalazłem twojego
		żądania.
	</h2>
	<p class="mb-[4rem] text-2xl text-purple-700 font-bold">{$page.error?.message}</p>
	<img src="/error.svg" alt="Obrazek z błędem 404" width="800" height="800" />
</main>
