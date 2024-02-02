import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../chunks/ssr.js";
import { A as Arrow_back_rounded } from "../../../chunks/arrow-back-rounded.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topics = [];
  return `<div class="flex h-screen flex-col"><button class="absolute left-8 top-8 flex items-center gap-2">${validate_component(Arrow_back_rounded, "Back").$$render($$result, { class: "h-9 w-9" }, {}, {})}</button> <div class="m-12 grid grow content-center gap-20 sm:grid-cols-3 md:grid-cols-4">${each(topics, (topic) => {
    return `<a href="/show" class="btn btn-primary h-20 text-2xl">${escape(topic.name)}</a>`;
  })}</div></div>`;
});
export {
  Page as default
};
