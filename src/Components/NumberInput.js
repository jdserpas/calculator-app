import React, { useState } from "react";

const NumberInput = () => {
  const [val, setState] = useState(0);

  return(
    <div>
      <input type="number"  
        data-testid="input-field" 
        value={val}
        onChange={e => {
          setState(e.target.value);
        }}
      />
    </div>
  );
};

export default NumberInput;