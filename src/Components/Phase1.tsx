import styled from "styled-components";
import { SAbsoluteDiv, SAbsoluteSpan } from "./commonStyledComponent";

const SSpan = styled.span`
  margin: 0 10px;
  color: grey;
`;

function Phase1() {
  return (
    <>
      <SAbsoluteSpan style={{ fontSize: "30px" }} left={300} top={650}>
        성익현 | FrontEnd Developer
      </SAbsoluteSpan>
      <SAbsoluteSpan right={10} top={675}>
        Introduce
      </SAbsoluteSpan>
      <SAbsoluteDiv left={290} top={705}>
        <SSpan>1999. 11. 23</SSpan>
        <SSpan>경상국립대 전자공학과</SSpan>
        <SSpan>경상남도 마산</SSpan>
        <SSpan>skantrkwl789@naver.com</SSpan>
      </SAbsoluteDiv>
    </>
  );
}

export default Phase1;
