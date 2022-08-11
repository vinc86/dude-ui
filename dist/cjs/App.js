"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("./components/Button");
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.Button, { rounded: true, background: "yellow", onClick: () => alert('works'), label: "Save" })));
};
exports.App = App;
//# sourceMappingURL=App.js.map