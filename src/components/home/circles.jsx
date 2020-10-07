import React from "react";

import { SpiralCircle, Circle } from "../common/styles/circles";

const initialAngles = ["0deg", "120deg", "240deg"];
const twists = ["360deg", "720deg", "1080deg"];

const spiralCircleProps = [];
initialAngles.forEach((angle) => {
  twists.forEach((twist) => spiralCircleProps.push({ angle, twist }));
});

const SpiralCircles = () => (
  <React.Fragment>
    {spiralCircleProps.map((prop) => (
      <SpiralCircle
        initialAngle={prop.angle}
        twist={prop.twist}
        diameter="1vw"
        color="white"
        left="50%"
        top="47%"
      />
    ))}
  </React.Fragment>
);

const StaticCircles = () => (
  <React.Fragment>
    <Circle color="#AC2CAC30" diameter="15vw" left="80%" />
    <Circle color="#25779530" diameter="10vw" left="5%" top="75%" />
    <Circle color="#4C4CD530" diameter="5vw" left="20%" top="20%" />
    <Circle color="#4C4CD530" diameter="5vw" left="70%" top="70%" />
  </React.Fragment>
);
export { SpiralCircles, StaticCircles };
