import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import { TechList } from "./techList";
import { DeviculumChart } from "../../deviculumChart/deviculumChart";
import { Anchors } from "./anchors";

const Wrapper = styled.div`
  margin: 4em 0;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;
const MainTitle = styled.div`
  font-size: 2.5em;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 1.25em;
  font-weight: 600;
  color: #777;
  padding-bottom: 0.75em;
  margin-bottom: 1.5em;
  border-bottom: 1px solid #999;
`;

const SecondaryTitle = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin: 2em 0 1em 0;
`;
const StyledDescription = styled.div`
  font-size: 1.25em;
  color: #333;
  line-height: 1.5;
`;

const ProjectCard = ({ project }) => {
  const { title, meta, description, anchors, technologies } = project;
  return (
    <Wrapper>
      <TitleWrapper>
        <MainTitle>{title}</MainTitle>
        <Anchors anchors={anchors} />
      </TitleWrapper>
      <SubTitle>{meta.toUpperCase()}</SubTitle>
      <StyledDescription>{description}</StyledDescription>
      <SecondaryTitle>Built With</SecondaryTitle>
      <TechList techs={technologies.backend} textColor="#257795aa" />
      <TechList techs={technologies.frontend} textColor="#4c4cd5aa" />
    </Wrapper>
  );
};

const CardImage = ({ title, img }) =>
  title === "deviculum" ? <DeviculumChart /> : <Image src={img} />;

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export { ProjectCard as Card };
