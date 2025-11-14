
import { Experience, Project, SkillCategory, Language } from './types';

export const CONTACT = {
  name: "Douglas Tony (Mr.Tom)",
  title: "Senior Fullstack Engineer",
  bio: "8+ years crafting resilient backend solutions for fintech and enterprise domains. I specialize in event-driven architectures, API design, and building systems that scale. Currently leading backend initiatives and mentoring junior engineers at Kaopiz.",
  email: "toandh.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/douglas-tony-243a742a1/",
  github: "https://github.com/toandhkaopiz",
};

export const ABOUT = "As a Senior Software Developer, I specialize in building high-performance backend systems using Scala, Java, and Kotlin. My approach is grounded in a deep understanding of both Object-Oriented (OOP) and Functional Programming (FP) paradigms, which I leverage to create clean, scalable, and resilient architectures. While my core strength lies in the backend, I also possess a strong background in frontend development with React and Node.js, enabling me to contribute to the full software lifecycle. My experience extends to deploying and managing applications on AWS. I am passionate about solving complex problems and mentoring others to foster technical excellence within the team.";

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Tech Lead - Senior Software Engineer",
    company: "Kaopiz",
    period: "Mar 2024 - Present",
    description: [
      "Architected and developed high-performance microservices using Kotlin, Java, Spring Boot, and Quarkus for a high-traffic fintech platform.",
      "Leveraged reactive programming principles within Spring WebFlux and Quarkus to build resilient, scalable, and non-blocking APIs.",
      "Improved system performance by 30% through advanced JVM tuning, database query optimization (PostgreSQL), and implementing caching strategies with Redis.",
      "Championed a robust testing culture by designing and implementing a multi-layered testing strategy, including unit (JUnit, Kotest), integration (Testcontainers), and end-to-end tests to ensure high reliability.",
      "Mentored junior engineers on best practices for building cloud-native microservices and modern Java/Kotlin development."
    ],
    skills: ["Kotlin", "Java", "Spring Boot", "Quarkus", "PostgreSQL", "Redis", "Docker", "JUnit", "Kotest", "Testcontainers"]
  },
  {
    role: "Team Lead - Senior Software Engineer",
    company: "VNEXT HOLDINGS",
    period: "Aug 2022 - Mar 2024",
    description: [
        "Spearheaded web application development using React and Node.js, enhancing client content management through a bespoke CMS.",
        "Engineered and maintained scalable RESTful APIs with Node.js and Express for a multi-tenant SaaS application.",
        "Implemented a comprehensive testing suite using Jest and Supertest, covering unit and integration tests for Node.js services, which improved code quality and reduced production bugs by 25%.",
        "Designed and implemented robust CI/CD pipelines using GitLab CI and GitHub Actions to deploy containerized applications to AWS (ECS, ECR).",
        "Drove performance optimizations and seamless client collaboration, fostering an environment of growth and learning for junior developers.",
    ],
    skills: ["React", "Node.js", "TypeScript", "Express.js", "MongoDB", "AWS", "Jest", "Supertest"]
  },
  {
    role: "Team Lead & Fullstack Developer",
    company: "VMO Holdings",
    period: "Dec 2019 - Aug 2022",
    description: [
        "Led a team of 4 developers, providing technical guidance, conducting code reviews, and managing project timelines to ensure successful delivery of features.",
        "Engineered robust web solutions across diverse projects utilizing Java (Spring Boot), JavaScript, and ReactJS.",
        "Utilized Object-Oriented design patterns (e.g., MVC, Factory) within the Java Spring Boot ecosystem to ensure code modularity and reusability.",
        "Played a pivotal role in database design and optimization for relational databases like MySQL and PostgreSQL.",
        "Championed client support in application deployment and updates, ensuring high standards of maintenance and functionality.",
    ],
    skills: ["Team Leadership", "Java", "Spring Boot", "Design Patterns", "React", "JavaScript", "MySQL", "PostgreSQL"]
  },
  {
    role: "Back End Developer",
    company: "BnK Solution",
    period: "May 2018 - Dec 2019",
    description: [
        "Engineered robust web solutions by applying core OOP principles in Java to create clean, reusable components.",
        "Responsibilities encompassed pivotal roles in database design and optimization, ensuring efficient data management and retrieval processes."
    ],
    skills: ["Java", "OOP", "JavaScript", "SQL", "REST APIs"]
  },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A microservices-based e-commerce backend designed for high throughput and resilience. It handles everything from product catalogs and inventory to order processing and user management, using an event-driven architecture to ensure scalability.",
        tags: ["Scala", "Akka HTTP", "PostgreSQL", "Docker"],
        teamSize: 15
    },
    {
        title: "Fintech Microservices Ecosystem",
        description: "A comprehensive fintech platform built on a microservices architecture, designed for scalability and resilience. The system comprises a notification service (Spring Boot, Kotlin), an exchange rate service (Quarkus, Kotlin), a high-performance payment service (ZIO, Scala), and a contract management service (Spring Boot, Java). This modular design ensures independent scalability and fault tolerance.",
        tags: ["Microservices", "System Design", "Spring Boot", "Quarkus", "ZIO", "Scala", "Kotlin", "Java"],
        teamSize: 22
    },
    {
        title: "Maritime Vessel Management System",
        description: "A comprehensive vessel management system designed for the maritime shipping industry. This system streamlines vessel operations, crew management, voyage planning, and cargo tracking. The backend, built with NestJS, offers a scalable and modular architecture, while the responsive frontend is powered by React. The system integrates key modules for vessel maintenance, crew scheduling, port operations, and maritime compliance.",
        tags: ["NestJS", "React", "TypeScript", "Node.js", "PostgreSQL", "REST API"],
        teamSize: 12
    }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Scala", "Kotlin", "Java", "TypeScript/JavaScript", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "NestJS","Quarkus", "React", "Node.js", "Express.js", "NextJs"]
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL","DynamoDB", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "RabbitMQ", "GitLab CI", "GitHub Actions", "Git"]
  },
  {
    title: "Testing",
    skills: ["JUnit", "Kotest", "Testcontainers", "Jest", "Supertest", "ScalaTest", "Mockito", "Unit Testing", "Integration Testing", "Automation Testing"]
  },
  {
    title: "Cloud",
    skills: ["AWS (EC2, S3, RDS, Lambda, ECS, ECR)"]
  },
  {
    title: "Soft Skills & Leadership",
    skills: ["Team Leadership", "Mentoring", "Code Review", "Agile/Scrum", "Problem Solving", "Technical Documentation", "Cross-functional Collaboration", "Project Planning"]
  }
];


export const LANGUAGES_DATA: Language[] = [
  {
    name: "English",
    proficiency: "Fluent"
  },
  {
    name: "Chinese",
    proficiency: "Basic"
  },
  {
    name: "Vietnamese",
    proficiency: "Native"
  }
];
