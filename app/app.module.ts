import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ControllerService } from '@cerebral/angular'
import { Controller, Module } from 'cerebral'


// import Devtools from 'cerebral/devtools'



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

export const app = Module({
  providers: {
    // http,
  },
  modules: {
    // storage,
    // settings,
    // navigation,
    // registration,
    // app: appModule,
  },
  state: {
    registered: false,
    count: 0,
    currentPage: 'firstPage',
    transition: 'pop',
    hello: 'world'
  },
  signals: {
    click: [
      function increaseCount({ state }) {
        state.increment('count', 1)
      }
    ],
    reset: [
      function resetCount({ state }) {
        state.set('count', 0)
      }
    ]
  }
})

let devtools

// if (true) {
//   devtools = Devtools({
//     host: '192.168.50.197:9999',
//     // https: false,
//     reconnect: true,
//     storeMutations: true,
//     bigComponentsWarning: 5,
//     warnStateProps: true,
//   })
// }

// export const controller = Controller(app, {
//   devtools
// })


export function configureController() {
  return new ControllerService(app)
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService,
      {
        provide: ControllerService,
        useFactory: configureController,
        deps: []
      },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
