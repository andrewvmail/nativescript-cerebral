"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var item_service_1 = require("./item.service");
var tags_1 = require("cerebral/tags");
var angular_1 = require("@cerebral/angular");
var ItemsComponent = /** @class */ (function (_super) {
    __extends(ItemsComponent, _super);
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(cdr, controller, itemService) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        _this.itemService = itemService;
        _this.items = [
            { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
            { id: 3, name: "Piqué", role: "Defender" },
            { id: 4, name: "I. Rakitic", role: "Midfielder" },
            { id: 5, name: "Sergio", role: "Midfielder" },
            { id: 6, name: "Denis Suárez", role: "Midfielder" },
            { id: 7, name: "Arda", role: "Midfielder" },
            { id: 8, name: "A. Iniesta", role: "Midfielder" },
            { id: 9, name: "Suárez", role: "Forward" },
            { id: 10, name: "Messi", role: "Forward" },
            { id: 11, name: "Neymar", role: "Forward" },
            { id: 12, name: "Rafinha", role: "Midfielder" },
            { id: 13, name: "Cillessen", role: "Goalkeeper" },
            { id: 14, name: "Mascherano", role: "Defender" },
            { id: 17, name: "Paco Alcácer", role: "Forward" },
            { id: 18, name: "Jordi Alba", role: "Defender" },
            { id: 19, name: "Digne", role: "Defender" },
            { id: 20, name: "Sergi Roberto", role: "Midfielder" },
            { id: 21, name: "André Gomes", role: "Midfielder" },
            { id: 22, name: "Aleix Vidal", role: "Midfielder" },
            { id: 23, name: "Umtiti", role: "Defender" },
            { id: 24, name: "Mathieu", role: "Defender" },
            { id: 25, name: "Masip", role: "Goalkeeper" },
        ];
        console.log('====== HELLO WORLD');
        console.log(controller);
        global.momo = controller;
        return _this;
    }
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            changeDetection: core_2.ChangeDetectionStrategy.OnPush
        }),
        angular_1.connect({
            myName: tags_1.state(['foo']),
            hello: tags_1.state(['hello']),
            onClick: tags_1.signal(['clicked'])
        }),
        __metadata("design:paramtypes", [core_2.ChangeDetectorRef, typeof (_a = typeof angular_1.ControllerService !== "undefined" && angular_1.ControllerService) === "function" && _a || Object, item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
    var _a;
}(angular_1.CerebralComponent));
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNDQUdzQjtBQU10QiwrQ0FBNkM7QUFDN0Msc0NBQTZDO0FBQzdDLDZDQUkwQjtBQVkxQjtJQUFvQyxrQ0FBaUI7SUEwQmpELDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLEdBQXNCLEVBQVUsVUFBNkIsRUFBVSxXQUF3QjtRQUFuSCxZQUNFLGtCQUFNLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FJdkI7UUFMbUIsU0FBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxnQkFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTNCbkgsV0FBSyxHQUFHO1lBQ04sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQzFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ25ELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDM0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNqRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQy9DLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDakQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNoRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2pELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDaEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUMzQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ3JELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNuRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQzVDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDN0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtTQUM5QyxDQUFDO1FBTUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUE7O0lBQzFCLENBQUM7SUFqQ1EsY0FBYztRQVgxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztRQUNELGlCQUFPLENBQUM7WUFDUCxNQUFNLEVBQUUsWUFBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsS0FBSyxFQUFFLFlBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxhQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QixDQUFDO3lDQTZCMkIsd0JBQWlCLHNCQUFzQiwyQkFBaUIsb0JBQWpCLDJCQUFpQixrQ0FBdUIsMEJBQVc7T0E1QjFHLGNBQWMsQ0FrQzFCO0lBQUQscUJBQUM7O0NBQUEsQUFsQ0QsQ0FBb0MsMkJBQWlCLEdBa0NwRDtBQWxDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5cbmRlY2xhcmUgY29uc3QgZ2xvYmFsXG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgc2lnbmFsLCBzdGF0ZSB9IGZyb20gJ2NlcmVicmFsL3RhZ3MnXG5pbXBvcnQge1xuICBjb25uZWN0LFxuICBDb250cm9sbGVyU2VydmljZSxcbiAgQ2VyZWJyYWxDb21wb25lbnRcbn0gZnJvbSAnQGNlcmVicmFsL2FuZ3VsYXInXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuQGNvbm5lY3Qoe1xuICBteU5hbWU6IHN0YXRlKFsnZm9vJ10pLFxuICBoZWxsbzogc3RhdGUoWydoZWxsbyddKSxcbiAgb25DbGljazogc2lnbmFsKFsnY2xpY2tlZCddKVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBleHRlbmRzIENlcmVicmFsQ29tcG9uZW50ICB7XG4gICAgaXRlbXMgPSBbXG4gICAgICB7IGlkOiAxLCBuYW1lOiBcIlRlciBTdGVnZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiUGlxdcOpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgeyBpZDogNCwgbmFtZTogXCJJLiBSYWtpdGljXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICB7IGlkOiA1LCBuYW1lOiBcIlNlcmdpb1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgeyBpZDogNiwgbmFtZTogXCJEZW5pcyBTdcOhcmV6XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICB7IGlkOiA3LCBuYW1lOiBcIkFyZGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgIHsgaWQ6IDgsIG5hbWU6IFwiQS4gSW5pZXN0YVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgeyBpZDogOSwgbmFtZTogXCJTdcOhcmV6XCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICB7IGlkOiAxMCwgbmFtZTogXCJNZXNzaVwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgICAgeyBpZDogMTEsIG5hbWU6IFwiTmV5bWFyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICB7IGlkOiAxMiwgbmFtZTogXCJSYWZpbmhhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICB7IGlkOiAxMywgbmFtZTogXCJDaWxsZXNzZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAgIHsgaWQ6IDE0LCBuYW1lOiBcIk1hc2NoZXJhbm9cIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICB7IGlkOiAxNywgbmFtZTogXCJQYWNvIEFsY8OhY2VyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICB7IGlkOiAxOCwgbmFtZTogXCJKb3JkaSBBbGJhXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgeyBpZDogMTksIG5hbWU6IFwiRGlnbmVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICB7IGlkOiAyMCwgbmFtZTogXCJTZXJnaSBSb2JlcnRvXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICB7IGlkOiAyMSwgbmFtZTogXCJBbmRyw6kgR29tZXNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgIHsgaWQ6IDIyLCBuYW1lOiBcIkFsZWl4IFZpZGFsXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICB7IGlkOiAyMywgbmFtZTogXCJVbXRpdGlcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICB7IGlkOiAyNCwgbmFtZTogXCJNYXRoaWV1XCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgICAgeyBpZDogMjUsIG5hbWU6IFwiTWFzaXBcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICBdO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGNvbnRyb2xsZXI6IENvbnRyb2xsZXJTZXJ2aWNlLCBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkge1xuICAgICAgc3VwZXIoY2RyLCBjb250cm9sbGVyKVxuICAgICAgY29uc29sZS5sb2coJz09PT09PSBIRUxMTyBXT1JMRCcpXG4gICAgICBjb25zb2xlLmxvZyhjb250cm9sbGVyKVxuICAgICAgZ2xvYmFsLm1vbW8gPSBjb250cm9sbGVyXG4gICAgfVxufSJdfQ==