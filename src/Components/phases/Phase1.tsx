import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Aphase } from "../../utils/recoilStore";
import useDelay from "../../utils/hooks/useActive";
import { FadeUp } from "../animation";
import Skillbox from "../Skillbox";

const SPhase1 = styled.div<{ phase: number }>`
  position: absolute;
  left: 300px;
  top: ${(props) => (props.phase < 2 ? "300px" : "-600px")};
  width: calc(100% - 300px);
  transition: top 1.5s;
  display: flex;
`;

const SSkills = styled.span<{ $active: boolean }>`
  position: absolute;
  left: -105px;
  top: 20px;
  font-size: 40px;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 1.5s;
`;

function Phase1() {
  const [phase] = useRecoilState(Aphase);
  const [skills, box1, box2, box3] = useDelay([500, 1200, 1700, 2200]);
  const skillList = {
    frontEnd: [
      { name: "HTML", gage: 70 },
      { name: "CSS", gage: 70 },
      { name: "JS", gage: 70 },
      { name: "React", gage: 70 },
      { name: "Next", gage: 60 },
    ],
    backEnd: [
      { name: "Node", gage: 70 },
      { name: "MySQL", gage: 70 },
      { name: "AWS", gage: 60 },
    ],
    else: [
      { name: "TS", gage: 62 },
      { name: "Git", gage: 60 },
      { name: "GitActions", gage: 60 },
      { name: "Notion", gage: 60 },
      { name: "C#", gage: 40 },
    ],
  };
  return (
    <SPhase1 phase={phase}>
      <SSkills $active={skills}>Skills</SSkills>
      <Skillbox $active={box1} name={"FrontEnd"} data={skillList.frontEnd} />
      <Skillbox $active={box2} name={"BackEnd"} data={skillList.backEnd} />
      <Skillbox $active={box3} name={"else"} data={skillList.else} />
    </SPhase1>
  );
}

export default Phase1;
