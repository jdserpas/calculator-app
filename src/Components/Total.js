import React from "react";
import PropTypes from "prop-types";

const Total = ({total, ...props}) => {
  return(
    <div {...props}>
      <h2 data-testid="total" className="text-center">{total}</h2>
    </div>
  );
};

Total.propTypes = {
  total: PropTypes.number
};

export default Total;