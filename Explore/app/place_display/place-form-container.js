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
var address_autocomplete_display_1 = require("./address-autocomplete-display");
var PlaceFormContainer = /** @class */ (function (_super) {
    __extends(PlaceFormContainer, _super);
    function PlaceFormContainer(props) {
        return _super.call(this, props) || this;
    }
    PlaceFormContainer.prototype.goeClick = function () {
        var cityDescription = this.props.geoLocation();
        var input = this.refs.autoCompletePlaces;
        if (input != '') {
            input.value = this.props.cityDescription;
        }
    };
    PlaceFormContainer.prototype.handleInputChange = function (eve) {
        var inputText = eve.target.value;
        this.props.handleInput(inputText);
    };
    PlaceFormContainer.prototype.handleButtonClick = function () {
        this.props.buttonSubmit();
        return false;
    };
    PlaceFormContainer.prototype.selectedFromAutofill = function (placeId) {
        var cityDescription = this.props.googleAutoCompleteSelect(placeId);
        var input = this.refs.autoCompletePlaces;
        if (input != undefined) {
            input.value = cityDescription;
        }
    };
    PlaceFormContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", id: "autocomplete-text", placeholder: "Enter the city", onChange: this.handleInputChange.bind(this), ref: "autoCompletePlaces" }),
            React.createElement("button", { onClick: this.goeClick.bind(this) }, "Geo"),
            React.createElement("div", null, (this.props.displayDropDown) ?
                (React.createElement("ul", { className: "auto-complete-list" }, this.props.autoCompleteList.map(function (item) {
                    return React.createElement(address_autocomplete_display_1.default, { selectedFromAutofill: _this.selectedFromAutofill.bind(_this), list: item });
                })))
                :
                    (React.createElement("div", null))),
            React.createElement("button", { type: "button", className: "form-container-button", onClick: this.handleButtonClick.bind(this) }, "Submit")));
    };
    return PlaceFormContainer;
}(React.Component));
exports.default = PlaceFormContainer;
//# sourceMappingURL=place-form-container.js.map