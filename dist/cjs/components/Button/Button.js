"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Button = (_a) => {
    var { label, rounded = false, background } = _a, props = __rest(_a, ["label", "rounded", "background"]);
    return (react_1.default.createElement(ButtonComponent, Object.assign({ rounded: rounded }, props), label));
};
exports.Button = Button;
const ButtonComponent = styled_components_1.default.button `
    background: ${({ background }) => background && background};
    border-radius: ${(props) => props.rounded && '10px'};
    padding: 10px;
`;
//# sourceMappingURL=Button.js.map