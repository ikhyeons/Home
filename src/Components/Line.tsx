import styled from "styled-components";
import { drawLine, FadeIn } from "./animation";

const SLine = styled.div<{ r: number; ls: number; ts: number }>`
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
  position: absolute;
  transform: translate(${(props) => props.ls}px, ${(props) => props.ts}px);
  animation: ${drawLine} 2.5s ease-out, ${FadeIn} 1s linear;
  transition: rotate 1.5s, transform 1.5s;
`;

function Line({ r, ls, ts }: { r: number; ls: number; ts: number }) {
  console.log(r);
  return <SLine r={r} ls={ls} ts={ts} />;
}

export default Line;
