import React from "react";
import { createMedia } from "@artsy/fresnel";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import {
  Visibility,
  Segment,
  Sidebar,
  Container,
  Menu,
  Button,
  Icon,
} from "semantic-ui-react";
import Navbar from "./navbar";
import { MobileSidebar } from "./sidebar";

const StyledDesktopBanner = styled(Segment)`
  text-align: center;
  min-height: 700px;
  padding: 1em 0em;
`;

const StyledMobileBanner = styled(Segment)`
  text-align: center;
  min-height: 350px;
  padding: 1em 0em;
`;

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export const DesktopContainer = (props) => {
  const { heading, body } = props;
  const [fixed, setFixed] = React.useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <StyledDesktopBanner inverted vertical>
          <Navbar fixed={fixed} />
          {heading}
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
  const [sidebarOpened, setSidebarOpened] = React.useState(false);

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <MobileSidebar onHide={handleSidebarHide} open={sidebarOpened} />

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <StyledMobileBanner inverted vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            {React.cloneElement(heading, { mobile: true })}
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
