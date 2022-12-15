<script lang="ts" context="module">
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	const price = () => {
		goto('/price');
	};
</script>

<section
	class="w-full flex flex-col justify-center text-white items-center xl:w-[90%] lg:h-screen xl:mx-auto 3xl:w-[85%] p-6"
>
	<div
		class="space-y-1 text-center md:text-left mb-[4rem] lg:mb-[6rem] mt-[8rem] md:mt-[4rem] lg:mt-0 h-fit md:mr-auto"
	>
		<h2 class="text-3xl scroll-m-36 " id="offer">Czym się zajmuję</h2>
		<h1 class="text-6xl text-orange-700 font-medium">Usługi</h1>
	</div>
	<div
		class="flex flex-col lg:flex-row w-full p-4 gap-4 lg:mb-12 items-center space-y-6 lg:space-y-0 space-x-4"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="text-center hover:scale-105 transition-all duration-200 hover:border-orange-700 border-2 border-transparent cursor-pointer p-4 rounded-lg lg:w-1/3 self-stretch"
			on:click={price}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-10 h-10 mx-auto mb-5 fill-white"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 640 512"
				><path
					fill="currentColor"
					d="M64 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256h-64V96H128v256H64V96zM0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31l31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm112-34l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31l-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
				/></svg
			>
			<h1 class="text-3xl mb-4 text-orange-700 font-medium">Tworzenie aplikacji Internetowych</h1>
			<p>
				Utworzę od podstaw stonę/aplikację spersonalizowaną pod Ciebie, w pełni responsywną,
				niesamowicie szybką oraz z niskimi kosztami utrzymania i eksploatacji.
			</p>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="text-center hover:scale-105 transition-all duration-200 hover:border-orange-700 border-2 border-transparent p-4  cursor-pointer rounded-lg lg:w-1/3 self-stretch"
			on:click={price}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="w-10 h-10 mx-auto mb-5 fill-white"
				><path
					d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM344 152c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm96-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zM344 408c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm104-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"
				/></svg
			>
			<h1 class="text-3xl mb-4 text-orange-700 font-medium">
				Usługi <br /> informatyczne
			</h1>
			<p>
				Oferuję całą gamę usług informatycznych od czyszczenia, napraw i modernizacji komputerów
				oraz laptopów, aż do projektowania lokalnych sieci komputerowych.
			</p>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="text-center hover:scale-105 transition-all duration-200 hover:border-orange-700 border-2 border-transparent cursor-pointer p-4 rounded-lg lg:w-1/3 self-stretch"
			on:click={price}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
				class="w-10 h-10 mx-auto mb-5 fill-white"
				><path
					d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
				/></svg
			>
			<h1 class="text-3xl mb-4 text-orange-700 font-medium self-stretch">
				Tworzenie aplikacji <br /> mobilnych
			</h1>
			<p class="rounded-lg bg-red-600 py-2 px-4 w-fit mx-auto">Wkrótce dostępne.</p>
		</div>
	</div>
</section>
