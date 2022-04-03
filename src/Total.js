import React from "react";

export default function Total(props) {
  return(
    <>
      <h6 data-testid="total" >{props.total}</h6>
    </>
  );
}