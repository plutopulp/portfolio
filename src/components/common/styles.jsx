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

export const Transition = styled.div`
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-delay: 50ms;
  &:hover {
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-delay: 50ms;
  }
`;
export const StyledCircle = styled(Transition)`
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  transition-property: width, background-color;
  &:hover {
    background-color: #d495d5;
    width: calc(0.95 * ${(props) => props.radius});
    transition-property: width, background-color;
  }
`;
