import React from "react";
import { createMedia } from "@artsy/fresnel";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import {
  Visibility,
  Segment,
  Sidebar,
  Container,
  Header,
  Menu,
  Button,
  Icon,
} from "semantic-ui-react";
import { Navbar } from "./navbar";
import { MobileSidebar } from "./sidebar";

const Spacer = styled.div`
  margin-top: ${(props) => (props.mobile ? "3em" : "12em")};
`;

const StyledHeading = styled(Header)`
  font-size: ${(props) => (props.mobile ? "2em" : "4em")};
  font-weight: 500;
  color: #ffffff;
`;

const StyledSubHeading = styled(Header)`
  font-size: ${(props) => (props.mobile ? "1.5" : "1.7em")};
  font-weight: 500;
  margin-top: ${(props) => (props.mobile ? "0.5em" : "1.5em")};
  color: #ffffff;
`;

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

const DesktopContainer = (props) => {
  const { children } = props;
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
          <HomepageHeading />
        </StyledDesktopBanner>
      </Visibility>
      {children}
    </Media>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const MobileContainer = (props) => {
  const { children } = props;
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
            <HomepageHeading mobile />
          </StyledMobileBanner>

          {children}
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
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Spacer mobile={mobile} />
    <StyledHeading mobile={mobile} as="h1" inverted>
      Yvan Buggy
    </StyledHeading>

    <StyledSubHeading mobile={mobile} as="h2" inverted>
      Software Developper
    </StyledSubHeading>

    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);
