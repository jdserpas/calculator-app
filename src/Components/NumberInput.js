import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberInput = ({name, initialVal, ...props}) => {
  const [val, setState] = useState(initialVal);

  return(
    <div {...props}>
      <input type="number"  
        id={name}
        data-testid="input-field" 
        value={val}
        onChange={e => {
          setState(validateNumber(e.target.value));
        }}
        className="form-control p-2 m-2"
      />
    </div>
  );
};

const validateNumber = num => {
  const res = parseInt(num);
  return (isNaN(res)) ? 0 : res;
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  initialVal: PropTypes.number
};

NumberInput.defaultProps = {
  initialVal: 0 
};

export default NumberInput;