import styled from "styled-components";
const SContentWrap = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const SContent = styled.section`
  background: grey;
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
  return (
    <>
      <SContentWrap>
        <SContent>
          <div>프로젝트 명</div>
          <div>사용 스킬, 주요 라이브러리</div>
          <div>기간</div>
          <div>간단한 설명</div>
          <div>url, git 등</div>
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
