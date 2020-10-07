import React from "react";
import { createMedia } from "@artsy/fresnel";
import { PropTypes } from "prop-types";
import {
  Visibility,
  Sidebar,
  Container,
  Menu,
  Button,
  Icon,
} from "semantic-ui-react";

import { useToggle } from "../../hooks/useToggle";
import Navbar from "./navbar";
import { MobileSidebar } from "./sidebar";

import {
  StyledDesktopBanner,
  StyledMobileBanner,
  Circle,
} from "../common/styles/index";

import styled from "styled-components";
const PlaceCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const getCircleDiameter = () => window.innerWidth * 0.1;
export const DesktopContainer = (props) => {
  const { heading, body } = props;
  const [fixed, handleToggle] = useToggle(false);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={handleToggle}
        onBottomPassedReverse={handleToggle}
      >
        <StyledDesktopBanner inverted vertical>
          <Navbar fixed={fixed} />
          <Circle color="#AC2CAC30" diameter="15vw" left="80%" />
          <Circle color="#25779530" diameter="10vw" left="5%" top="75%" />
          <Circle color="#4C4CD530" diameter="5vw" left="20%" top="20%" />
          <Circle color="#4C4CD530" diameter="5vw" left="70%" top="70%" />
          <PlaceCenter>{heading}</PlaceCenter>
        </StyledDesktopBanner>
      </Visibility>
      {body}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export const MobileContainer = ({ heading, body }) => {
  const [sidebar, handleToggle] = useToggle(false);

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <MobileSidebar onHide={handleToggle} open={sidebar} />
        <Sidebar.Pusher dimmed={sidebar}>
          <StyledMobileBanner inverted vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <PlaceCenter>
              {React.cloneElement(heading, { mobile: true })}
            </PlaceCenter>
          </StyledMobileBanner>
          {body}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export const ResponsiveContainer = ({ heading, body }) => (
  <MediaContextProvider>
    <DesktopContainer heading={heading} body={body} />
    <MobileContainer heading={heading} body={body} />
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};
