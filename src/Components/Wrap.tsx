import styled from "styled-components";
import { useEffect } from "react";
import Phase0 from "./Phase0";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";

import { useRecoilState } from "recoil";
import { AisWheelReady, Aphase } from "../utils/recoilStore";

const SWrap = styled.section`
  background: rgb(30, 40, 30);
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
`;

function Wrap() {
  const [phase, setPhase] = useRecoilState(Aphase);
  const [isWheelReady, setIsWheelReady] = useRecoilState(AisWheelReady);
  useEffect(() => {
    setIsWheelReady(false);
    setTimeout(() => {
      setIsWheelReady(true);
    }, 1500);
  }, [phase]);
  return (
    <SWrap
      onWheel={(e) => {
        if (isWheelReady) {
          if (e.deltaY > 0) setPhase((prev) => (prev != 2 ? prev + 1 : prev));
          else setPhase((prev) => (prev != 0 ? prev - 1 : prev));
        }
      }}
    >
      <Phase0 />
      {phase >= 1 ? <Phase1 /> : null}
      {phase >= 2 ? <Phase2 /> : null}
    </SWrap>
  );
}

export default Wrap;
