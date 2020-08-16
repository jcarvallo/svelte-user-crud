import App from './App.svelte';
import "bootstrap/dist/css/bootstrap.min.css";
import "noty/lib/noty.css";
import "noty/lib/themes/sunset.css";

const app = new App({
	target: document.body,
});

window.app = app;

export default app;