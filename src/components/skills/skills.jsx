import React from "react";
import PropTypes from "prop-types";
import { Divider, Image } from "semantic-ui-react";
import { useContextRef } from "react-context-refs";

import { Grid } from "./grid";
import { Header } from "../common/headers";

import { MainContainer, MainSegmentWhite } from "../common/styles/index";
import { skillsContent } from "./skillsContent";

export const Skills = ({ mobile }) => {
  const ref = useContextRef("section", { name: "skills" });
  return (
    <div id="skills" ref={ref}>
      <MainSegmentWhite vertical id="skills">
        <Header title="SKILLS" mobile={mobile} />
        <MainContainer>
          <Grid
            skillSets={[
              { title: "Languages", skills: skillsContent.languages },
              { title: "Backend", skills: skillsContent.backend },
            ]}
          />
          <Divider className="header" horizontal>
            <Image size="small" src="../../media/icons/diamond.svg" />
          </Divider>

          <Grid
            skillSets={[
              { title: "Frontend", skills: skillsContent.frontend },
              { title: "Other", skills: skillsContent.other },
            ]}
          />
        </MainContainer>
      </MainSegmentWhite>
    </div>
  );
};

Skills.propTypes = {
  mobile: PropTypes.bool,
};
