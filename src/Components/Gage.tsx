import styled from "styled-components";
import useDelay from "../utils/hooks/useActive";
import { gageUp } from "./animation";

const SGage = styled.div`
  width: 100%;
  height: 20px;
  background-color: white;
  display: flex;
  position: relative;
`;
const SBar = styled.div<{ gage: number; active: boolean }>`
  display: ${(props) => (props.active ? null : "none")};
  animation: ${gageUp} 2s;
  width: ${(props) => props.gage}%;
  height: 100%;
  background-color: ${(props) => {
    if (props.gage <= 30) return "#ff5757";
    else if (props.gage <= 60) return "#c69aff";
    else return "#4affde";
  }};
  &::after {
    font-size: 18px;
    position: absolute;
    left: ${(props) => props.gage}%;
    transform: translate(-50%, 20px);
    content: "${(props) => {
      if (props.gage <= 30) return "know";
      else if (props.gage <= 60) return "tried";
      else return "familiar";
    }}";
  }
`;

function Gage({ gage }: { gage: number }) {
  const [active] = useDelay([500]);
  return (
    <SGage>
      <SBar gage={gage} active={active} />
    </SGage>
  );
}

export default Gage;
