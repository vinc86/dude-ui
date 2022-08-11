import React from 'react';
import { Button } from './components/Button';
export const App = () => {
    return (React.createElement("div", null,
        React.createElement(Button, { rounded: true, background: "yellow", onClick: () => alert('works'), label: "Save" })));
};
//# sourceMappingURL=App.js.map