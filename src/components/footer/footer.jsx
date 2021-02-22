import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import styled from "styled-components";

import {
  StyledCopyrightIcon,
  StyledGithubIcon,
  Muted,
  Magenta,
} from "./styles";

const FooterSegment = styled(Segment)`
  &.segment {
    background: #2f303a;
    border-radius: 0;
    margin: 0;
  }
`;

const Footer = () => (
  <FooterSegment>
    <Grid columns={2}>
      <Grid.Column textAlign="right">
        <Muted>YVAN BUGGY</Muted>{" "}
        <StyledCopyrightIcon name="copyright outline" />
        <Magenta>2021</Magenta>
      </Grid.Column>
      <Grid.Column textAlign="left">
        <Muted>Website Design</Muted>
        <a
          href="https://github.com/Aviemusca/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledGithubIcon name="github" />
        </a>
      </Grid.Column>
    </Grid>
    <Divider vertical></Divider>
  </FooterSegment>
);

export default Footer;
