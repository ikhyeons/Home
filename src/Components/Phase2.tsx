import { SAbsoluteDiv, SAbsoluteSpan } from "./styledComponent";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AisModal } from "../utils/recoilStore";
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
  overflow: hidden;
  width: 400px;
  height: 300px;
  margin: 30px 50px;
  background: grey;
  position: relative;
  display: ${(props) => (props.active ? null : "none")};
  animation: ${FadeUp} 1.5s;
  transition: box-shadow 0.3s, transform 0.2s;
  &:hover {
    transform: translate(5px, -5px);
    box-shadow: -5px 5px rgb(145, 0, 125);
    cursor: pointer;
    & > img {
      filter: brightness(50%);
    }
    & > div {
      transform: translate(-50%, -93%);
    }
  }
`;
const SImg = styled.img`
  width: 400px;
  height: 300px;
  filter: brightness(80%);
`;
const SSpanWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0px);
  pointer-events: none;
  transition: transform 0.3s ease-out;
`;
const SSpan = styled.span`
  width: 250px;
  text-align: center;
  font-weight: bold;
  text-shadow: 3px 3px 5px black;
  font-size: 20px;
  pointer-events: none;
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
    { name: "개인 블로그", img: "../public/imgs/블로그.png" },
    { name: "자취방 양도 플랫폼", img: "../public/imgs/자취방양도.png" },
    { name: "협업 웹", img: "../public/imgs/협업툴.png" },
    { name: "동물 분양 플랫폼", img: "../public/imgs/동물분양.png" },
  ];

  const active = useDelay([1000, 1500, 2000, 2500, 3000, 3500]);
  const [isModal, setIsModal] = useRecoilState(AisModal);
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
          <SProjectCard
            onClick={() => {
              switch (data.name) {
                case "개인 블로그":
                  setIsModal("blog");
                  break;
                case "자취방 양도 플랫폼":
                  setIsModal("realestate");
                  break;
                case "협업 웹":
                  setIsModal("collabo");
                  break;
                case "동물 분양 플랫폼":
                  setIsModal("animal");
                  break;
                default:
                  break;
              }
            }}
            active={active[i]}
            key={i}
          >
            <SImg src={data.img} alt={data.name} />
            <SSpanWrap>
              <SSpan>{data.name}</SSpan>
              <SSpan>자세히 보기</SSpan>
            </SSpanWrap>
          </SProjectCard>
        ))}
      </SMain>
    </>
  );
}

export default Phase2;
