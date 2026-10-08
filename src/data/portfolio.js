import devPhoto from '../assets/about-dev.jpg';
import carMockup from '../assets/car-rec-mockup.jpg';
import careerMockup from '../assets/career-nav-mockup.jpg';

export const portfolioData = {
  brand: "Babu V",
  name: "Babu V",
  role: "Full Stack Developer",
  secondaryRole: "Full Stack Developer | Java, React & MySQL Specialist",
  tagline: "Software Developer with hands-on experience in Full Stack Web Development, Java, APIs, and MySQL. Experienced in building responsive applications and AI-based recommendation systems through real-world projects and internships.",
  hero: {
    headlinePrefix: "Hi, I'm",
    headlineMain: "Babu V",
    subHeadline: "Full Stack Developer",
    supportingText: "Software Developer with hands-on experience in Full Stack Web Development, Java, APIs, and MySQL. Experienced in building responsive applications and AI-based recommendation systems through real-world projects and internships. Familiar with Python, Git, and modern development tools.",
    primaryCta: "View My Work",
    secondaryCta: "Hire Me",
    topRightCta: "Hire Me",
    image: devPhoto
  },
  stats: [
    { value: 3, suffix: "+", label: "Internships Completed" },
    { value: 8.5, suffix: " CGPA", label: "Academic CGPA (B.Tech IT)" },
    { value: 4, suffix: "+", label: "Projects Completed" },
    { value: 85, suffix: "%", label: "HSC Board Percentage" },
  ],
  about: {
    badge: "ABOUT THE DEVELOPER",
    heading: "Hello!",
    description: "Hi, I'm BABU V, a passionate Software Engineer & Full Stack Developer pursuing B.Tech in Information Technology at Anna University (MPNMJ Engineering College) with an 8.49 CGPA.",
    secondaryDescription: "I specialize in building scalable, responsive, and user-focused web applications using modern frontend and backend technologies. I enjoy turning ideas into reliable digital solutions with clean code, efficient APIs, and well-structured databases.",
    thirdDescription: "My core expertise includes React.js, Node.js, Java, MySQL, REST APIs, and Git & GitHub, with hands-on experience in developing real-world full-stack applications. I also explore AI-powered solutions, content creation, and video editing as additional creative skills.",
    location: "Tamil Nadu, India",
    phone: "+91 8838643811",
    email: "babutechinfo03@gmail.com",
    github: "https://github.com/babutechinfo03-blip",
    linkedin: "https://www.linkedin.com/in/babuit/",
    status: "Available for Full Stack & Software Developer Roles",
    image: devPhoto
  },
  skills: {
    heading: "Technologies I build with.",
    subheading: "A solid technical toolkit spanning Full Stack Web Development, Core Java, Relational Databases, and Modern Engineering Tools.",
    categories: [
      {
        name: "Programming",
        description: "Core algorithms, data structures & backend languages",
        items: [
          { name: "Java", level: "Advanced", icon: "Coffee", highlight: true },
          { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", highlight: true },
          { name: "Python", level: "Intermediate", icon: "Binary", highlight: true },
          { name: "HTML5", level: "Advanced", icon: "Layout", highlight: true },
          { name: "CSS3", level: "Advanced", icon: "Sparkles", highlight: true },
          { name: "APIs & REST", level: "Advanced", icon: "Network", highlight: true }
        ]
      },
      {
        name: "Frontend & Full Stack",
        description: "Responsive user interfaces, component design & state management",
        items: [
          { name: "React.js", level: "Advanced", icon: "Code2", highlight: true },
          { name: "Node.js", level: "Intermediate", icon: "Server", highlight: true },
          { name: "Responsive UI", level: "Advanced", icon: "Move3d", highlight: true },
          { name: "Tailwind CSS", level: "Advanced", icon: "Palette" }
        ]
      },
      {
        name: "Database & Backend",
        description: "Relational database schema design & optimized SQL queries",
        items: [
          { name: "MySQL", level: "Advanced", icon: "Table", highlight: true },
          { name: "REST APIs", level: "Advanced", icon: "Network", highlight: true },
          { name: "OOP Concepts", level: "Advanced", icon: "Layers", highlight: true },
          { name: "Data Structures", level: "Advanced", icon: "Database", highlight: true }
        ]
      },
      {
        name: "Tools & Technologies",
        description: "Modern developer workflows, IDEs and version control",
        items: [
          { name: "Git", level: "Advanced", icon: "GitBranch", highlight: true },
          { name: "GitHub", level: "Advanced", icon: "Github", highlight: true },
          { name: "VS Code", level: "Advanced", icon: "Terminal" },
          { name: "Eclipse IDE", level: "Advanced", icon: "Zap" },
          { name: "IntelliJ IDEA", level: "Advanced", icon: "Cpu" },
          { name: "Antigravity", level: "Advanced", icon: "ShieldCheck" }
        ]
      }
    ]
  },
  certifications: [
    {
      title: "GenAI Professional",
      issuer: "Oracle",
      badge: "Verified Certification",
      description: "Generative AI foundational architectures, large language models, prompt engineering, and enterprise AI deployment."
    },
    {
      title: "Cyber Security",
      issuer: "Naan Mudhalvan",
      badge: "State Certification",
      description: "Network security fundamentals, threat analysis, cryptography, application vulnerability testing and defensive protocols."
    },
    {
      title: "Python",
      issuer: "Novitech",
      badge: "Industry Certified",
      description: "Core Python development, data structures, algorithms, and backend scripting."
    },
    {
      title: "Java Developer",
      issuer: "Codec Technologies",
      badge: "Industry Certified",
      description: "Java applications development, OOP principles, data structures, algorithms, and API database integration."
    },
    {
      title: "Full Stack Web Development",
      issuer: "Strydo Technologies",
      badge: "Industry Certified",
      description: "Full stack web application development across frontend, backend, and database layers."
    }
  ],
  coursework: [
    "Full Stack Web Development",
    "Object-Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Web Development Essentials"
  ],
  interests: {
    technical: ["Full Stack Development", "Artificial Intelligence", "Machine Learning", "Cloud Systems"],
    nonTechnical: ["Video Editing", "Content Creation", "Photography", "Tech Storytelling"]
  },
  projects: [
    {
      id: "ai-career-navigation",
      title: "AI Career Navigation Platform",
      category: "AI & Full Stack Systems",
      duration: "Apr – Jun 2025",
      shortDescription: "An AI-powered platform delivering personalized career, course, project, and internship recommendations with real-time AI insights.",
      fullDescription: "Developed an AI-powered platform for personalized career, course, project, and internship recommendations. Integrated AI APIs and real-time data to generate relevant career insights and recommendations. Built responsive React.js interfaces with Node.js backend services and MySQL database.",
      image: careerMockup,
      tags: ["React.js", "Node.js", "MySQL", "AI APIs", "Career Insights"],
      featured: true,
      stats: {
        metric1: "Personalized Roadmaps",
        metric2: "Real-time AI Insights",
        metric3: "100% Responsive UI"
      },
      liveUrl: "https://github.com/babutechinfo03-blip",
      githubUrl: "https://github.com/babutechinfo03-blip",
      challenges: "Synthesizing multi-factor skill assessments into unified real-time course and internship recommendation pathways.",
      solution: "Engineered Node.js backend services combined with AI API pipelines and indexed MySQL schemas."
    },
    {
      id: "ai-car-recommendation",
      title: "AI-Based Car Recommendation System",
      category: "AI & Decision Systems",
      duration: "Jan – Mar 2025",
      shortDescription: "An intelligent vehicle recommendation system suggesting optimal cars based on user requirements and driving preferences using ML and rule-based logic.",
      fullDescription: "Developed an AI-based car recommendation system to suggest vehicles based on user requirements and preferences. Implemented data filtering, rule-based logic, and machine learning techniques to generate relevant recommendations. Designed a responsive interface to simplify vehicle comparison and selection for users.",
      image: carMockup,
      tags: ["HTML", "CSS", "JavaScript", "MySQL", "Rule-Based AI", "Data Filtering"],
      featured: true,
      stats: {
        metric1: "Intelligent Matching",
        metric2: "Zero-Latency SQL Queries",
        metric3: "Interactive Comparison"
      },
      liveUrl: "https://github.com/babutechinfo03-blip",
      githubUrl: "https://github.com/babutechinfo03-blip",
      challenges: "Balancing multiple complex user parameters without slowing down search query response times.",
      solution: "Engineered indexed relational MySQL schemas paired with efficient client-side rule evaluation logic."
    }
  ],
  journey: [
    {
      year: "Jun 2026 – Jul 2026",
      title: "Full Stack Web Development Intern",
      organization: "Strydo Technologies Pvt. Ltd. (India)",
      description: "Developed responsive web application features across frontend, backend, and database layers. Implemented reusable UI components, application logic, and database integration for web applications. Debugged application issues and improved functionality, usability, and code quality.",
      badge: "Internship",
      skills: ["Full Stack Web", "Frontend & Backend", "Database Integration", "Reusable UI Components", "Code Quality"]
    },
    {
      year: "Jan 2026 – Apr 2026",
      title: "Java Developer Intern",
      organization: "Codec Technologies (Hybrid, India)",
      description: "Developed Java applications using OOP, data structures, and algorithms. Implemented APIs and database integration to support application features. Debugged and optimized application logic to improve performance and maintainability.",
      badge: "Internship",
      skills: ["Java", "OOP Concepts", "Data Structures", "Algorithms", "APIs", "Database Integration"]
    },
    {
      year: "Nov 2025 – Dec 2025",
      title: "Frontend Development Intern",
      organization: "CodeAlpha (Chennai, Tamil Nadu)",
      description: "Developed responsive React.js components using HTML, CSS, and JavaScript. Integrated frontend components with backend APIs to handle application data. Optimized UI responsiveness and code structure to improve user experience and maintainability.",
      badge: "Internship",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "API Integration", "UI Optimization"]
    },
    {
      year: "2023 – 2027",
      title: "B.Tech in Information Technology",
      organization: "Anna University — MPNMJ Engineering College (Erode, Tamil Nadu)",
      description: "Pursuing undergraduate degree in Information Technology with a CGPA of 7.63 / 10. Intensive coursework in Full Stack Web Development, Object-Oriented Programming, Data Structures and Algorithms, Database Management Systems, and Web Development Essentials.",
      badge: "Academics",
      skills: ["Full Stack Web Development", "Object-Oriented Programming", "Data Structures & Algorithms", "DBMS", "Web Essentials"]
    },
    {
      year: "2023",
      title: "Higher Secondary (HSC)",
      organization: "Govt. Boys Higher Secondary School, Ponnai (Vellore, Tamil Nadu)",
      description: "Completed Higher Secondary education with a grade of 74%, building a solid foundation in Mathematics, Computer Science, and Physics.",
      badge: "Schooling",
      skills: ["Computer Science", "Mathematics", "Foundational Science"]
    }
  ],
  contact: {
    heading: "Have a project or opportunity?\nLet's connect.",
    subheading: "Whether you're looking for a dedicated Full Stack Developer, a Java engineer, or want to collaborate on exciting web applications — feel free to reach out!",
    email: "babutechinfo03@gmail.com",
    web3forms_access_key: "", // Optional: Paste free Web3Forms Access Key from https://web3forms.com
    phone: "+91 8838643811",
    github: "https://github.com/babutechinfo03-blip",
    linkedin: "https://www.linkedin.com/in/babuit/",
    location: "Vellore / Erode / Chennai, Tamil Nadu, India"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/babutechinfo03-blip", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/babuit/", icon: "Linkedin" },
    { name: "Email", url: "mailto:babutechinfo03@gmail.com", icon: "Mail" }
  ]
};
