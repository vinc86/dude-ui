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
import React from 'react';
import styled from 'styled-components';
export const Button = (_a) => {
    var { label, rounded = false, background } = _a, props = __rest(_a, ["label", "rounded", "background"]);
    return (React.createElement(ButtonComponent, Object.assign({ rounded: rounded }, props), label));
};
const ButtonComponent = styled.button `
    background: ${({ background }) => background && background};
    border-radius: ${(props) => props.rounded && '10px'};
    padding: 10px;
`;
//# sourceMappingURL=Button.js.map