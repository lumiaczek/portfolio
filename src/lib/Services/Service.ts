import { readable } from 'svelte/store';

const uslugi = readable([
	{
		id: 1,
		name: 'Strona wizytówka z dostępnego projektu',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
		type: 'cheapWeb',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 650,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128H0zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm176-112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>`
	},
	{
		id: 2,
		name: 'Strona wizytówka z personalnym projektem',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'cheapWeb',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 1000,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128H0zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm176-112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>`
	},
	{
		id: 3,
		name: 'Strona WordPress',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'cheapWeb',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 800,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128H0zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm176-112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>`
	},
	{
		id: 4,
		name: 'Personalizowana aplikacja Internetowa',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
		type: 'web',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 3000,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/></svg>`
	},
	{
		id: 5,
		name: 'Spersonalizowany blog z CMS Strapi',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'web',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 1500,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/></svg>`
	},

	{
		id: 6,
		name: 'Sklep PrestaShop',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'web',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 1200,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/></svg>`
	},
	{
		id: 7,
		name: 'Modernizacja komputera lub laptopa',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'hardware',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 100,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>`
	},
	{
		id: 8,
		name: 'Czyszczenie komputera lub laptopa',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'hardware',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 100,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>`
	},
	{
		id: 9,
		name: 'Naprawa komputera lub laptopa',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'hardware',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 100,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>`
	},
	{
		id: 10,
		name: 'Projekt i wdorżenie sieci lokalnej',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		type: 'hardware',
		punkty: ['Strona do wyboru z dostepnych projektow', 'Wsparcie internetowe przez tydzien'],
		cena: 250,
		svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M256 64h128v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h256v32h-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352v-32h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448v-64h128v64H96zm320-64h128v64H416v-64z"/></svg>`
	}
]);

export default uslugi;
