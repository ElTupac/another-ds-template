import React from "react";
import PropTypes from "prop-types";

const CircleAnimated = ({
  duration = 1,
  barLong = 10,
  startDelay = 0,
  color = "main-100",
}) => {
  const className = "lg:w-xxl lg:h-xxl w-xl h-xl";

  return (
    <div className="absolute">
      <svg className={`${className} loader-component absolute stroke-${color}`}>
        <g>
          <circle
            strokeWidth="2"
            fill="none"
            style={{
              "--animation-duration": `${duration}s`,
              "--animation-delay": `${startDelay}s`,
              "--bar-long-mobile": 112 - barLong,
              "--bar-long-desktop": 144 - barLong,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

CircleAnimated.propTypes = {
  duration: PropTypes.number,
  barLong: PropTypes.number,
  startDelay: PropTypes.number,
  color: PropTypes.string,
};

export default CircleAnimated;
