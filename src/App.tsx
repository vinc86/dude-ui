import React from "react";
import Button from "./components/Button";

export const App = () => {
  return (
    <div>
      <Button
        rounded
        background="yellow"
        onClick={() => alert("works")}
        label="Save"
      />
    </div>
  );
};
