import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const Tailwind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card flex flex-row items-center self-stretch"}"><div class="${"mb-5"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 154"}" class="${"w-20 h-20 mr-3"}"><path fill="${"#FFF"}" d="${"M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"}"></path></svg></div>
	<div class="${"w-full"}"><h3 class="${"text-xl font-medium"}">TailwindCSS</h3>
		<p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="${"flex w-full justify-between items-center mb-1 text-sm"}"><p>Poziom umiej\u0119tno\u015Bci</p>
			<p class="${"text-right"}">\u015Arednio zaawansowany</p></div>
		<div class="${"h-2.5 rounded-full w-full bg-[#191919]"}"><div class="${"h-2.5 rounded-full bg-purple-700 w-[78%] animate-[loadTa_1.5s_ease-in-out]"}"></div></div></div></div>`;
});
const Css = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card flex flex-row items-center self-stretch"}"><div class="${"mb-5"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-20 h-20 mr-2"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 361"}"><path fill="${"#FFF"}" d="${"M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z"}"></path><path fill="${"#FFF"}" d="${"m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z"}"></path><path fill="${"#181818"}" d="${"m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z"}"></path><path fill="${"#181818"}" d="${"m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z"}"></path></svg></div>
	<div class="${"w-full"}"><h3 class="${"text-xl font-medium"}">CSS</h3>
		<p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="${"flex w-full justify-between items-center mb-1 text-sm"}"><p>Poziom umiej\u0119tno\u015Bci</p>
			<p class="${"text-right"}">Zaawansowany</p></div>
		<div class="${"h-2.5 rounded-full w-full bg-[#191919] "}"><div class="${"h-2.5 rounded-full bg-purple-700 w-[85%] animate-[loadC_1.5s_ease-in-out]"}"></div></div></div></div>`;
});
const TS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card flex flex-row items-center self-stretch"}"><div class="${"mb-5"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-16 h-16 mr-6 ml-2"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"#FFF"}" d="${"M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"}"></path><path fill="${"#181818"}" d="${"M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"}"></path></svg></div>
	<div class="${"w-full"}"><h3 class="${"text-xl font-medium"}">TypeScript</h3>
		<p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="${"flex w-full justify-between items-center mb-1 text-sm"}"><p>Poziom umiej\u0119tno\u015Bci</p>
			<p class="${"text-right"}">Podstawowy</p></div>
		<div class="${"h-2.5 rounded-full w-full bg-[#191919] "}"><div class="${"h-2.5 rounded-full bg-purple-700 w-[40%] animate-[loadT_1.5s_ease-in-out]"}"></div></div></div></div>`;
});
const Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card flex flex-row items-center self-stretch"}"><div class="${"mb-5"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-20 h-20 mr-4"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 308"}"><path fill="${"#FFF"}" d="${"M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056a86.566 86.566 0 0 0 8.536 55.576a82.425 82.425 0 0 0-12.296 30.719a87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057a86.601 86.601 0 0 0-8.53-55.577a82.409 82.409 0 0 0 12.29-30.718a87.573 87.573 0 0 0-14.963-66.244"}"></path><path fill="${"#181818"}" d="${"M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85a49.978 49.978 0 0 1 1.713-6.693l1.35-4.115l3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808l-.245 2.659a16.067 16.067 0 0 0 2.89 10.656a17.143 17.143 0 0 0 18.397 6.828a15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977a15.923 15.923 0 0 0-2.713-12.011a17.156 17.156 0 0 0-18.404-6.832a15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849a49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85a50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116l-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809l.246-2.658a16.099 16.099 0 0 0-2.89-10.656a17.143 17.143 0 0 0-18.398-6.828a15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975a15.9 15.9 0 0 0 2.709 12.012a17.156 17.156 0 0 0 18.404 6.832a15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848a49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"}"></path></svg></div>
	<div class="${"w-full"}"><h3 class="${"text-xl font-medium"}">Svelte</h3>
		<p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="${"flex w-full justify-between items-center mb-1 text-sm"}"><p>Poziom umiej\u0119tno\u015Bci</p>
			<p class="${"text-right"}">\u015Arednio zaawansowany</p></div>
		<div class="${"h-2.5 rounded-full w-full bg-[#191919] "}"><div class="${"h-2.5 rounded-full bg-purple-700 w-[70%] animate-[loadS_1.5s_ease-in-out]"}"></div></div></div></div>`;
});
const JS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card flex flex-row items-center self-stretch"}"><div class="${"mb-5"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"xMidYMid meet"}" class="${"w-16 h-16 mr-6 ml-2"}" viewBox="${"0 0 256 256"}"><path fill="${"#FFF"}" d="${"M0 0h256v256H0V0Z"}"></path><path d="${"m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"}"></path></svg></div>
	<div class="${"w-full"}"><h3 class="${"text-xl font-medium"}">JavaScript</h3>
		<p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="${"flex w-full justify-between items-center mb-1 text-sm"}"><p>Poziom umiej\u0119tno\u015Bci</p>
			<p class="${"text-right"}">\u015Arednio zaawansowany</p></div>
		<div class="${"h-2.5 rounded-full w-full bg-[#191919] "}"><div class="${"h-2.5 rounded-full bg-purple-700 w-[75%] animate-[loadJ_1.5s_ease-in-out]"}"></div></div></div></div>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"card flex flex-row items-center self-stretch"}"><div class="${"mb-5"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" preserveAspectRatio="${"xMidYMid meet"}" class="${"w-20 h-20 mr-2"}" viewBox="${"0 0 256 361"}"><path fill="${"#FFF"}" d="${"m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11Z"}"></path><path fill="${"#FFF"}" d="${"m128 337.95l84.417-23.403l19.86-222.49H128V337.95Z"}"></path><path fill="${"#181818"}" d="${"M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704Zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471Z"}"></path><path fill="${"#181818"}" d="${"M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937Zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86Z"}"></path></svg></div>
	<div class="${"w-full"}"><h3 class="${"text-xl font-medium"}">HTML</h3>
		<p class="${"mb-4"}">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="${"flex w-full justify-between items-center mb-1 text-sm"}"><p>Poziom umiej\u0119tno\u015Bci</p>
			<p class="${"text-right"}">Zaawansowany</p></div>
		<div class="${"h-2.5 rounded-full w-full bg-[#191919]"}"><div class="${"h-2.5 rounded-full bg-purple-700 w-[93%] animate-[loadH_1.5s_ease-in-out]"}"></div></div></div></div>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"xl:w-[90%] lg:h-[90vh] xl:mx-auto 3xl:w-[85%] flex flex-col xl:grid md:grid-cols-11 lg:gap-2 grid-cols-1 grid-rows-4 text-white mt-10 p-6"}"><div class="${"col-start-1 col-end-7 row-start-1"}"><p class="${"text-3xl text-center md:text-left"}">W czym jestem dobry</p>
		<h1 class="${"text-5xl md:text-6xl text-purple-700 font-medium text-center md:text-left"}">Moje umiej\u0119tno\u015Bci
		</h1>
		<div class="${"flex flex-row items-center gap-2 mb-4 justify-center md:justify-start mt-8 flex-wrap"}"><button class="${["btn-about", "current"].join(" ").trim()}">Frontend</button>
			<button class="${["btn-about", ""].join(" ").trim()}">Backend</button>
			<button class="${["btn-about", ""].join(" ").trim()}">UI/UX Design</button></div></div>
	<div class="${"row-start-2 col-span-full row-span-full mt-10"}">${`<div class="${"items-center gap-6 flex lg:flex-row flex-col mb-6 "}">${validate_component(Html, "Html").$$render($$result, {}, {}, {})}
				${validate_component(Css, "Css").$$render($$result, {}, {}, {})}
				${validate_component(JS, "Js").$$render($$result, {}, {}, {})}</div>
			<div class="${"items-center gap-6 flex lg:flex-row flex-col"}">${validate_component(Svelte, "Svelte").$$render($$result, {}, {}, {})}
				${validate_component(Tailwind, "Tailwind").$$render($$result, {}, {}, {})}
				${validate_component(TS, "Ts").$$render($$result, {}, {}, {})}</div>`}</div></section>`;
});
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique soluta quod voluptate? Nemo
	minima aperiam ipsum distinctio rerum labore non, ipsa dolor repellendus! Dolor impedit odit,
	dignissimos blanditiis quas ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
	aperiam perspiciatis incidunt laborum vel deleniti nihil veniam nam distinctio quod. Libero quae,
	assumenda ut veritatis optio aliquid cumque quas saepe.
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quaerat excepturi sit, eaque, dolorem
	vel consequatur saepe, mollitia commodi voluptatum autem similique necessitatibus earum animi
	doloremque quia deleniti aliquam. Culpa.
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quaerat excepturi sit, eaque, dolorem
	vel consequatur saepe, mollitia commodi voluptatum autem similique necessitatibus earum animi
	doloremque quia deleniti aliquam. Culpa.
</p>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"xl:w-[90%] lg:h-[90vh] xl:mx-auto 3xl:w-[85%] flex flex-col xl:grid md:grid-cols-12 lg:gap-2 grid-cols-1 grid-rows-2 text-white mt-6 p-6"}"><div class="${"col-start-1 col-end-6 row-span-2 "}"><p class="${"text-3xl text-center md:text-left"}">Kilka s\u0142\xF3w</p>
		<h1 class="${"text-6xl text-purple-700 mb-4 font-medium text-center md:text-left"}">O mnie</h1>
		<div class="${"flex flex-row items-center gap-2 mb-4 justify-center md:justify-start"}"><button class="${["btn-about", "current"].join(" ").trim()}">Bio</button>
			<button class="${["btn-about", ""].join(" ").trim()}">Do\u015Bwiadczenie</button>
			<button class="${["btn-about", ""].join(" ").trim()}">Szko\u0142a</button></div>
		${`${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}`}</div>

	<img src="${"/hero2.svg"}" alt="${""}" class="${"col-start-7 col-span-5 row-span-2 w-full sm:w-1/2 md:hidden xl:w-full xl:inline mt-10 mx-auto xl:m-0"}"></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-30t1pf_START -->${$$result.title = `<title>Daniel Borowski | O mnie</title>`, ""}<!-- HEAD_svelte-30t1pf_END -->`, ""}

${validate_component(About, "About").$$render($$result, {}, {}, {})}
${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
