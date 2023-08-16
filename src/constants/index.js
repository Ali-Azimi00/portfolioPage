import {
    mobile,
    bootstrap,
    c,
    aws,
    java,
    spring,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    react,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    sql,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Skills",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front End Developer",
        icon: web,
    },
    {
        title: "Back End Developer",
        icon: mobile,
    },
    // {
    //     title: "APIs",
    //     icon: backend,
    // },
    {
        title: "Databases",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: react,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Spring",
        icon: spring,
    },
    {
        name: "sql",
        icon: sql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },

];

const experiences = [
    {
        title: "HTML, JavaScript, CSS",
        company_name: "Strong foundations that have helped me expand my skills. Necessary tools in any programmer's belt",
        icon: starbucks,
        iconBg: "#383E56",
        date: "",
        points: [
            // "Strong foundations that have helped me expand skills",
        ],
    },
    {
        title: "React",
        company_name: "My preferred development library. Its modular nature makes it easy to build my front end and the many open source, I have plenty of resources to draw upon",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "JS | TS",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
        ],
    },
    {
        title: "Java",
        company_name: "I find the Java development environment great to work with. Java's syntax is easy to follow and the Spring Framework reduces boilerplate code, speeding up project development and making it easy to define the interactions between objects",
        icon: shopify,
        iconBg: "#383E56",
        date: "IntelliJ | Spring Framework",
        points: [
            "Developing and maintaining web applications using React and other related technologies.",
        ],
    },
    {
        title: "SQL | PostgreSql",
        company_name: "Learning to use databases was simpler than I expected. My advice to begginers: imagine an excel sheet in your head",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Microsoft SQL Managment Studio | DBeaver",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
        ],
    },
    {
        title: "RESTful API",
        company_name: "Communication is key.",
        icon: shopify,
        iconBg: "#383E56",
        date: "Postman | JSON preferred",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
        ],
    },
    {
        title: "AWS Certified Cloud Practitioner",
        company_name: "Well versed in the many available resources and services provided by the AWS Cloud",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Cert Date: Aug/2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
        ],
    },
    {
        title: "UI kits",
        company_name: "With my foundations of CSS and Javascript in place, mastering the use of these UI/CSS resources has made creating dynamic front end designs quick and efficient",
        icon: shopify,
        iconBg: "#383E56",
        date: "Bootstrap | Tailwind | Material UI",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Google Analytics",
        description:
            "Constructed an anlaytics dashboard in React, routed to Google Analytics API, using C#, to report user views and actions across the webpage.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "C#",
                color: "green-text-gradient",
            },
            {
                name: "Google CloudApi",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "AI Chat App",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "ChatGPT API",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Productivity",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };