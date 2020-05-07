import React, {lazy, useState} from "react";

const TypedComponent = lazy(() => import("./TypedComponent"));

export default function LazyComponent() {
  const [state, setState] = useState("blah");

  return (
    <TypedComponent value={state} valueCallback={setState}/>
  );
}
