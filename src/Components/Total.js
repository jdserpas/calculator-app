import React from "react";
import PropTypes from "prop-types";

const Total = ({total}) => {
  return(
    <>
      <h6 data-testid="total" >{total}</h6>
    </>
  );
};

Total.propTypes = {
  total: PropTypes.number
};

export default Total;