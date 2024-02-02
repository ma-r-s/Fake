export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.SnzDzET7.js","app":"_app/immutable/entry/app.RQmoElXl.js","imports":["_app/immutable/entry/start.SnzDzET7.js","_app/immutable/chunks/entry._z_htbuo.js","_app/immutable/chunks/scheduler.6tNSTrer.js","_app/immutable/chunks/index.cpQ9Qvl4.js","_app/immutable/entry/app.RQmoElXl.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.6tNSTrer.js","_app/immutable/chunks/index.GojAWPqq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
