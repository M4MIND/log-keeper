#!/usr/bin/env node

import {Slix} from "slix-app"
import providers from './config/providers';

let app = new Slix();
app.addProviders(providers)
app.run();