import React from "react";

export interface Props<T> {
  value: T;
  valueCallback: (t: T) => void;
}

export default function TypedComponent<T>(props: Props<T>) {
  return (
    <>
      <div>{`${props.value}`}</div>
      <button onClick={() => props.valueCallback(props.value)}>click</button>
    </>
  )
}
