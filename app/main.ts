//platformBrowserDynamicimport { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { AppModule } from "./app.module";
//platformBrowserDynamic().bootstrapModule(AppModule);

import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";
import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";
enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
