"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise/auto");
var React = require("react");
var fetch = require("isomorphic-fetch");
var place_form_container_1 = require("./place-form-container");
var place_list_container_1 = require("./place-list-container");
var PlaceContainer = /** @class */ (function (_super) {
    __extends(PlaceContainer, _super);
    function PlaceContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            autoCompleteFillList: new Array(),
            nearBySearchList: new Array(),
            latitude: '',
            longitude: '',
            displayDropDown: false,
            cityDescription: '',
            displaySearchList: false,
        };
        return _this;
    }
    PlaceContainer.prototype.fetchFromAPIForInputChange = function (apiUrl) {
        var _this = this;
        fetch(apiUrl).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(function (body) {
            _this.setState({
                autoCompleteFillList: body,
                displayDropDown: true
            });
        });
    };
    PlaceContainer.prototype.handleInputChange = function (inputText) {
        var autoCompleteUrl = "/Home/GetAutoFillCities?input=" + inputText;
        this.fetchFromAPIForInputChange(autoCompleteUrl);
    };
    PlaceContainer.prototype.buttonSubmit = function () {
        var _this = this;
        var latitude = this.state.latitude;
        var longitude = this.state.longitude;
        var url = "/Home/Submit?&latitude=" + latitude + "&longitude=" + longitude;
        fetch(url).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(function (body) {
            _this.setState({
                nearBySearchList: body,
                displaySearchList: true
            });
        });
        return false;
    };
    PlaceContainer.prototype.fetchGeoLocation = function (apiUrl) {
        var _this = this;
        fetch(apiUrl).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(function (body) {
            var description = body.city + ', ' + body.state + ', ' + body.country;
            _this.setState({
                autoCompleteFillList: new Array(),
                cityDescription: description
            });
        });
    };
    PlaceContainer.prototype.geolocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.success.bind(this));
        }
        else {
        }
    };
    PlaceContainer.prototype.fetchLatLong = function (apiurl) {
        var _this = this;
        fetch(apiurl).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
            }
            return response.json();
        }).then(function (body) {
            _this.setState({
                latitude: body.latitude,
                longitude: body.longitude
            });
        });
    };
    PlaceContainer.prototype.googleAutoCompleteSelect = function (placeId) {
        var autoPlace = this.state.autoCompleteFillList.filter(function (it) { return it.place_id == placeId; });
        var apiurl = '/Home/GetLatAndLong?place_id=' + placeId;
        if (autoPlace.length > 0) {
            this.setState({
                autoCompleteFillList: new Array(),
            });
            this.fetchLatLong(apiurl);
            return autoPlace[0].description;
        }
        return "";
    };
    PlaceContainer.prototype.success = function (position) {
        var lat = this.state.latitude;
        var long = this.state.longitude;
        var goeLocationUrl = "/Home/GetGeoLocation?latitude=" + lat + "&longitude=" + long;
        this.fetchGeoLocation(goeLocationUrl);
    };
    PlaceContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(place_form_container_1.default, { geoLocation: this.geolocation.bind(this), handleInput: this.handleInputChange.bind(this), googleAutoCompleteSelect: this.googleAutoCompleteSelect.bind(this), autoCompleteList: this.state.autoCompleteFillList, displayDropDown: this.state.displayDropDown, cityDescription: this.state.cityDescription, buttonSubmit: this.buttonSubmit.bind(this) })),
            React.createElement("div", null, (this.state.displaySearchList) ?
                React.createElement(place_list_container_1.default, { nearBySearchList: this.state.nearBySearchList })
                :
                    React.createElement("div", null))));
    };
    return PlaceContainer;
}(React.Component));
exports.default = PlaceContainer;
//# sourceMappingURL=place-container.js.map