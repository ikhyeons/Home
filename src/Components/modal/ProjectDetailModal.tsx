import styled from "styled-components";
import { useRecoilState } from "recoil";
import { AisModal } from "../../utils/recoilStore";
const SContentWrap = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const SContent = styled.section`
  width: 70%;
  margin: 0 auto;
`;

const SPhase = styled.section`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
`;

const SStep = styled.section`
  background: grey;
  width: 4px;
  margin: 10px 5px;
  height: 80px;
`;

function ProjectDetailModal() {
  const [projectData, SetProjectData] = useRecoilState(AisModal);
  return (
    <>
      <SContentWrap>
        <SContent>
          <div>{(projectData as IprojectData).title}</div>
          <div>skills</div>
          {(projectData as IprojectData).skills.fe && (
            <div>{(projectData as IprojectData).skills.fe}</div>
          )}
          {(projectData as IprojectData).skills.be && (
            <div>{(projectData as IprojectData).skills.be}</div>
          )}
          {(projectData as IprojectData).skills.deploy && (
            <div>{(projectData as IprojectData).skills.deploy}</div>
          )}
          <div>{(projectData as IprojectData).period}</div>
          <div>{(projectData as IprojectData).summary}</div>
          <a href={(projectData as IprojectData).url} target="_blank">
            {(projectData as IprojectData).url}
          </a>
        </SContent>

        <SPhase>
          <SStep />
          <SStep />
          <SStep />
          <SStep />
          <SStep />
          <SStep />
        </SPhase>
      </SContentWrap>
    </>
  );
}

export default ProjectDetailModal;
