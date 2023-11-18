import styled from "styled-components";

export const SAbsoluteDiv = styled.div<{
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}>`
  position: absolute;
  ${(props) => (props.left ? `left: ${props.left}px` : null)};
  ${(props) => (props.right ? `right: ${props.right}px` : null)};
  ${(props) => (props.top ? `top: ${props.top}px` : null)};
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px` : null)};
`;
export const SAbsoluteSpan = styled.span<{
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}>`
  position: absolute;
  ${(props) => (props.left ? `left: ${props.left}px` : null)};
  ${(props) => (props.right ? `right: ${props.right}px` : null)};
  ${(props) => (props.top ? `top: ${props.top}px` : null)};
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px` : null)};
`;

export default {};
