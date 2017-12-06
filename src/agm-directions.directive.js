"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var AgmDirection = (function () {
    function AgmDirection(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.waypoints = [];
        this.travelMode = 'DRIVING';
        this.optimizeWaypoints = true;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = undefined;
    }
    AgmDirection.prototype.ngOnInit = function () {
        this.directionDraw();
    };
    AgmDirection.prototype.ngOnChanges = function () {
        this.directionDraw();
    };
    /**
     * This event is fired when the user creating or updating this direction
     */
    AgmDirection.prototype.directionDraw = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (typeof _this.directionsDisplay === 'undefined') {
                _this.directionsDisplay = new google.maps.DirectionsRenderer;
                _this.directionsDisplay.setMap(map);
            }
            _this.directionsService.route({
                origin: _this.origin,
                destination: _this.destination,
                waypoints: _this.waypoints,
                optimizeWaypoints: _this.optimizeWaypoints,
                travelMode: _this.travelMode
            }, function (response, status) {
                if (status === 'OK') {
                    _this.directionsDisplay.setDirections(response);
                }
            });
        });
    };
    return AgmDirection;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AgmDirection.prototype, "origin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AgmDirection.prototype, "destination", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AgmDirection.prototype, "waypoints", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AgmDirection.prototype, "travelMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AgmDirection.prototype, "optimizeWaypoints", void 0);
AgmDirection = __decorate([
    core_1.Directive({
        selector: 'agm-direction'
    }),
    __metadata("design:paramtypes", [core_2.GoogleMapsAPIWrapper])
], AgmDirection);
exports.AgmDirection = AgmDirection;
//# sourceMappingURL=agm-directions.directive.js.map