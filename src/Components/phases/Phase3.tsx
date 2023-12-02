import useDelay from "../../utils/hooks/useActive";
import { FadeUp } from "../animation";
import { SAbsoluteSpan } from "../styledComponent";
import styled from "styled-components";

const SContact = styled(SAbsoluteSpan)<{ $active: boolean }>`
  font-size: 40px;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 1.5s;
`;
const SContactInfo = styled(SAbsoluteSpan)<{ $active: boolean }>`
  color: grey;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 1.5s;
`;
function Phase3() {
  const [title, info] = useDelay([700, 1300]);
  return (
    <div>
      <SContactInfo left={300} top={700} $active={info}>
        skantrkwl789@naver.com | 010-8689-1432
      </SContactInfo>
      <SContact left={300} top={730} $active={title}>
        Thank You
      </SContact>
    </div>
  );
}

export default Phase3;
