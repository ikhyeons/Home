import { SAbsoluteDiv, SAbsoluteSpan } from "./commonStyledComponent";
import styled from "styled-components";
import Gage from "./Gage";

const SSkillBox = styled(SAbsoluteDiv)`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const SSpan = styled.span``;

const SDiv = styled.div`
  height: 110px;
  width: 250px;
  font-weight: bold;
  font-size: 22px;
  margin: 10px 0;
`;
function Phase1() {
  const skillList = {
    front: [
      { name: "HTML", gage: 70 },
      { name: "CSS", gage: 70 },
      { name: "JS", gage: 70 },
      { name: "React", gage: 70 },
      { name: "Next", gage: 60 },
    ],
    back: [
      { name: "Node", gage: 70 },
      { name: "MySQL", gage: 70 },
      { name: "AWS", gage: 60 },
    ],
    else: [
      { name: "Typescript", gage: 62 },
      { name: "Git", gage: 60 },
      { name: "GitActions", gage: 60 },
      { name: "Notion", gage: 60 },
      { name: "C#", gage: 40 },
    ],
  };
  return (
    <>
      <SAbsoluteDiv top={30} left={400}>
        <SSpan>FrontEnd</SSpan>
        <SSkillBox>
          {skillList.front.map((data, i) => (
            <SDiv key={i}>
              {data.name}
              <Gage gage={data.gage} />
            </SDiv>
          ))}
        </SSkillBox>
      </SAbsoluteDiv>
      <SAbsoluteDiv top={30} left={1050}>
        <SSpan>BackEnd</SSpan>
        <SSkillBox>
          {skillList.back.map((data, i) => (
            <SDiv key={i}>
              {data.name}
              <Gage gage={data.gage} />
            </SDiv>
          ))}
        </SSkillBox>
      </SAbsoluteDiv>
      <SAbsoluteDiv top={30} left={1400}>
        <SSpan>else</SSpan>
        <SSkillBox>
          {skillList.else.map((data, i) => (
            <SDiv key={i}>
              {data.name}
              <Gage gage={data.gage} />
            </SDiv>
          ))}
        </SSkillBox>
      </SAbsoluteDiv>
      <SAbsoluteSpan
        style={{ fontSize: "25px", color: "lightgrey" }}
        left={873}
        bottom={1}
      >
        Ski ls
      </SAbsoluteSpan>
    </>
  );
}

export default Phase1;
