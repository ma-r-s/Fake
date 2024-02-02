import { c as create_ssr_component, b as spread, d as escape_object, v as validate_component, f as each, h as add_attribute, e as escape } from "../../chunks/ssr.js";
import "theme-change";
import { A as Arrow_back_rounded } from "../../chunks/arrow-back-rounded.js";
const Arrow_forward_rounded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Keyboard_arrow_down_rounded = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let players = 3;
  let themes = ["dim", "retro", "cyberpunk", "valentine", "aqua"];
  return `<div class="dropdown absolute left-8 top-8"><div tabindex="0" role="button" class="btn btn-lg m-1">Theme
		${validate_component(Keyboard_arrow_down_rounded, "Down").$$render($$result, {}, {}, {})}</div> <ul tabindex="-1" class="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">${each(themes, (theme) => {
    return `<li><input type="radio" name="theme-dropdown" class="btn btn-ghost btn-block justify-start text-lg"${add_attribute("aria-label", theme, 0)}${add_attribute("value", theme, 0)}${add_attribute("data-set-theme", theme, 0)}> </li>`;
  })}</ul></div> <div class="flex h-screen flex-col items-center justify-center"><p class="font-title mb-7 text-9xl" data-svelte-h="svelte-p9qgrb">Fake Artist</p>  <div class="mb-6 flex items-center gap-4"><button${add_attribute("class", `btn btn-secondary px-2 ${"invisible"}`, 0)}>${validate_component(Arrow_back_rounded, "Left").$$render($$result, { class: "h-9 w-9" }, {}, {})}</button> <p class="w-54 text-center text-4xl">${escape(players)} Players</p> <button${add_attribute("class", `btn btn-secondary px-2 ${""}`, 0)}>${validate_component(Arrow_forward_rounded, "Right").$$render($$result, { class: "h-9 w-9" }, {}, {})}</button></div> <a href="/topics" class="btn btn-primary btn-lg text-4xl" data-svelte-h="svelte-smlkv5">Play</a></div>`;
});
export {
  Page as default
};
