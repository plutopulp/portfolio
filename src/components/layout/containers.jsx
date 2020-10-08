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

export const DesktopContainer = ({ bannerChildren, body, bannerHeight }) => {
  const [fixed, handleToggle] = useToggle(false);
  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={handleToggle}
        onBottomPassedReverse={handleToggle}
      >
        <StyledDesktopBanner inverted vertical height={bannerHeight}>
          <Navbar fixed={fixed} />
          {bannerChildren}
        </StyledDesktopBanner>
      </Visibility>
      {React.Children.map(body, (child) =>
        React.cloneElement(child, { mobile: false })
      )}
    </Media>
  );
};

DesktopContainer.propTypes = {
  bannerChildren: PropTypes.node,
  body: PropTypes.node.isRequired,
  bannerHeight: PropTypes.number.isRequired,
};

export const MobileContainer = ({ bannerChildren, body, bannerHeight }) => {
  const [sidebar, handleToggle] = useToggle(false);
  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <MobileSidebar onHide={handleToggle} open={sidebar} />
        <Sidebar.Pusher dimmed={sidebar}>
          <StyledMobileBanner inverted vertical height={bannerHeight}>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>

            {/* Should consider flattening bannerChildren instead */}
            {React.Children.map(bannerChildren.props.children, (child) =>
              React.cloneElement(child, { mobile: true })
            )}
          </StyledMobileBanner>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      {React.Children.map(body, (child) =>
        React.cloneElement(child, { mobile: true })
      )}
    </Media>
  );
};

MobileContainer.propTypes = {
  ...DesktopContainer.propTypes,
};

export const ResponsiveContainer = ({ bannerChildren, body, bannerHeight }) => (
  <MediaContextProvider>
    <DesktopContainer
      bannerHeight={bannerHeight}
      bannerChildren={bannerChildren}
      body={body}
    />
    <MobileContainer
      bannerHeight={bannerHeight}
      bannerChildren={bannerChildren}
      body={body}
    />
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  ...DesktopContainer.propTypes,
};
