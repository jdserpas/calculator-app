import React from "react";
import PropTypes from "prop-types";

function Selector({name, options}) {
  const ops = options.map((op) => 
    <option key={op.key} value={op.value}>
      {op.value}
    </option>
  );
  
  return(
    <>
      <select data-testid="drop-down" id={name}>
        {ops}
      </select>
    </>
  );
}

Selector.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array
};

Selector.defaultProps = {
  options: [
    {value: "plus",
      key: 1},
    {value: "minus",
      key: 2}
  ]
};

export default Selector;