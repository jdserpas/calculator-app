import React from "react";
import PropTypes from "prop-types";

const Total = ({total}) => {
  return(
    <>
      <h2 data-testid="total" >{total}</h2>
    </>
  );
};

Total.propTypes = {
  total: PropTypes.number
};

export default Total;