import React, { useState } from "react";

const NumberInput = () => {
  const [val, setState] = useState(0);

  return(
    <div>
      <input type="number"  
        data-testid="input-field" 
        value={val}
        onChange={e => {
          setState(validateNumber(e.target.value));
        }}
      />
    </div>
  );
};

const validateNumber = num => {
  const res = parseInt(num);
  return (isNaN(res)) ? 0 : res;
};

export default NumberInput;