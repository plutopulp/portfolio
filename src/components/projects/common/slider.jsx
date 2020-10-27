import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const Slider = ({ media, onTransition }) => (
  <AwesomeSlider animation="cubeAnimation" onTransitionEnd={onTransition}>
    {media.map((item, index) => (
      <div key={index}>
        <SliderPanel
          type={item.type}
          source={item.source}
          padding={item.padding}
        />
      </div>
    ))}
  </AwesomeSlider>
);

Slider.propTypes = {
  media: PropTypes.objectOf(PropTypes.string).isRequired,
};

const SliderPanel = ({ type, source, padding }) => {
  switch (type) {
    case "image":
      return <ImagePanel source={source} padding={padding} />;
    case "video":
      return <VideoPanel source={source} padding={padding} />;
    default:
      throw new Error(`Media type ${type} not recognized.`);
  }
};

SliderPanel.propTypes = {
  type: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

const ImagePanel = ({ source, padding }) => (
  <div style={{ padding }}>
    <TransformWrapper defaultScale={1} options={{ limitToBounds: true }}>
      <TransformComponent>
        <Image src={source} alt="test" />
      </TransformComponent>
    </TransformWrapper>
  </div>
);

ImagePanel.propTypes = {
  source: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

const VideoPanel = ({ source, padding }) => (
  <video
    style={{ padding }}
    class="video-js"
    controls
    preload="auto"
    width="100%"
  >
    <source src={source} type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank">
        supports HTML5 video
      </a>
    </p>
  </video>
);

VideoPanel.propTypes = {
  ...ImagePanel.propTypes,
};
