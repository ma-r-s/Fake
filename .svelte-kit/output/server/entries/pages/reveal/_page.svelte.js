import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/ssr.js";
import { m as mostVotedStore, f as fakeArtistStore } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mostVotedStore, $$unsubscribe_mostVotedStore;
  let $fakeArtistStore, $$unsubscribe_fakeArtistStore;
  $$unsubscribe_mostVotedStore = subscribe(mostVotedStore, (value) => $mostVotedStore = value);
  $$unsubscribe_fakeArtistStore = subscribe(fakeArtistStore, (value) => $fakeArtistStore = value);
  $$unsubscribe_mostVotedStore();
  $$unsubscribe_fakeArtistStore();
  return `<div class="flex min-h-screen flex-col items-center justify-center gap-4">${$mostVotedStore == $fakeArtistStore ? `<p class="text-center text-6xl font-bold">Player ${escape($mostVotedStore + 1)} was the fake artist!!</p> <p class="text-center text-4xl" data-svelte-h="svelte-1q84bj1">The fake artist has one last chance to guess the object</p>` : `<p class="text-center text-5xl font-bold">Player ${escape($mostVotedStore + 1)} was NOT the fake artist!!</p> <p class="text-center text-4xl">The fake artist was Player ${escape($fakeArtistStore + 1)}</p> <p class="text-center text-4xl" data-svelte-h="svelte-18zx7mj">Well played</p>`} <a class="text btn btn-primary btn-lg text-4xl" href="./" data-svelte-h="svelte-1ssp9aa">Play Again</a></div>`;
});
export {
  Page as default
};
