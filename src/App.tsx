import React from "react";
import { Button } from "./components";
import { Text } from "./components/Text";
import { Calendar } from "./components/Calendar";
export const App = () => {
  return (
    <div>
      <Text separator subtitleContent="our services">
        hello
      </Text>
      <Button outlined rounded color="pumpkin" label="Save" />
      <Calendar />
    </div>
  );
};
