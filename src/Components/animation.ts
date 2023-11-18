import { keyframes } from "styled-components";

export const drawLine = keyframes<{ r: number }>`
  0% {
    width : 0px;
  }

  100% {
    width: ${(props) =>
      props.r > 90 && props.r <= 270
        ? `calc(100vh / ${Math.cos((props.r * Math.PI) / 180)} * (-1))`
        : `calc(100vw / ${Math.cos((props.r * Math.PI) / 180)})`};
  }
`;

export const drawRedBack = keyframes`
  0% {
    width : 0px;
  }
  60%{
    width : 0px;
  }
  100% {
    width: 500px;
  }
`;

export const FadeIn = keyframes`
  0% {
    opacity : 0.3;
  }
  100% {
    opacity : 1;
  }
`;

export const FadeUp = keyframes`
  0% {
    opacity : 0;
    transform : translateY(10px);
  }
  100% {
    opacity : 1;
    transform : translateY(0px);
  }
`;

export const FadeinLeft = keyframes`
  0% {
    opacity : 0;
    transform : translateX(-10px);
  }
  100% {
    opacity : 1;
    transform : translateX(0px);
  }
`;

export default {};
