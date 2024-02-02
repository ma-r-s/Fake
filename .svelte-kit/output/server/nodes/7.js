

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/vote/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.aCJqbmi0.js","_app/immutable/chunks/scheduler.6tNSTrer.js","_app/immutable/chunks/index.GojAWPqq.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/stores.gel0lWqn.js","_app/immutable/chunks/index.cpQ9Qvl4.js"];
export const stylesheets = [];
export const fonts = [];
