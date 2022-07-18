import React from "react";
import PropTypes from "prop-types";

import Icon from "@/Icons";
import { availableVariables, iconLayouts } from "@/Icons/Icon.utils";

import CircleAnimated from "./CircleAnimated";

const Loading = ({ label, icon, iconLayout = "solid" }) => (
  <div className="flex items-center gap-x-xxs">
    <div className="lg:w-xxl lg:h-xxl w-xl h-xl relative">
      <CircleAnimated duration={5} color="brand-accent-blue" barLong={30} />
      <CircleAnimated
        duration={5}
        startDelay={1.5}
        color="brand-accent-yellow"
        barLong={20}
      />
      <CircleAnimated
        duration={5}
        startDelay={2.5}
        color="brand-accent-green"
        barLong={10}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Icon layout={iconLayout} name={icon} size="sm" />
      </div>
    </div>
    <span className="body-3-density-3 font-bold">{label}</span>
  </div>
);

Loading.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.oneOf(availableVariables),
  iconLayout: PropTypes.oneOf(iconLayouts),
};

export default Loading;
