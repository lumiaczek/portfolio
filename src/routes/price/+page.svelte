<script lang="ts">
	import Service from '$lib/Services/Service.svelte';

	let price: number = 3000;
	let service: string = 'Rodzaj usługi';

	let filter = {
		web: false,
		cheapWeb: false,
		hardware: false
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Cennik</title>
</svelte:head>

<section class="xl:w-[90%] xl:mx-auto 3xl:w-[85%] flex flex-col text-white p-6">
	<div class="">
		<p class="text-3xl text-center md:text-left mb-1">Sprawdź ceny moich usług</p>
		<h1 class="text-6xl text-purple-700 font-medium text-center md:text-left">Cennik</h1>
	</div>
	<div class="flex xl:flex-row flex-col h-full mt-6">
		<div
			class="flex flex-col h-full p-4 bg-[#171717] w-full xl:w-[30%] 2xl:w-[25%] rounded-lg mb-4 xl:mb-0 mr-6"
		>
			<p class="text-2xl">Filtry</p>
			<div class="flex flex-row justify-between items-center">
				<p class="text-sm mb-2 mt-6">Cena</p>
				<p class="text-sm mb-2 mt-6">{`${price} zł`}</p>
			</div>
			<div class="flex flex-row items-center justify-center gap-4 w-full">
				<input
					id="range"
					type="range"
					min="100"
					step="10"
					max="3000"
					class="w-full h-2 rounded-full cursor-pointer text-center slider"
					bind:value={price}
				/>
			</div>
			<p class="mt-4 text-xl">Rodzaj usługi</p>
			<div class="mt-1 flex flex-col">
				<div class="flex flex-row items-center">
					<input
						type="checkbox"
						bind:checked={filter.web}
						class="w-5 h-5 appearance-none border-2 border-[#171717] rounded bg-white mr-1 checked:bg-purple-700"
						id="web"
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<p
						class="text-sm cursor-pointer"
						on:click={() => {
							filter.web = !filter.web;
						}}
					>
						Aplikacje internetowe
					</p>
				</div>
				<div class="flex flex-row items-center mt-1">
					<input
						type="checkbox"
						bind:checked={filter.cheapWeb}
						class="w-5 h-5  appearance-none border-2 border-[#171717] rounded bg-white mr-1 checked:bg-purple-700"
						id="site"
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<p
						class="text-sm cursor-pointer"
						on:click={() => {
							filter.cheapWeb = !filter.cheapWeb;
						}}
					>
						Wiyzytówki
					</p>
				</div>
				<div class="flex flex-row items-center mt-1">
					<input
						type="checkbox"
						bind:checked={filter.hardware}
						class="w-5 h-5 appearance-none border-2 border-[#171717] rounded bg-white mr-1 checked:bg-purple-700"
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<p
						class="text-sm cursor-pointer"
						on:click={() => {
							filter.hardware = !filter.hardware;
						}}
					>
						Usługi informatyczne
					</p>
				</div>
			</div>
		</div>
		<Service cena={price} {filter} />
	</div>
</section>
