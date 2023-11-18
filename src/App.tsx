import Line from "./Components/Line";
import Wrap from "./Components/Wrap";
import { useRecoilState } from "recoil";
import { AisWheelReady, Aphase } from "./utils/recoilStore";
function App() {
  const [isWheelReady, setIsWheelReady] = useRecoilState(AisWheelReady);
  const [phase, setPhase] = useRecoilState(Aphase);

  const linePosition = [
    { r: 0, ls: 300, ts: 700 },
    { r: 90, ls: 0, ts: -910 },
    { r: 85, ls: 0, ts: -1450 },
  ];

  return (
    <>
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
