import React from "react";
import WorldFlag from "react-world-flags";
import { countryMappings as COUNTRY_MAPPINGS } from "../../Constants";

const Flag = ({ country, ...others }) => (
  <WorldFlag
    code={COUNTRY_MAPPINGS[country]}
    fallback={<span>{country}</span>}
    {...others}
  />
);

export default Flag;
