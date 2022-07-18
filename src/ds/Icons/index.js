import React from "react";

import PropTypes from "prop-types";
import * as IconsSolid from "@heroicons/react/solid";
import * as IconsOutline from "@heroicons/react/outline";

import { Sizes, Heights, Widths } from "@/Sizes";
import { availableVariables, iconLayouts } from "./Icon.utils";

const Icons = {
  solid: IconsSolid,
  outline: IconsOutline,
};

const Icon = ({ name, layout = "solid", size = "sm" }) => {
  if (!Icons[layout][name]) return "";
  const IconElement = Icons[layout][name];
  return (
    <IconElement
      className={`${Heights[size || "md"]} ${Widths[size || "md"]}`}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(availableVariables),
  size: PropTypes.oneOf(Object.keys(Sizes)),
  layout: PropTypes.oneOf(iconLayouts),
};
Icon.availableVariables = availableVariables;

export default Icon;
