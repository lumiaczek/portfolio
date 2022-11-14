import { c as create_ssr_component, b as subscribe, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { r as readable } from "../../../chunks/index2.js";
const uslugi = readable([
  {
    id: 1,
    name: "Strona wizyt\xF3wka z dost\u0119pnego projektu",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    type: "cheapWeb",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 650,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128H0zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm176-112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>`
  },
  {
    id: 2,
    name: "Strona wizyt\xF3wka z personalnym projektem",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "cheapWeb",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 1e3,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128H0zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm176-112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>`
  },
  {
    id: 3,
    name: "Strona WordPress",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "cheapWeb",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 800,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128H0zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zm176-112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"/></svg>`
  },
  {
    id: 4,
    name: "Personalizowana aplikacja Internetowa",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    type: "web",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 3e3,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/></svg>`
  },
  {
    id: 5,
    name: "Spersonalizowany blog z CMS Strapi",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "web",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 1500,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/></svg>`
  },
  {
    id: 6,
    name: "Sklep PrestaShop",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "web",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 1200,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/></svg>`
  },
  {
    id: 7,
    name: "Modernizacja komputera lub laptopa",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "hardware",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 100,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>`
  },
  {
    id: 8,
    name: "Czyszczenie komputera lub laptopa",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "hardware",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 100,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>`
  },
  {
    id: 9,
    name: "Naprawa komputera lub laptopa",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "hardware",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 100,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 224c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>`
  },
  {
    id: 10,
    name: "Projekt i wdor\u017Cenie sieci lokalnej",
    opis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "hardware",
    punkty: ["Strona do wyboru z dostepnych projektow", "Wsparcie internetowe przez tydzien"],
    cena: 250,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="mb-3 mx-auto fill-white h-12 w-14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M256 64h128v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h256v32h-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352v-32h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448v-64h128v64H96zm320-64h128v64H416v-64z"/></svg>`
  }
]);
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $service, $$unsubscribe_service;
  $$unsubscribe_service = subscribe(uslugi, (value) => $service = value);
  let { cena } = $$props;
  let { filter } = $$props;
  if ($$props.cena === void 0 && $$bindings.cena && cena !== void 0)
    $$bindings.cena(cena);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  $$unsubscribe_service();
  return `${``}

<main class="${"grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-4 w-full"}">${each($service, (serv, i) => {
    return `${!(cena < serv.cena) ? `${!filter.web && !filter.cheapWeb && !filter.hardware ? `
				<div class="${"card flex flex-col text-center transition-all duration-200 cursor-pointer hover:scale-105"}"${add_attribute("id", serv.id.toString(), 0)}><div class="${"border-purple-700 border-2 px-2 py-4 rounded-lg h-full"}"><!-- HTML_TAG_START -->${serv.svg}<!-- HTML_TAG_END -->
						<h3 class="${"mx-auto text-2xl text-white"}">${escape(serv.name)}</h3>
						<p class="${"font-bold text-2xl mt-3"}">od ${escape(serv.cena)}</p>
						<p class="${"mt-4"}">${escape(serv.opis)}</p></div>
				</div>` : ``}
			${filter.web && serv.type === "web" ? `<div class="${"card flex flex-col text-center"}"${add_attribute("id", serv.id.toString(), 0)}><div class="${"border-purple-700 border-2 px-2 py-4 rounded-lg h-full"}"><!-- HTML_TAG_START -->${serv.svg}<!-- HTML_TAG_END -->
						<h3 class="${"mx-auto text-2xl text-white"}">${escape(serv.name)}</h3>
						<p class="${"font-bold text-2xl mt-3"}">od ${escape(serv.cena)}</p>
						<p class="${"mt-4"}">${escape(serv.opis)}</p></div>
				</div>` : ``}
			${filter.cheapWeb && serv.type === "cheapWeb" ? `<div class="${"card flex flex-col text-center"}"${add_attribute("id", serv.id.toString(), 0)}><div class="${"border-purple-700 border-2 px-2 py-4 rounded-lg h-full"}"><!-- HTML_TAG_START -->${serv.svg}<!-- HTML_TAG_END -->
						<h3 class="${"mx-auto text-2xl text-white"}">${escape(serv.name)}</h3>
						<p class="${"font-bold text-2xl mt-3"}">od ${escape(serv.cena)}</p>
						<p class="${"mt-4"}">${escape(serv.opis)}</p></div>
				</div>` : ``}
			${filter.hardware && serv.type === "hardware" ? `<div class="${"card flex flex-col text-center"}"${add_attribute("id", serv.id.toString(), 0)}><div class="${"border-purple-700 border-2 px-2 py-4 rounded-lg h-full"}"><!-- HTML_TAG_START -->${serv.svg}<!-- HTML_TAG_END -->
						<h3 class="${"mx-auto text-2xl text-white"}">${escape(serv.name)}</h3>
						<p class="${"font-bold text-2xl mt-3"}">od ${escape(serv.cena)}</p>
						<p class="${"mt-4"}">${escape(serv.opis)}</p></div>
				</div>` : ``}` : ``}`;
  })}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let price = 3e3;
  let filter = {
    web: false,
    cheapWeb: false,
    hardware: false
  };
  return `${$$result.head += `<!-- HEAD_svelte-fjnj95_START -->${$$result.title = `<title>Daniel Borowski | Cennik</title>`, ""}<!-- HEAD_svelte-fjnj95_END -->`, ""}

<section class="${"xl:w-[90%] xl:mx-auto 3xl:w-[85%] flex flex-col text-white p-6"}"><div class="${""}"><p class="${"text-3xl text-center md:text-left mb-1"}">Sprawd\u017A ceny moich us\u0142ug</p>
		<h1 class="${"text-6xl text-purple-700 font-medium text-center md:text-left"}">Cennik</h1></div>
	<div class="${"flex xl:flex-row flex-col h-full mt-6"}"><div class="${"flex flex-col h-full p-4 bg-[#171717] w-full xl:w-[30%] 2xl:w-[25%] rounded-lg mb-4 xl:mb-0 mr-6"}"><p class="${"text-2xl"}">Filtry</p>
			<div class="${"flex flex-row justify-between items-center"}"><p class="${"text-sm mb-2 mt-6"}">Cena</p>
				<p class="${"text-sm mb-2 mt-6"}">${escape(`${price} z\u0142`)}</p></div>
			<div class="${"flex flex-row items-center justify-center gap-4 w-full"}"><input id="${"range"}" type="${"range"}" min="${"100"}" step="${"10"}" max="${"3000"}" class="${"w-full h-2 rounded-full cursor-pointer text-center slider"}"${add_attribute("value", price, 0)}></div>
			<p class="${"mt-4 text-xl"}">Rodzaj us\u0142ugi</p>
			<div class="${"mt-1 flex flex-col"}"><div class="${"flex flex-row items-center"}"><input type="${"checkbox"}" class="${"w-5 h-5 appearance-none border-2 border-[#171717] rounded bg-white mr-1 checked:bg-purple-700"}" id="${"web"}"${add_attribute("checked", filter.web, 1)}>
					<p class="${"text-sm"}">Aplikacje internetowe</p></div>
				<div class="${"flex flex-row items-center mt-1"}"><input type="${"checkbox"}" class="${"w-5 h-5 appearance-none border-2 border-[#171717] rounded bg-white mr-1 checked:bg-purple-700"}" id="${"site"}"${add_attribute("checked", filter.cheapWeb, 1)}>
					<p class="${"text-sm"}">Wiyzyt\xF3wki</p></div>
				<div class="${"flex flex-row items-center mt-1"}"><input type="${"checkbox"}" class="${"w-5 h-5 appearance-none border-2 border-[#171717] rounded bg-white mr-1 checked:bg-purple-700"}"${add_attribute("checked", filter.hardware, 1)}>
					<p class="${"text-sm"}">Us\u0142ugi informatyczne</p></div></div></div>
		${validate_component(Service, "Service").$$render($$result, { cena: price, filter }, {}, {})}</div></section>`;
});
export {
  Page as default
};
