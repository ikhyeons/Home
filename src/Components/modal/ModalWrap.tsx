import { useRecoilState } from "recoil";
import ProjectDetailModal from "./ProjectDetailModal";
import styled from "styled-components";
import { AisModal } from "../../utils/recoilStore";
import { leftIn } from "../animation";
import Line from "../Line";

const Sdiv = styled.div<{ active: boolean }>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 5;
  display: ${(props) => (props.active ? null : "none")};
  animation: ${leftIn} 1.5s;
`;

const SClose = styled.div`
  position: relative;
  height: 100%;
  width: 15%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 35px;
  cursor: pointer;
`;
function ModalWrap({ active }: { active: boolean }) {
  const [isModal, setIsModal] = useRecoilState(AisModal);

  return (
    <Sdiv active={active}>
      <ProjectDetailModal />
      <Line r={90} ls="85%" ts="0px" />
      <SClose
        onClick={() => {
          setIsModal("off");
        }}
      >
        <span>CLOSE</span>
      </SClose>
    </Sdiv>
  );
}

export default ModalWrap;
