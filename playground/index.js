"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * This is only for local test
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_3 = require("@agm/core");
var agm_direction_1 = require("agm-direction");
var AppComponent = (function () {
    function AppComponent() {
        this.lat = 24.799448;
        this.lng = 120.979021;
        this.zoom = 14;
        this.dir = undefined;
    }
    AppComponent.prototype.getDirection = function () {
        this.dir = {
            origin: { lat: 24.799448, lng: 120.979021 },
            destination: { lat: 24.799524, lng: 120.975017 }
        };
    };
    AppComponent = __decorate([
        core_2.Component({
            selector: 'app',
            template: "\n  <h1>Agm-Direction Playground - <a href=\"https://github.com/explooosion/Agm-Direction\" target=\"_blank\">Github</a></h1>\n  <button type=\"button\" (click)=\"getDirection()\">Get</button>\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-direction *ngIf=\"dir\" [origin]=\"dir.origin\" [destination]=\"dir.destination\"></agm-direction>\n  </agm-map>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [AppComponent],
            declarations: [AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                core_3.AgmCoreModule.forRoot({
                    apiKey: ''
                }),
                agm_direction_1.SampleModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
