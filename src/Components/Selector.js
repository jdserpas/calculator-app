import React from "react";
import PropTypes from "prop-types";

function Selector({name, options, ...props}) {
  const ops = options.map((op) => 
    <option key={op.key} value={op.value}>
      {op.value}
    </option>
  );
  
  return(
    <div {...props} >
      <select data-testid="drop-down" 
        id={name} 
        className="form-select">
        {ops}
      </select>
    </div>
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