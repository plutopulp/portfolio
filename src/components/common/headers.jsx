import React from "react";
import PropTypes from "prop-types";

import { BodyHeader, OpacityAndTranslateX } from "../common/styles/index";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

export const Header = ({ title, mobile, color }) => {
  const [triggerHeader, headerRef] = useScrollTrigger(false);
  return (
    <OpacityAndTranslateX
      trigger={triggerHeader}
      ref={headerRef}
      distance="-10em"
    >
      <BodyHeader as="h1" mobile={mobile} color={color}>
        {title}
      </BodyHeader>
    </OpacityAndTranslateX>
  );
};

Header.propTypes = {
  mobile: PropTypes.bool,
};
