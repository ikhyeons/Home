import Line from "./Components/Line";
import Wrap from "./Components/Wrap";
import { useRecoilState } from "recoil";
import { AisModal, AisWheelReady, Aphase } from "./utils/recoilStore";
import ModalWrap from "./Components/modal/ModalWrap";
import BabylonWrap from "./Components/babylon/BabylonWrap";
import { SAbsoluteSpan } from "./Components/styledComponent";
import styled from "styled-components";
import { FadeIn, upDown } from "./Components/animation";

const SScroll = styled(SAbsoluteSpan)`
  color: grey;
  font-weight: bold;
  will-change: transform;
  animation: ${upDown} linear 2s infinite, ${FadeIn} 2s;
`;
function App() {
  const [phase] = useRecoilState(Aphase);
  const [isModal] = useRecoilState(AisModal);
  const [isWheelReady] = useRecoilState(AisWheelReady);
  const linePosition = [
    { r: 0, ls: "300px", ts: "700px" },
    { r: 0, ls: "300px", ts: "150px" },
    { r: 90, ls: "250px", ts: "-10px" },
    { r: 0, ls: "300px", ts: "730px" },
  ];

  return (
    <>
      <BabylonWrap />
      {isModal !== "off" ? <ModalWrap /> : null}
      <Line
        r={linePosition[phase].r}
        ls={linePosition[phase].ls}
        ts={linePosition[phase].ts}
      />
      {isWheelReady && phase != 0 ? (
        <SScroll right={920} top={10}>
          Scroll ▲
        </SScroll>
      ) : null}

      {isWheelReady && phase != 3 ? (
        <SScroll right={920} bottom={10}>
          Scroll ▼
        </SScroll>
      ) : null}
      <Wrap />
    </>
  );
}

export default App;
