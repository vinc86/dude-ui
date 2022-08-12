import React from "react";
import { Button } from "./components/Button";

export const App = () => {
  return (
    <div>
      <Button
        size="small"
        rounded
        color="carrot"
        onClick={() => alert("works")}
        label="Save"
      />
    </div>
  );
};
