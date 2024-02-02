import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { A as Arrow_back_rounded } from "../../../chunks/arrow-back-rounded.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currPlayer = 0;
  return `<button class="absolute left-8 top-8 flex items-center gap-2">${validate_component(Arrow_back_rounded, "Back").$$render($$result, { class: "h-9 w-9" }, {}, {})}</button> <div class="flex min-h-screen flex-col items-center justify-center"><p class="m-8 text-9xl font-bold">Player ${escape(currPlayer + 1)}</p> ${`<button class="btn btn-primary btn-lg m-8 h-10 text-4xl" data-svelte-h="svelte-srr9ha">Show me!</button>`}</div>`;
});
export {
  Page as default
};
