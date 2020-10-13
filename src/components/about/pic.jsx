import React from "react";
import PropTypes from "prop-types";
import { Grid, Image } from "semantic-ui-react";

import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { OpacityAndTranslateX } from "../common/styles/index";

export const Pic = ({ mobile }) => {
  const [triggerImage, imageRef] = useScrollTrigger(false);
  return (
    <Grid.Column floated="right" width={6}>
      <OpacityAndTranslateX
        trigger={triggerImage}
        ref={imageRef}
        distance="10em"
      >
        <Image circular rounded size="large" src="../../media/HeadShot.jpg" />
      </OpacityAndTranslateX>
    </Grid.Column>
  );
};

Pic.propTypes = {
  mobile: PropTypes.bool,
};
