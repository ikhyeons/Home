import React from "react";
import { SAbsoluteDiv, SAbsoluteSpan } from "./commonStyledComponent";
import styled from "styled-components";
import { drawRedBack } from "./animation";

const SRedBack = styled(SAbsoluteDiv)`
  background-color: red;
  height: 110vh;
  transform: translateY(-35px);
  width: 500px;
  rotate: -5deg;
  animation: ${drawRedBack} 2.5s;
`;
function Phase2() {
  return <></>;
}

export default Phase2;
