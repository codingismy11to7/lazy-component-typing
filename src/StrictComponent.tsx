import React, {useState} from "react";
import TypedComponent from "./TypedComponent";

export default function StrictComponent() {
  const [state, setState] = useState("blah");

  return (
    <TypedComponent value={state} valueCallback={setState}/>
  );
}
