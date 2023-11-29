export const projectData: IprojectData[] = [
  {
    title: "개인 블로그 프로젝트",
    img: "../public/imgs/블로그.png",
    period: "2023.06.29 ~ 10.01",
    skills: {
      fe: ["TS, Next(13)", "Redux(RTK, RTK-Query)", "SCSS", "반응형 웹"],
      be: ["Node(Express)", "MySQL"],
      deploy: ["Vercel(FE)", "EC2(BE)", "GitActions", "S3"],
    },
    summary:
      "공부한 내용들을 정리, 기록하기 위하여 개인 블로그를 제작하였습니다.",
    url: "https://blog.ikhyeons.net",
    funtion: [
      {
        name: "게시글 CRUD",
        description: "Ajax 통신을 이용하여 게시글 CRUD를 구현하였습니다.",
        img: "",
      },
      {
        name: "게시글 검색",
        description: "MySQL 쿼리문으로 게시글 검색을 구현하였습니다.",
        img: "",
      },
      {
        name: "로그인",
        description:
          "JWT를 이용하여 access token과 refresh token을 사용하여 로그인을 구현하였습니다.",
        img: "",
      },
    ],
  },
  {
    title: "자취방 양도 플랫폼",
    img: "../public/imgs/자취방양도.png",
    period: "2022.12.16 ~ 23.04.22",
    skills: {
      fe: [
        "TS",
        "React",
        "Recoil",
        "React-Query",
        "Styled-Components",
        "Webpack",
        "WebSocket",
      ],
      be: ["Node(express)", "MySQL", "WebSocket"],
      deploy: [],
    },
    summary:
      "자취생들이 원룸 계약이 끝나기전에 불가피하게 방을 빼야할 일이 생길 경우 에브리타임에서 양도받을 사람을 구하는 불편한 점을 해결하고자 제작하였습니다.",
    url: "",
    funtion: [
      {
        name: "지도에 방 목록 표시",
        description:
          "DB에 등록된 방을 kakao map라이브러리를 이용하여 지도 위에 표시하였습니다.",
        img: "",
      },
      {
        name: "게시글CRUD",
        description: "Ajax 통신을 이용하여 게시글 CRUD를 구현하였습니다.",
        img: "",
      },
      {
        name: "방 필터",
        description: "",
        img: "",
      },
      {
        name: "로그인",
        description: "",
        img: "MySQL session를 이용하여 세션 로그인을 구현하였습니다.",
      },
      {
        name: "실시간 알림",
        description:
          "websocket을 이용하여 게시글의 알림이나 채팅 문의를 실시간으로 구현하였습니다.",
        img: "",
      },
    ],
  },
  {
    title: "협업 웹",
    period: "2022.05.18 ~ 10.06",
    img: "../public/imgs/협업툴.png",
    skills: {
      fe: ["React, Recoil", "Styled-components", "WebSocket"],
      be: ["Node(express)", "MySQL", "WebSocket"],
      deploy: [],
    },
    summary: "Notion, Collabee등을 참고하여 제작한 협업을 위한 웹 플랫폼",
    url: "3",
    funtion: [
      {
        name: "문서 CRUD",
        description: "Ajax 통신을 이용하여 게시글 CRUD를 구현하였습니다.",
        img: "",
      },
      {
        name: "달력 일정 입력",
        description:
          "full calendar를 이용하여 달력에 일정을 기록할 수 있도록 구현하였습니다.",
        img: "",
      },
      {
        name: "실시간 채팅",
        description: "websocket을 이용하여 실시간 채팅을 구현하였습니다.",
        img: "",
      },
      {
        name: "드래그 앤 드랍",
        description:
          "react-dnd 라이브러리를 이용하여 드래그 앤 드랍을 구현하였습니다.",
        img: "",
      },
    ],
  },
  {
    title: "동물 분양 플랫폼",
    img: "../public/imgs/동물분양.png",
    period: "2023.05.01 ~ 07.02",
    skills: {
      fe: ["TS", "Next(12)", "Recoil", "SCSS", "반응형 웹"],
      be: [],
      deploy: [],
    },
    summary:
      "강아지, 고양이, 기타 동물들을 분양하는 플랫폼으로 모바일 화면을 중점으로 제작하였습니다.",
    url: "",
    funtion: [
      {
        name: "실시간 알람",
        description: "websocket을 이용하여 실시간 알람을 구현하였습니다.",
        img: "",
      },
      {
        name: "어드민 페이지",
        description: "chartjs를 이용하여 그래프로 데이터 시각화하였습니다.",
        img: "",
      },
    ],
  },
  {
    title: "포트폴리오",
    img: "",
    period: "2023.11.16 ~ 11.24",
    skills: {
      fe: ["React", "Recoil", "Styled-Components", "반응형 웹"],
      be: [],
      deploy: [],
    },
    summary: "포트폴리오",
    url: "https://blog.ikhyeons.net/resume",
    funtion: [
      {
        name: "애니메이션",
        description: "CSS애니메이션으로 화면을 구성하였습니다.",
        img: "",
      },
    ],
  },
];

export default projectData;
