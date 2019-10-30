#!/usr/bin/env node

import {Slix} from "slix-app"
import providers from './config/providers';
import {TwigEvent} from "slix-twig-provider"

let fsLib = require('fs');

let app = new Slix();
app.addProviders(providers)
app.run();
app.helpers = {
	nginx: {
		files: () => {
			return fsLib.readdirSync('/var/log/nginx');
		}
	}
}
app.addEventListener(TwigEvent.RENDERING_PREPARATION, (event) => {
	event.data.app = app;
})