import React from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

import { BodyHeader, OpacityAndTranslateX } from "../common/styles/index";

export const Header = ({ mobile }) => {
  const [triggerHeader, headerRef] = useScrollTrigger(false);
  return (
    <OpacityAndTranslateX
      trigger={triggerHeader}
      ref={headerRef}
      distance="-10em"
    >
      <BodyHeader as="h1" mobile={mobile}>
        Skills
      </BodyHeader>
    </OpacityAndTranslateX>
  );
};

Header.propTypes = {
  mobile: PropTypes.bool,
};
