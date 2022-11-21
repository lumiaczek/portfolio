import { readable } from 'svelte/store';

const projects = readable([
	{
		title: 'Hydrobar',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus, quis maxim nesciunt facilis minima error quisquam, accusantium perspiciatis nemo sequi! Maxime quo inatque totam. Repellat architecto maiores aut!',
		imgUrl: 'Hydrobar.png',
		webUrl: 'https://figiel-hydrobar.pl'
	},
	{
		title: 'Stalmaks',
		opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus, quis maxim nesciunt facilis minima error quisquam, accusantium perspiciatis nemo sequi! Maxime quo inatque totam. Repellat architecto maiores aut!',
		imgUrl: 'Stalmaks.png',
		webUrl: 'https://dzwigbarlinek.pl'
	}
	// {
	// 	title: 'Weight Buddy',
	// 	opis: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, delectus, quis maxim nesciunt facilis minima error quisquam, accusantium perspiciatis nemo sequi! Maxime quo inatque totam. Repellat architecto maiores aut!',
	// 	imgUrl: null,
	// 	webUrl: null
	// }
]);

export default projects;
