import React from "react";
import PropTypes from "prop-types";
import WorldFlag from "react-world-flags";
import { countryMappings as COUNTRY_MAPPINGS } from "../../Constants";

const Flag = ({ country, ...others }) => {
  if (!COUNTRY_MAPPINGS[country]) {
    return null;
  }

  return (
    <WorldFlag
      code={COUNTRY_MAPPINGS[country]}
      fallback={<span>{country}</span>}
      title={country}
      {...others}
    />
  );
};

Flag.propTypes = {
  country: PropTypes.string
};

export default Flag;
