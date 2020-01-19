import React from "react";

const Icon = ({ className, id }) => {
  const svgClass = `${className} ${id}`;

  switch (id) {
    case "ellipsis":
      return (
        <svg className={svgClass} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="84" cy="50" r="0.1645" className="dot1">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.2s"
              calcMode="spline"
              keyTimes="0;1"
              values="10;0"
              keySplines="0 0.5 0.5 1"
              begin="0s"
            ></animate>
            <animate
              attributeName="fill"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="discrete"
              keyTimes="0;0.25;0.5;0.75;1"
              begin="0s"
            ></animate>
          </circle>
          <circle cx="16" cy="50" r="9.8355" className="dot2">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="0s"
            ></animate>
          </circle>
          <circle cx="49.4407" cy="50" r="10" className="dot3">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.2s"
            ></animate>
          </circle>
          <circle cx="83.4407" cy="50" r="10" className="dot4">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.4s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.4s"
            ></animate>
          </circle>
          <circle cx="16" cy="50" r="0" className="dot5">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="0;0;10;10;10"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.6s"
            ></animate>
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              values="16;16;16;50;84"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              begin="-0.6s"
            ></animate>
          </circle>
        </svg>
      );
    case "spinner":
      return (
        <svg className={svgClass} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle
            cx="50"
            cy="50"
            fill="none"
            strokeWidth="5"
            r="21"
            strokeDasharray="98.96016858807849 34.98672286269283"
            transform="rotate(187.264 50 50)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="0.3717472118959108s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
