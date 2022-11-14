<script context="module">
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
</script>

<main class="w-full background">
	<section
		class="w-full grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 lg:gap-2 text-white items-center xl:w-[90%] xl:mx-auto 3xl:w-[85%] lg:h-[90vh] lg:p-6"
	>
		<div
			class="lg:col-start-1 lg:col-end-8 lg:row-span-full mx-auto lg:mx-0 text-center md:text-left mt-12 lg:mt-0 space-y-1"
		>
			<p class="text-3xl md:text-4xl">Cześć,</p>
			<h1 class="text-4xl md:text-6xl">Jestem <strong class="text-purple-700">Daniel.</strong></h1>
			<h2 class="text-2xl md:text-3xl">Tworzę profesjonalne strony internetowe.</h2>
			<div class="">
				<button
					class="mt-8 btn-hero w-fit text-center lg:px-6 lg:py-4 relative group overflow-hidden"
					on:click={() => {
						goto('/contact');
					}}
				>
					<span
						class="absolute group-hover:w-0 transition-all w-full ease-in duration-200 bg-purple-700 h-full top-0 left-0"
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 md:w-8 md:h-8 mb-1 mr-2 fill-white inline my-auto relative"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 512 512"
						><path
							fill="currentColor"
							d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z"
						/></svg
					>
					<span class="relative">Skontaktuj się ze mną</span>
				</button>
				<a
					href="#offer"
					class="md:ml-4 text-lg hover:underline focus:underline block md:inline mt-8 md:mt-0"
					>Sprawdź moje usługi</a
				>
			</div>
		</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			src="/hero.svg"
			alt="A picture of person programing"
			class="lg:col-start-7 lg:col-span-11 lg:row-span-full mt-16 lg:mt-0 3xl:col-start-6 px-6 lg:px-0"
		/>
	</section>
</main>
