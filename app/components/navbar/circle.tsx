// components/Circle.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface CircleProps {
  color: string;
}

const Circle: React.FC<CircleProps> = ({ color }) => {
  const circleStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  };

  return <div style={circleStyle}></div>;
};

export default Circle;
