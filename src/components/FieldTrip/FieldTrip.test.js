import React from "react";
import ReactDOM from "react-dom";
import FieldTrip from "./FieldTrip";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FieldTrip />, div);
  ReactDOM.unmountComponentAtNode(div);
});
