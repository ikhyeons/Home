import styled from "styled-components";
import Gage from "./Gage";
import { FadeUp } from "./animation";
import useDelay from "../utils/hooks/useActive";

const SSkillList = styled.div<{ $active: boolean; name: string }>`
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 1s;
  margin-right: 60px;
  width: ${(props) =>
    props.name == "FrontEnd" || props.name == "else" ? 562 : null}px;
`;

const SName = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
const SSkillBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  height: 440px;
  flex-wrap: wrap;
`;

const SDiv = styled.div<{ $active: boolean }>`
  height: 110px;
  width: 250px;
  font-weight: bold;
  font-size: 22px;
  margin: 10px 10px;
  display: ${(props) => (props.$active ? null : "none")};
  animation: ${FadeUp} 2s;
`;
function Skillbox({
  name,
  data,
  $active,
}: {
  name: string;
  data: { name: string; gage: number }[];
  $active: boolean;
}) {
  const delayTimes = new Array(data.length).fill(null);
  delayTimes.forEach((_, i) => {
    delayTimes[i] = 500 * i + 1000;
  });

  const delays = useDelay(delayTimes);
  return (
    <SSkillList name={name} $active={$active}>
      <SName>{name}</SName>
      <SSkillBox>
        {data.map((data, i) => (
          <SDiv $active={delays[i]} key={i}>
            {data.name}
            <Gage gage={data.gage} />
          </SDiv>
        ))}
      </SSkillBox>
    </SSkillList>
  );
}

export default Skillbox;
