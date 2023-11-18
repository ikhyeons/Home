import Line from "./Components/Line";
import Wrap from "./Components/Wrap";
import { useRecoilState } from "recoil";
import { AisWheelReady } from "./utils/recoilStore";
function App() {
  const [isWheelReady, setIsWheelReady] = useRecoilState(AisWheelReady);
  const linePosition = [
    [0, 300, 700],
    [90, 0, -910],
  ];
  return (
    <>
      <Line r={90} ls={0} ts={-910} />
      <Wrap />
    </>
  );
}

export default App;
