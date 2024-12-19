// skillsData.js

const PUBLIC_URL = process.env.PUBLIC_URL || "";
console.log(PUBLIC_URL);

const skillsData = [
    {
        category: "Back-end",
        skills: [
            { name: "Java", icon: `${PUBLIC_URL}/icons/java.svg` },
            { name: "Spring Boot", icon: `${PUBLIC_URL}/icons/springboot.svg` },
            { name: "Spring Security", icon: `${PUBLIC_URL}/icons/springsecurity.svg` },
            { name: "JPA/Hibernate", icon: `${PUBLIC_URL}/icons/hibernate.svg` },
            { name: "Python", icon: `${PUBLIC_URL}/icons/python.svg` },
            { name: "Redis", icon: `${PUBLIC_URL}/icons/redis.svg` },
        ],
    },
    {
        category: "Database",
        skills: [
            { name: "MySQL", icon: `${PUBLIC_URL}/icons/mysql.svg` },
            { name: "MariaDB", icon: `${PUBLIC_URL}/icons/mariadb.svg` },
            { name: "PostgreSQL", icon: `${PUBLIC_URL}/icons/postgresql.svg` },
        ],
    },
    {
        category: "Front-end",
        skills: [
            { name: "HTML", icon: `${PUBLIC_URL}/icons/html5.svg` },
            { name: "CSS", icon: `${PUBLIC_URL}/icons/css3.svg` },
            { name: "JavaScript", icon: `${PUBLIC_URL}/icons/javascript.svg` },
            { name: "React", icon: `${PUBLIC_URL}/icons/react.svg` },
            { name: "Tailwind", icon: `${PUBLIC_URL}/icons/tailwindcss.svg` },
        ],
    },
    {
        category: "Version Control",
        skills: [{ name: "Git", icon: `${PUBLIC_URL}/icons/git.svg` }],
    },
    {
        category: "Collaboration",
        skills: [
            { name: "GitHub", icon: `${PUBLIC_URL}/icons/github.svg` },
            { name: "Notion", icon: `${PUBLIC_URL}/icons/notion.svg` },
        ],
    },
    {
        category: "Deployment",
        skills: [
            { name: "Docker", icon: `${PUBLIC_URL}/icons/docker.svg` },
            { name: "Firebase Storage", icon: `${PUBLIC_URL}/icons/firebase.svg` },
            { name: "AWS EC2", icon: `${PUBLIC_URL}/icons/amazonec2.svg` },
            { name: "Oracle", icon: `${PUBLIC_URL}/icons/oracle.svg` },
            { name: "Terraform", icon: `${PUBLIC_URL}/icons/terraform.svg` },
            { name: "Nginx", icon: `${PUBLIC_URL}/icons/nginx.svg` },
        ],
    },
    {
        category: "CI/CD",
        skills: [{ name: "GitHub Actions", icon: `${PUBLIC_URL}/icons/githubactions.svg` }],
    },
];

export default skillsData;
