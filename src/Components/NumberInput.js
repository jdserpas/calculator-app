import React, { useState } from "react";

const NumberInput = () => {
  const [val, setState] = useState(0);

  return(
    <div>
      <input type="number"  data-testid="input-field" value={val}/>
    </div>
  );
};

export default NumberInput;