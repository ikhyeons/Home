import styled from "styled-components";
import { drawLine, FadeIn } from "./animation";

const SLine = styled.div<{ r: number }>`
  height: 4px;
  background-color: red;
  transform-origin: left;
  rotate: ${(props) => props.r}deg;
  width: ${(props) =>
    props.r > 90 && props.r <= 270
      ? `min(calc(100vh / ${Math.cos(
          (props.r * Math.PI) / 180
        )} * (-1)), 1920px)`
      : `min(calc(100vw / ${Math.cos((props.r * Math.PI) / 180)}), 1920px)`};
  animation: ${drawLine} 2s ease-out, ${FadeIn} 1s linear;
  transition: rotate 1.5s;
`;

const SLineWrap = styled.div<{ ls: string; ts: string }>`
  position: absolute;
  transform: translate(${(props) => props.ls}, ${(props) => props.ts});
  transition: transform 1.5s;
`;

function Line({ r, ls, ts }: { r: number; ls: string; ts: string }) {
  console.log(r);
  return (
    <SLineWrap ls={ls} ts={ts}>
      <SLine r={r} />
    </SLineWrap>
  );
}

export default Line;
