import Line from "./Components/Line";
import Wrap from "./Components/Wrap";
import { useRecoilState } from "recoil";
import { AisModal, AisWheelReady, Aphase } from "./utils/recoilStore";
import ModalWrap from "./Components/modal/ModalWrap";
function App() {
  const [isWheelReady, setIsWheelReady] = useRecoilState(AisWheelReady);
  const [phase, setPhase] = useRecoilState(Aphase);
  const [isModal, setIsModal] = useRecoilState(AisModal);
  const linePosition = [
    { r: 0, ls: "300px", ts: "700px" },
    { r: 0, ls: "300px", ts: "150px" },
    { r: 90, ls: "250px", ts: "-10px" },
    { r: 0, ls: "250px", ts: "800px" },
  ];

  return (
    <>
      {isModal !== "off" ? <ModalWrap /> : null}
      <Line
        r={linePosition[phase].r}
        ls={linePosition[phase].ls}
        ts={linePosition[phase].ts}
      />
      <Wrap />
    </>
  );
}

export default App;
