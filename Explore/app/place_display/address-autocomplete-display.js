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
var AutoCompleteDisplay = /** @class */ (function (_super) {
    __extends(AutoCompleteDisplay, _super);
    function AutoCompleteDisplay(props) {
        return _super.call(this, props) || this;
    }
    AutoCompleteDisplay.prototype.updateSelectedCity = function (e) {
        e.preventDefault();
        var placeId = e.currentTarget.attributes["value"].value;
        this.props.selectedFromAutofill(placeId);
    };
    AutoCompleteDisplay.prototype.render = function () {
        return (React.createElement("li", { key: this.props.list.place_id, value: this.props.list.place_id, onClick: this.updateSelectedCity.bind(this) },
            React.createElement("a", { href: "#" }, this.props.list.description)));
    };
    return AutoCompleteDisplay;
}(React.Component));
exports.default = AutoCompleteDisplay;
//# sourceMappingURL=address-autocomplete-display.js.map