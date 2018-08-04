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
var PlaceListContainer = /** @class */ (function (_super) {
    __extends(PlaceListContainer, _super);
    function PlaceListContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            nearByTypeList: new Array(),
            displayList: new Array(),
            typeSelected: 'default'
        };
        return _this;
    }
    PlaceListContainer.prototype.componentDidMount = function () {
        this.setMountData();
    };
    PlaceListContainer.prototype.setMountData = function () {
        var _this = this;
        var typeStrings = this.props.nearBySearchList.map(function (x) { return x.Type; });
        var result = new Array();
        var filteredResult = undefined;
        if (this.state.typeSelected == 'default')
            filteredResult = this.props.nearBySearchList[0];
        else
            filteredResult = this.props.nearBySearchList.filter(function (x) { return x.Type == _this.state.typeSelected; })[0];
        filteredResult.TypeResult.forEach(function (element) {
            element.Result.forEach(function (item) {
                result.push(item);
            });
        });
        this.setState({
            nearByTypeList: typeStrings,
            displayList: result
        });
    };
    PlaceListContainer.prototype.dropdownChange = function (e) {
        var typeSelectedValue = e.target.value;
        this.setState({
            typeSelected: typeSelectedValue
        });
        this.setMountData();
    };
    PlaceListContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("select", { onChange: this.dropdownChange.bind(this), value: this.state.typeSelected }, this.state.nearByTypeList.map(function (item) {
                    return React.createElement("option", { key: item, value: item }, item);
                }))),
            React.createElement("div", null,
                React.createElement("ul", { className: "auto-complete-list" }, this.state.displayList.map(function (item) {
                    return React.createElement("li", null,
                        React.createElement("p", null, item.Name));
                })))));
    };
    return PlaceListContainer;
}(React.Component));
exports.default = PlaceListContainer;
//# sourceMappingURL=place-list-container.js.map