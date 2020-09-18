import styled from "styled-components";
import { Header } from "semantic-ui-react";

export const SpacerLg = styled.div`
  margin-top: ${(props) => (props.mobile ? "3em" : "12em")};
`;

export const StyledHeading = styled(Header)`
  font-size: ${(props) => (props.mobile ? "2em" : "4em")};
  font-weight: 500;
  color: #ffffff;
`;

export const StyledSubHeading = styled(Header)`
  font-size: ${(props) => (props.mobile ? "1.5" : "1.7em")};
  font-weight: 500;
  margin-top: ${(props) => (props.mobile ? "0.5em" : "1.5em")};
  color: #ffffff;
`;
