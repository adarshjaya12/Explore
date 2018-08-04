"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("es6-promise");
var react_dom_1 = require("react-dom");
var React = require("react");
var place_container_1 = require("./place-container");
var app = React.createElement(place_container_1.default);
var appMount = document.getElementById('app');
react_dom_1.render(app, appMount);
//# sourceMappingURL=place.js.map