import { SAbsoluteDiv, SAbsoluteSpan } from "./styledComponent";
import styled from "styled-components";

import Line from "./Line";
import { FadeDown, FadeUp } from "./animation";
import useDelay from "../utils/hooks/useActive";
const SProject = styled(SAbsoluteSpan)`
  font-size: 40px;
  animation: ${FadeDown} 2.5s linear;
`;

const SMain = styled(SAbsoluteDiv)`
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px 0 0;
  margin: 0 80px 0 0;
`;

const SProjectCard = styled.div<{ active: boolean }>`
  width: 400px;
  height: 300px;
  margin: 30px 50px;
  background: grey;
  position: relative;
  display: ${(props) => (props.active ? null : "none")};
  animation: ${FadeUp} 1.5s;
`;
const SImg = styled.img`
  width: 400px;
  height: 300px;
`;
const SSpan = styled.span`
  position: absolute;
  width: 250px;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
`;
function Phase2() {
  const linePosition = [
    {
      r: 0,
      ls: "0",
      ts: "100px",
    },
  ];

  const projectListData = [
    { name: "블로그 프로젝트", img: "" },
    { name: "자취방 양도 프로젝트", img: "" },
    { name: "협업 웹 프로젝트", img: "" },
    { name: "텔로 드론 프로젝트", img: "" },
    { name: "동물 분양 프로젝트", img: "" },
    { name: "ICT GPT Connector 프로젝트", img: "" },
  ];

  const active = useDelay([1000, 1500, 2000, 2500, 3000, 3500]);
  return (
    <>
      {linePosition.map((data, i) => (
        <Line r={data.r} ls={data.ls} ts={data.ts} />
      ))}

      <SProject left={280} top={20}>
        PROJECT
      </SProject>
      <SMain left={280} top={140}>
        {projectListData.map((data, i) => (
          <SProjectCard active={active[i]} key={i}>
            <SImg src={data.img} alt={data.name} />
            <SSpan>{data.name}</SSpan>
          </SProjectCard>
        ))}
      </SMain>
    </>
  );
}

export default Phase2;
