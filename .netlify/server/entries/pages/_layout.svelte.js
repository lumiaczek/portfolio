import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"bg-[#181818] sticky top-0 left-0 w-full z-40"}" role="${"navigation"}"><nav class="${"w-full px-6 py-4 flex flex-col lg:flex-row justify-between text-white items-center xl:w-[90%] xl:mx-auto 3xl:w-[85%] z-50"}"><div class="${"flex flex-row justify-between w-full lg:w-fit"}"><h1 class="${"text-2xl"}"><strong class="${"text-2xl font-semibold text-purple-700"}">Daniel </strong>Borowski
			</h1>
			
			<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-8 h-8 lg:hidden cursor-pointer"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg></div>
		<div class="${[
    "lg:flex flex-col lg:flex-row items-center gap-2 text-lg font-normal text-center mt-4 lg:mt-0 shadow-lg rounded-lg w-full p-6 space-y-2 lg:space-y-0 lg:w-fit lg:p-0 lg:shadow-none lg:rounded-none list-none",
    "hidden "
  ].join(" ").trim()}"><li class="${[
    "py-2 px-4 rounded-lg hover:underline focus:underline",
    $page.url.pathname === "/" ? "current" : ""
  ].join(" ").trim()}"><a href="${"/"}">Strona g\u0142\xF3wna</a></li>
			
			<li class="${[
    "py-2 px-4 rounded-lg hover:underline focus:underline",
    $page.url.pathname === "/about" ? "current" : ""
  ].join(" ").trim()}"><a href="${"/about"}">O mnie</a></li>
			<li class="${[
    "py-2 px-4 rounded-lg hover:underline focus:underline",
    $page.url.pathname === "/price" ? "current" : ""
  ].join(" ").trim()}"><a href="${"/price"}">Cennik</a></li>
			<li class="${[
    "py-2 px-4 rounded-lg hover:underline focus:underline",
    $page.url.pathname === "/work" ? "current" : ""
  ].join(" ").trim()}"><a href="${"/work"}">Projekty</a></li>
			<li class="${"py-2 px-4 rounded-lg hover:underline focus:underline"}"><a href="${"/contact"}">Kontakt</a></li>
			<ul class="${"flex flex-row justify-center items-center space-x-2 px-2 py-4"}"><li><a href="${"https://github.com/lumiaczek"}" target="${"Github"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-7 h-7 fill-white hover:fill-purple-700 transition-all duration-200"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 448 512"}"><path d="${"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8c0-5.4.2-33 .2-55.3c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6c-14.1 0-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 13.9.2 36.5.2 40.6c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3c-1.9-.4-3.2-1.9-2.8-3.2c.4-1.3 2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6z"}"></path></svg></a></li>
				<li><a href="${"https://www.facebook.com/daniel.borowski.1848816"}" target="${"Facebook"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-7 h-7 fill-white hover:fill-purple-700 transition-all duration-200"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 448 512"}"><path d="${"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}"></path></svg></a></li>
				<li><a href="${"https://www.linkedin.com/in/daniel-borowski-622466215/"}" target="${"LinkedIn"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-7 h-7 fill-white hover:fill-purple-700 transition-all duration-200"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 448 512"}"><path d="${"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"}"></path></svg></a></li></ul></div></nav></div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-142dtr6_START --><meta name="${"description"}" content="${"Daniel Borowski, strona oferuj\u0105ca us\u0142ugi informatyczne w tym tworzenie aplikacji oraz stron internetowych i us\u0142ugi informatyczne"}"><!-- HEAD_svelte-142dtr6_END -->`, ""}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
