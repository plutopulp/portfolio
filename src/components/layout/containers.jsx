import React from "react";
import { createMedia } from "@artsy/fresnel";
import { PropTypes } from "prop-types";
import { Visibility, Sidebar, Container, Menu, Icon } from "semantic-ui-react";

import { useToggle } from "../../hooks/useToggle";
import Navbar from "./navbar";
import { MobileSidebar } from "./sidebar";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// Split Landing from the rest as inject Navbar/Sidebar into Landing
export const DesktopContainer = ({ landing, body }) => {
  const [fixed, handleToggle] = useToggle(false);
  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={handleToggle}
        onBottomPassedReverse={handleToggle}
      >
        {/* Clone landing and pass Navbar as child */}
        {React.cloneElement(
          landing,
          { mobile: false },
          <Navbar fixed={fixed} />
        )}
      </Visibility>
      {React.Children.map(body, (child) =>
        React.cloneElement(child, { mobile: false })
      )}
    </Media>
  );
};

DesktopContainer.propTypes = {
  landing: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export const MobileContainer = ({ landing, body }) => {
  const [sidebar, handleToggle] = useToggle(false);
  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <MobileSidebar onHide={handleToggle} open={sidebar} />
        <Sidebar.Pusher dimmed={sidebar}>
          {/* Clone landing and pass Sidebar as child */}
          {React.cloneElement(
            landing,
            { mobile: true },
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          )}
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

export const ResponsiveContainer = ({ landing, body }) => (
  <MediaContextProvider>
    <DesktopContainer landing={landing} body={body} />
    <MobileContainer landing={landing} body={body} />
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  ...DesktopContainer.propTypes,
};
