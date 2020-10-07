import React from "react";
import { createMedia } from "@artsy/fresnel";
import { PropTypes } from "prop-types";
import { Visibility, Sidebar, Container, Menu, Icon } from "semantic-ui-react";

import { useToggle } from "../../hooks/useToggle";
import Navbar from "./navbar";
import { MobileSidebar } from "./sidebar";

import {
  StyledDesktopBanner,
  StyledMobileBanner,
} from "../common/styles/index";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export const DesktopContainer = ({ children }) => {
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
          {children}
        </StyledDesktopBanner>
      </Visibility>
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export const MobileContainer = ({ children }) => {
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
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { mobile: true })
            )}
          </StyledMobileBanner>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer children={children} />
    <MobileContainer children={children} />
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};
