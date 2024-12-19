// projectData.js

const PUBLIC_URL = process.env.PUBLIC_URL || "";

const projectData = [
    {
        title: "Lofi Sample Share",
        description: "🎵 DAW 작곡을 위한 Sample 공유 사이트",
        link: "https://github.com/qBlackBirdp/24_08_Spring_Black",
        icon: "📌 GitHub 바로가기",
        image: `${PUBLIC_URL}/images/project1.png`
    },
    {
        title: "Star Info API",
        description: "✨️ 천체 관측 데이터 제공 REST API (배포중 직접 요청해봐요! 작동이 되지 않는다면 Google Time Zone API가 만료되어서 그렇습니다.)",
        link: "https://github.com/qBlackBirdp/Star_Info_API_Project",
        serviceLink: "https://www.starinfo.qyef.site/api/docs",
        icon: "📌 GitHub 바로가기",
        serviceIcon: "🚀 서비스 체험하기",
        image: `${PUBLIC_URL}/images/project2.png`
    },
    {
        title: "Astro Star Info Web",
        description: "🌟 천체 관측 정보를 인터랙티브하게 제공하고 관측 계획을 짤 수 있는 서비스",
        link: "https://github.com/24-10-astroneer-team-project/24_10_star_info_web",
        icon: "📌 GitHub 바로가기",
        image: `${PUBLIC_URL}/images/project3.png`
    }
];

export default projectData;
