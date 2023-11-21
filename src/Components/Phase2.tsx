import { SAbsoluteDiv, SAbsoluteSpan } from "./commonStyledComponent";
import styled from "styled-components";

import Line from "./Line";
import { FadeDown } from "./animation";
const SProject = styled(SAbsoluteSpan)`
  font-size: 40px;
  animation: ${FadeDown} 2.5s linear;
`;

const SMain = styled(SAbsoluteDiv)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 50px;
`;

const SImageCard = styled.div`
  width: 400px;
  height: 300px;
  margin: 30px 10px;
  background: grey;
  position: relative;
`;
const SImg = styled.img`
  width: 400px;
  height: 300px;
`;
const SSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
`;
function Phase2() {
  const linePosition = [
    {
      r: 0,
      ls: "0",
      ts: "100px",
    },
  ];
  return (
    <>
      {linePosition.map((data, i) => (
        <Line r={data.r} ls={data.ls} ts={data.ts} />
      ))}

      <SProject left={280} top={20}>
        PROJECT
      </SProject>
      <SMain left={280} top={140}>
        <SImageCard>
          <SImg src="" alt="블로그 프로젝트" />
          <SSpan>gd</SSpan>
        </SImageCard>
        <SImageCard>
          <SImg src="" alt="자취방 프로젝트" />
          <SSpan></SSpan>
        </SImageCard>
        <SImageCard>
          <SImg src="" alt="협업 툴 프로젝트" />
          <SSpan></SSpan>
        </SImageCard>
        <SImageCard>
          <SImg src="" alt="텔로 드론 플로젝트" />
          <SSpan></SSpan>
        </SImageCard>
        <SImageCard>
          <SImg src="" alt="동물 분양 프로젝트" />
          <SSpan></SSpan>
        </SImageCard>
        <SImageCard>
          <SImg src="" alt="ICT GPT Connector 프로젝트" />
          <SSpan></SSpan>
        </SImageCard>
      </SMain>
    </>
  );
}

export default Phase2;
