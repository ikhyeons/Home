import { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AisModal } from "../../utils/recoilStore";
const SContentWrap = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const SContent = styled.section`
  font-size: 2rem;
  width: 50%;
  margin-left: 30%;
`;

const SUrlLink = styled.a`
  font-size: 1rem;
  margin-left: 5px;
`;

const SPeriod = styled.div`
  margin-bottom: 35px;
  font-size: 1.5rem;
  margin-left: 35px;
`;

const SPhase = styled.section`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
`;

const SStep = styled.section<{ $phase: number; $currentPhase: number }>`
  background: ${(prop) =>
    prop.$currentPhase == prop.$phase ? `rgb(255,0 ,255)` : `grey`};
  width: 4px;
  margin: 10px 5px;
  height: 80px;
`;

const STitle = styled.div`
  color: rgb(255, 0, 255);
`;

const SSkills = styled.div`
  margin-bottom: 35px;
`;
const SSkill = styled.div`
  font-size: 1.5rem;
  margin-left: 35px;
`;

const SSummary = styled.div`
  font-size: 1.5rem;
  margin-left: 35px;
`;

function ProjectDetailModal() {
  const [projectData, setProjectData] = useRecoilState(AisModal);
  const pjData = projectData as IprojectData;
  const [phase, setPhase] = useState(0);
  return (
    <>
      <SContentWrap>
        <SContent>
          <STitle>
            {pjData.title}
            <SUrlLink href={(projectData as IprojectData).url} target="_blank">
              {pjData.url}
            </SUrlLink>
          </STitle>
          <SPeriod>{pjData.period}</SPeriod>
          <SSkills>
            Skills
            <Skill skillData={pjData.skills.fe} type={"FE"} />
            <Skill skillData={pjData.skills.be} type={"BE"} />
            <Skill skillData={pjData.skills.deploy} type={"Deploy"} />
          </SSkills>
          Summary
          <SSummary>{pjData.summary}</SSummary>
        </SContent>

        <SPhase>
          <SStep $phase={0} $currentPhase={phase} />
          {pjData.funtion?.map((data, i) => (
            <SStep $phase={i + 1} $currentPhase={phase} />
          ))}
        </SPhase>
      </SContentWrap>
    </>
  );
}

function Skill({ skillData, type }: { skillData: string[]; type: string }) {
  function getArrString(arr: string[]) {
    let arrString = arr.join(", ");
    return arrString;
  }
  return (
    <>
      {skillData.length !== 0 && (
        <SSkill>
          {type} : {getArrString(skillData)}
        </SSkill>
      )}
    </>
  );
}

export default ProjectDetailModal;
