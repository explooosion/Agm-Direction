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
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_3 = require("@agm/core");
var dist_1 = require("../dist");
var AppComponent = (function () {
    function AppComponent() {
        this.lat = 24.799448;
        this.lng = 120.979021;
        this.zoom = 14;
        this.origin = { lat: 24.799448, lng: 120.979021 };
        this.destination = { lat: 24.799524, lng: 120.975017 };
        this.origin1 = { lat: 24.798448, lng: 120.972021 };
        this.destination1 = { lat: 24.789524, lng: 120.972017 };
        this.renderOptions = {
            suppressMarkers: true
        };
        this.markerOptions = {
            origin: {
                icon: 'https://i.imgur.com/7teZKif.png'
            },
            destination: {
                icon: 'https://i.imgur.com/7teZKif.png',
                infoWindow: "\n      <h4>Hello<h4>\n      <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>\n      "
            }
        };
        this.infoWindow = undefined;
    }
    AppComponent.prototype.dirChange = function (event) {
        console.log(event);
    };
    AppComponent.prototype.obtainInfowindow = function (window) {
        this.infoWindow = window;
    };
    AppComponent = __decorate([
        core_2.Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
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
                forms_1.FormsModule,
                core_3.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI'
                }),
                dist_1.AgmDirectionModule
            ]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
