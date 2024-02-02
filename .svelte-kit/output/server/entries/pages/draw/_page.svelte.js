import { c as create_ssr_component, h as add_attribute, i as add_styles, a as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { c as colors, p as playersStore } from "../../../chunks/stores.js";
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  let { color } = $$props;
  let { background = "white" } = $$props;
  let { canvas } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.canvas === void 0 && $$bindings.canvas && canvas !== void 0)
    $$bindings.canvas(canvas);
  return ` <canvas${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_styles({ background })}${add_attribute("this", canvas, 0)}></canvas>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $colors, $$unsubscribe_colors;
  let $playersStore, $$unsubscribe_playersStore;
  $$unsubscribe_colors = subscribe(colors, (value) => $colors = value);
  $$unsubscribe_playersStore = subscribe(playersStore, (value) => $playersStore = value);
  let color = $colors[0];
  let currPlayer = 0;
  let canvas;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex min-h-screen flex-col items-center justify-center"><div class="mt-6 flex w-full items-center justify-around"><p class="text-5xl font-bold">Player ${escape(currPlayer + 1)}</p> ${currPlayer < $playersStore - 1 ? `<button class="btn-large btn btn-neutral text-2xl" data-svelte-h="svelte-15wgi2d">Next Player</button>` : `${`<button class="btn-large btn btn-primary text-2xl" data-svelte-h="svelte-skmfbx">Next Round</button>`}`}</div> <div class="m-6 w-11/12 grow border-8 border-dashed border-black">${validate_component(Canvas, "DrawCanvas").$$render(
      $$result,
      { color, canvas },
      {
        canvas: ($$value) => {
          canvas = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_colors();
  $$unsubscribe_playersStore();
  return $$rendered;
});
export {
  Page as default
};
