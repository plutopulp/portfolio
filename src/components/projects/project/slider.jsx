import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const StyledImage = styled(Image)`
  &.ui.image {
    width: 90%;
    margin: auto;
  }
`;

export const Slider = ({ media }) => (
  <AwesomeSlider animation="cubeAnimation">
    {media.map((item) => (
      <div key={uuid()}>
        <SliderPanel
          type={item.type}
          source={item.source}
          padding={item.padding}
        />
      </div>
    ))}
  </AwesomeSlider>
);

const SliderPanel = ({ type, source, padding }) => {
  switch (type) {
    case "image":
      return (
        <div style={{ padding }}>
          <TransformWrapper defaultScale={1}>
            <TransformComponent>
              <StyledImage src={source} alt="test" />
            </TransformComponent>
          </TransformWrapper>
        </div>
      );
    case "video":
      return (
        <video
          style={{ padding }}
          class="video-js"
          controls
          preload="auto"
          width="100%"
          height="60%"
        >
          <source src={source} type="video/mp4" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
      );
    default:
      throw new Error(`Media type ${type} not recognized.`);
  }
};
