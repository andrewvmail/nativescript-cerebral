"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var angular_1 = require("@cerebral/angular");
var cerebral_1 = require("cerebral");
// import Devtools from 'cerebral/devtools'
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
exports.app = cerebral_1.Module({
    providers: {},
    modules: {},
    state: {
        registered: false,
        count: 0,
        currentPage: 'firstPage',
        transition: 'pop',
        hello: 'world'
    },
    signals: {
        click: [
            function increaseCount(_a) {
                var state = _a.state;
                state.increment('count', 1);
            }
        ],
        reset: [
            function resetCount(_a) {
                var state = _a.state;
                state.set('count', 0);
            }
        ]
    }
});
var devtools;
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
function configureController() {
    return new angular_1.ControllerService(exports.app);
}
exports.configureController = configureController;
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            providers: [
                item_service_1.ItemService,
                {
                    provide: angular_1.ControllerService,
                    useFactory: configureController,
                    deps: []
                },
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsNkNBQXFEO0FBQ3JELHFDQUE2QztBQUc3QywyQ0FBMkM7QUFJM0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBRXpELFFBQUEsR0FBRyxHQUFHLGlCQUFNLENBQUM7SUFDeEIsU0FBUyxFQUFFLEVBRVY7SUFDRCxPQUFPLEVBQUUsRUFNUjtJQUNELEtBQUssRUFBRTtRQUNMLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLFdBQVc7UUFDeEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLHVCQUF1QixFQUFTO29CQUFQLGdCQUFLO2dCQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUM3QixDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxvQkFBb0IsRUFBUztvQkFBUCxnQkFBSztnQkFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDdkIsQ0FBQztTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFFRixJQUFJLFFBQVEsQ0FBQTtBQUVaLGNBQWM7QUFDZCwwQkFBMEI7QUFDMUIsbUNBQW1DO0FBQ25DLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLCtCQUErQjtBQUMvQiw0QkFBNEI7QUFDNUIsT0FBTztBQUNQLElBQUk7QUFFSiw4Q0FBOEM7QUFDOUMsYUFBYTtBQUNiLEtBQUs7QUFHTDtJQUNFLE1BQU0sQ0FBQyxJQUFJLDJCQUFpQixDQUFDLFdBQUcsQ0FBQyxDQUFBO0FBQ25DLENBQUM7QUFGRCxrREFFQztBQThCRDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE1QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjthQUN0QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDYjtvQkFDRSxPQUFPLEVBQUUsMkJBQWlCO29CQUMxQixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsRUFBRTtpQkFDVDthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250cm9sbGVyU2VydmljZSB9IGZyb20gJ0BjZXJlYnJhbC9hbmd1bGFyJ1xuaW1wb3J0IHsgQ29udHJvbGxlciwgTW9kdWxlIH0gZnJvbSAnY2VyZWJyYWwnXG5cblxuLy8gaW1wb3J0IERldnRvb2xzIGZyb20gJ2NlcmVicmFsL2RldnRvb2xzJ1xuXG5cblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBNb2R1bGUoe1xuICBwcm92aWRlcnM6IHtcbiAgICAvLyBodHRwLFxuICB9LFxuICBtb2R1bGVzOiB7XG4gICAgLy8gc3RvcmFnZSxcbiAgICAvLyBzZXR0aW5ncyxcbiAgICAvLyBuYXZpZ2F0aW9uLFxuICAgIC8vIHJlZ2lzdHJhdGlvbixcbiAgICAvLyBhcHA6IGFwcE1vZHVsZSxcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICByZWdpc3RlcmVkOiBmYWxzZSxcbiAgICBjb3VudDogMCxcbiAgICBjdXJyZW50UGFnZTogJ2ZpcnN0UGFnZScsXG4gICAgdHJhbnNpdGlvbjogJ3BvcCcsXG4gICAgaGVsbG86ICd3b3JsZCdcbiAgfSxcbiAgc2lnbmFsczoge1xuICAgIGNsaWNrOiBbXG4gICAgICBmdW5jdGlvbiBpbmNyZWFzZUNvdW50KHsgc3RhdGUgfSkge1xuICAgICAgICBzdGF0ZS5pbmNyZW1lbnQoJ2NvdW50JywgMSlcbiAgICAgIH1cbiAgICBdLFxuICAgIHJlc2V0OiBbXG4gICAgICBmdW5jdGlvbiByZXNldENvdW50KHsgc3RhdGUgfSkge1xuICAgICAgICBzdGF0ZS5zZXQoJ2NvdW50JywgMClcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0pXG5cbmxldCBkZXZ0b29sc1xuXG4vLyBpZiAodHJ1ZSkge1xuLy8gICBkZXZ0b29scyA9IERldnRvb2xzKHtcbi8vICAgICBob3N0OiAnMTkyLjE2OC41MC4xOTc6OTk5OScsXG4vLyAgICAgLy8gaHR0cHM6IGZhbHNlLFxuLy8gICAgIHJlY29ubmVjdDogdHJ1ZSxcbi8vICAgICBzdG9yZU11dGF0aW9uczogdHJ1ZSxcbi8vICAgICBiaWdDb21wb25lbnRzV2FybmluZzogNSxcbi8vICAgICB3YXJuU3RhdGVQcm9wczogdHJ1ZSxcbi8vICAgfSlcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IGNvbnRyb2xsZXIgPSBDb250cm9sbGVyKGFwcCwge1xuLy8gICBkZXZ0b29sc1xuLy8gfSlcblxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlQ29udHJvbGxlcigpIHtcbiAgcmV0dXJuIG5ldyBDb250cm9sbGVyU2VydmljZShhcHApXG59XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IENvbnRyb2xsZXJTZXJ2aWNlLFxuICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmVDb250cm9sbGVyLFxuICAgICAgICBkZXBzOiBbXVxuICAgICAgfSxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=