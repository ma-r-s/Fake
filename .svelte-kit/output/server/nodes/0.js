import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.wDAezpls.js","_app/immutable/chunks/scheduler.6tNSTrer.js","_app/immutable/chunks/index.GojAWPqq.js"];
export const stylesheets = ["_app/immutable/assets/0.kPjh1XWr.css"];
export const fonts = ["_app/immutable/assets/bebas.9gjjU8Dt.ttf"];
