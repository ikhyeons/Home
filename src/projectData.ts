export const projectData: IprojectData[] = [
  {
    title: "개인 블로그",
    img: "../public/imgs/블로그.png",
    period: "2023.06.29 ~ 10.01",
    skills: {
      fe: ["TS, Next(13)", "Redux(RTK, RTK-Query)", "SCSS", "반응형 웹"],
      be: ["Node(Express)", "MySQL"],
      deploy: ["EC2(BE)", "GitActions", "Vercel(FE)", "S3"],
    },
    summary:
      "공부한 내용들을 정리, 기록하기 위하여 개인 블로그를 제작하였습니다.",
    url: "https://blog.ikhyeons.net",
    funtion: [
      { name: "게시글 CRUD", description: "", img: "", skills: ["react"] },
      { name: "게시글 검색", description: "", img: "", skills: ["react"] },
      { name: "로그인", description: "", img: "", skills: ["react"] },
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
      "자취생들이 원룸 계약이 끝나기전에 불가피하게 방을 빼야할 일이 생길 경우 원룸을 양도해야 하는데, 기존에 에브리타임을 많이 이용하였습니다. 이 때 불편한 점을 직방을 참고하여 분리해서 하나의 플랫폼으로 만들었습니다.",
    url: "",
    funtion: [
      { name: "지도에 방 목록", description: "", img: "", skills: ["react"] },
      { name: "방CRUD", description: "", img: "", skills: ["react"] },
      {
        name: "방 검색 및 필터",
        description: "",
        img: "",
        skills: ["react"],
      },
      { name: "로그인", description: "", img: "", skills: ["react"] },
      { name: "실시간 알림", description: "", img: "", skills: ["react"] },
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
      { name: "문서 CRUD", description: "", img: "", skills: ["react"] },
      { name: "실시간 채팅", description: "", img: "", skills: ["react"] },
      { name: "드래그 앤 드랍", description: "", img: "", skills: ["react"] },
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
      { name: "실시간 알람", description: "", img: "", skills: ["react"] },
      { name: "어드민 페이지", description: "", img: "", skills: ["react"] },
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
        description: "CSS애니메이션으로 화면 구성",
        img: "",
        skills: ["react"],
      },
    ],
  },
];

export default projectData;
