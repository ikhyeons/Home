import styled from "styled-components";
import { FadeUp } from "../animation";
import useDelay from "../../utils/hooks/useActive";
import { useRecoilState } from "recoil";
import { Aphase } from "../../utils/recoilStore";

const SPhase0 = styled.div<{ phase: number }>`
  position: absolute;
  left: 300px;
  top: ${(props) =>
    props.phase < 1 ? "650px" : props.phase < 2 ? "100px" : "-400px"};
  width: calc(100% - 300px);
  transition: top 1.5s;
`;

const SHead = styled.div`
  position: relative;
`;

const SName = styled.span<{ $active: boolean }>`
  font-weight: bold;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 2s;
`;

const SIntroduce = styled.span<{ $active: boolean }>`
  position: absolute;
  left: -200px;
  top: 20px;
  font-size: 40px;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 1s;
`;

const SInfo = styled.div`
  margin-top: 20px;
`;
const SSpan = styled.span<{ $active: boolean }>`
  margin: 0 10px;
  color: grey;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 2s;
  cursor: default;
`;

function Phase0() {
  const [phase, setPhase] = useRecoilState(Aphase);
  const [n1, n2, s1, s2, s3, s4] = useDelay([
    1000, 1500, 2000, 2500, 3000, 3500,
  ]);

  return (
    <SPhase0 phase={phase}>
      <SIntroduce $active={n2}>About Me</SIntroduce>
      <SHead>
        <SName style={{ fontSize: "30px" }} $active={n1}>
          성익현 | FrontEnd Developer
        </SName>
      </SHead>
      <SInfo>
        <SSpan $active={s1}>1999. 11. 23</SSpan>
        <SSpan $active={s2}>경상국립대 전자공학과</SSpan>
        <SSpan $active={s3}>경상남도 마산</SSpan>
        <SSpan $active={s4}>skantrkwl789@naver.com</SSpan>
      </SInfo>
    </SPhase0>
  );
}

export default Phase0;
