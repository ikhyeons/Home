import Phase1 from "./Phase1";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Phase2 from "./Phase2";
import { useRecoilState } from "recoil";
import { AisWheelReady } from "../utils/recoilStore";
const SWrap = styled.section`
  background: rgb(30, 40, 30);
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
`;

function Wrap() {
  const [phase, setPhase] = useState(2);
  const [isWheelReady, setIsWheelReady] = useRecoilState(AisWheelReady);
  useEffect(() => {
    setTimeout(() => {
      setIsWheelReady(true);
    }, 1000);
  }, []);
  return (
    <SWrap
      onWheel={(e) => {
        if (isWheelReady) {
          if (e.deltaY > 0) console.log("down");
          else console.log("up");
        }
      }}
    >
      {phase == 1 ? <Phase1 /> : phase == 2 ? <Phase2 /> : null}
    </SWrap>
  );
}

export default Wrap;
