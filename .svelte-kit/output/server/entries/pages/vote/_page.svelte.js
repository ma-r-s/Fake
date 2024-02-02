import { c as create_ssr_component, a as subscribe, h as add_attribute, f as each, e as escape } from "../../../chunks/ssr.js";
import { p as playersStore, a as canvasImageStore, c as colors } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $playersStore, $$unsubscribe_playersStore;
  let $canvasImageStore, $$unsubscribe_canvasImageStore;
  let $colors, $$unsubscribe_colors;
  $$unsubscribe_playersStore = subscribe(playersStore, (value) => $playersStore = value);
  $$unsubscribe_canvasImageStore = subscribe(canvasImageStore, (value) => $canvasImageStore = value);
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  let currPlayer = 0;
  let votes = Array($playersStore).fill(0);
  const image = $canvasImageStore.toDataURL();
  $$unsubscribe_playersStore();
  $$unsubscribe_canvasImageStore();
  $$unsubscribe_colors();
  return `<div class="flex h-screen text-3xl font-bold"><div class="flex-col justify-center p-8"><p class="m-8 text-center text-6xl">${currPlayer < $playersStore ? `Player ${escape(currPlayer + 1)} vote` : `Player votes`}</p> <div class="border-8 border-dashed border-black bg-white"><img${add_attribute("src", image, 0)} alt="canvas" class=""></div></div> <div class="flex flex-col flex-wrap items-center justify-center gap-6 p-8">${each(Array($playersStore), (_, i) => {
    return `<div class="flex gap-2"><button class="btn btn-secondary btn-lg text-xl">Player ${escape(i + 1)}</button> <div class="flex w-14 items-center justify-center rounded-full text-center text-white"${add_attribute("style", `background-color: ${$colors[i]};`, 0)}>${escape(votes[i])}</div> </div>`;
  })}</div> <a href="./reveal"${add_attribute("class", `btn btn-neutral btn-lg absolute left-10 top-10 text-2xl ${currPlayer == $playersStore ? "" : "invisible"}`, 0)}>Reveal</a></div>`;
});
export {
  Page as default
};
