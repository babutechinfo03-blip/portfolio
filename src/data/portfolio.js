import devPhoto from '../assets/about-dev.jpg';
import carMockup from '../assets/car-rec-mockup.jpg';
import agriconnectMockup from '../assets/agriconnect-mockup.jpg';
import tenshiroMockup from '../assets/tenshiro-mockup.png';

export const portfolioData = {
  brand: "Babu V",
  name: "Babu V",
  role: "Software Engineer | Full Stack Developer",
  secondaryRole: "Software Engineer | Full Stack Web & AI Systems",
  tagline: "Aspiring Software Engineer skilled in full-stack web development, Java programming, the MERN Stack (MongoDB, Express.js, React.js, Node.js), and AI systems. Strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), RESTful APIs, and software engineering principles.",
  hero: {
    headlinePrefix: "HELLO! I'M",
    headlineMain: "BABU.V",
    subHeadline: "Software Engineer | Full Stack Developer",
    supportingText: "Aspiring Software Engineer skilled in full-stack web development, Java programming, the MERN Stack (MongoDB, Express.js, React.js, Node.js), and AI systems. Strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), RESTful APIs, and software engineering principles. Focused on developing scalable, efficient, and reliable software with a strong emphasis on code quality, maintainability, testing, and continuous innovation.",
    primaryCta: "Book a Call",
    secondaryCta: "Explore Projects",
    cvLink: "/Babu_V_Software_Engineer_Resume.pdf",
    image: devPhoto
  },
  stats: [
    { value: 3, suffix: "", label: "Engineering Internships" },
    { value: 7.8, suffix: " / 10", label: "CGPA (B.Tech IT)" },
    { value: 100, suffix: "%", label: "SSLC Board Score" },
    { value: 74, suffix: "%", label: "HSC Board Score" },
  ],
  about: {
    badge: "ABOUT THE DEVELOPER",
    heading: "Hello!",
    description: "Hi, I'm BABU V, an aspiring Software Engineer & Full Stack Developer pursuing B.Tech in Information Technology at M.P.N.M.J. Engineering College, Erode (Anna University) with a 7.8 / 10 CGPA.",
    secondaryDescription: "I specialize in building scalable, efficient, and reliable software with a strong emphasis on code quality, maintainability, performance optimization, and continuous innovation. My expertise covers full-stack web architectures, Java enterprise systems, relational and NoSQL databases, and modern AI integrations.",
    thirdDescription: "Through hands-on software development internships at Strydo Technologies, Codec Technologies, and CodeAlpha, I have engineered full-scale platforms—from Spring Boot microservices with 115 REST endpoints to multi-model AI architectures, WebSocket live streams, and responsive React applications.",
    location: "Vellore, Tamil Nadu, India",
    phone: "+91 8838643811",
    email: "babutechinfo03@gmail.com",
    github: "https://github.com/babutechinfo03-blip",
    linkedin: "https://www.linkedin.com/in/babuvishwanathanofficial/",
    portfolioUrl: "https://babutechiee.vercel.app/",
    status: "Available for Software Engineer & Full Stack Roles",
    cvUrl: "/Babu_V_Software_Engineer_Resume.pdf",
    image: devPhoto
  },
  skills: {
    heading: "Technologies I build with.",
    subheading: "A comprehensive technical toolkit spanning Full Stack Web Development, Enterprise Java, Relational & NoSQL Databases, Core Computer Science, and AI Systems.",
    categories: [
      {
        name: "Programming Languages",
        description: "Core algorithms, procedural and object-oriented languages",
        items: [
          { name: "Java", level: "Advanced", icon: "Coffee", highlight: true },
          { name: "JavaScript", level: "Advanced", icon: "FileCode", highlight: true },
          { name: "Python", level: "Intermediate", icon: "Binary", highlight: true },
          { name: "C", level: "Intermediate", icon: "Terminal", highlight: false },
          { name: "SQL", level: "Advanced", icon: "Database", highlight: true }
        ]
      },
      {
        name: "Frontend Development",
        description: "Modern component architectures, animation and responsive layouts",
        items: [
          { name: "React.js", level: "Advanced", icon: "Code2", highlight: true },
          { name: "Framer Motion", level: "Advanced", icon: "Sparkles", highlight: true },
          { name: "Tailwind CSS", level: "Advanced", icon: "Palette", highlight: true },
          { name: "HTML5", level: "Advanced", icon: "Layout", highlight: true },
          { name: "CSS3", level: "Advanced", icon: "Sparkles", highlight: true }
        ]
      },
      {
        name: "Backend Development",
        description: "Enterprise APIs, microservices, and server-side runtimes",
        items: [
          { name: "Node.js", level: "Advanced", icon: "Server", highlight: true },
          { name: "Express.js", level: "Advanced", icon: "Layers", highlight: true },
          { name: "Spring Boot", level: "Advanced", icon: "Zap", highlight: true },
          { name: "Spring Data JPA", level: "Advanced", icon: "Database", highlight: true },
          { name: "REST API Development", level: "Advanced", icon: "Network", highlight: true },
          { name: "Microservices", level: "Intermediate", icon: "Cpu", highlight: true }
        ]
      },
      {
        name: "Databases",
        description: "Relational data stores, NoSQL engines, and real-time backends",
        items: [
          { name: "MySQL", level: "Advanced", icon: "Table", highlight: true },
          { name: "MongoDB", level: "Advanced", icon: "Database", highlight: true },
          { name: "PostgreSQL", level: "Intermediate", icon: "Table", highlight: false },
          { name: "Firebase", level: "Intermediate", icon: "Flame", highlight: false }
        ]
      },
      {
        name: "Core Computer Science",
        description: "Fundamental computer science, systems design, and software engineering",
        items: [
          { name: "Data Structures & Algorithms (DSA)", level: "Advanced", icon: "Cpu", highlight: true },
          { name: "Object-Oriented Programming (OOP)", level: "Advanced", icon: "Layers", highlight: true },
          { name: "Database Management Systems (DBMS)", level: "Advanced", icon: "Database", highlight: true },
          { name: "System Design Fundamentals", level: "Intermediate", icon: "Network", highlight: true },
          { name: "Software Development Life Cycle (SDLC)", level: "Advanced", icon: "GitBranch", highlight: true },
          { name: "Complexity Analysis & Problem-Solving", level: "Advanced", icon: "Binary", highlight: true }
        ]
      },
      {
        name: "Tools & DevOps",
        description: "Modern developer workflows, containerization, and cloud services",
        items: [
          { name: "Git", level: "Advanced", icon: "GitBranch", highlight: true },
          { name: "GitHub", level: "Advanced", icon: "Github", highlight: true },
          { name: "Postman", level: "Advanced", icon: "Send", highlight: true },
          { name: "Docker Compose", level: "Intermediate", icon: "Box", highlight: true },
          { name: "CI/CD Pipelines", level: "Intermediate", icon: "RefreshCw", highlight: true },
          { name: "AWS Cloud", level: "Intermediate", icon: "Cloud", highlight: true }
        ]
      },
      {
        name: "AI & ML Technologies",
        description: "Machine learning models, LLM API integration, and intelligent agents",
        items: [
          { name: "AI API Integration", level: "Advanced", icon: "Cpu", highlight: true },
          { name: "Large Language Models (LLMs)", level: "Advanced", icon: "Sparkles", highlight: true },
          { name: "OpenAI SDK", level: "Advanced", icon: "Zap", highlight: true },
          { name: "Groq Llama 3.3 70B", level: "Advanced", icon: "Layers", highlight: true },
          { name: "Random Forest ML", level: "Intermediate", icon: "Binary", highlight: true },
          { name: "Hugging Face", level: "Intermediate", icon: "Smile", highlight: false }
        ]
      }
    ]
  },
  certifications: [
    {
      id: "hackerrank-se",
      title: "Software Engineer",
      issuer: "HackerRank",
      badge: "Verified Skill Certificate",
      credentialUrl: "https://www.hackerrank.com/certificates/d71ba9aaba99",
      serialNumber: "d71ba9aaba99",
      description: "Demonstrated verified proficiency in Software Engineering principles, problem solving, data structures, algorithms, and SQL database querying.",
      skills: ["Software Engineering", "Algorithms", "Data Structures", "SQL"]
    },
    {
      id: "naan-mudhalvan-cybersec",
      title: "Cyber Security",
      issuer: "Naan Mudhalvan",
      badge: "Government State Certification",
      credentialUrl: "https://drive.google.com/file/d/1LGZqi4d1tAxLS9K31jIKtRExZ_NVhQLx/view?usp=drive_link",
      serialNumber: "NM-TN-CYBERSEC",
      description: "Network security fundamentals, threat analysis, cryptography, application vulnerability testing, and defensive system protocols.",
      skills: ["Network Security", "Threat Analysis", "Cryptography", "Application Vulnerability"]
    },
    {
      id: "novitech-python",
      title: "Python Programming",
      issuer: "Novitech",
      badge: "Industry Certified",
      credentialUrl: "https://docs.google.com/document/d/14NH9PoaY6Fu0494epV03PZLWWYKQ3WF3/edit?usp=drive_link&ouid=101537972255391387869",
      serialNumber: "NOVI-PY-PROFESSIONAL",
      description: "Core Python development, data structures, algorithms, object-oriented programming principles, and backend automation scripting.",
      skills: ["Python OOP", "Data Structures", "Automation Scripting", "Backend Logic"]
    }
  ],
  achievements: [
    {
      title: "Winner — Paper Presentation",
      description: "Secured 1st Prize in the Intra-College Paper Presentation event at M.P.N.M.J. Engineering College for presenting software feasibility and viability analysis.",
      badge: "1st Prize Winner"
    },
    {
      title: "Winner — Intra-College Hackathon",
      description: "Secured 1st Place for building an end-to-end full-stack software application with clean architecture, algorithmic optimization, and seamless UI at M.P.N.M.J. Engineering College.",
      badge: "1st Place Winner"
    },
    {
      title: "Finalist — Protothon Hackathon, Chennai",
      description: "Competed in the intensive state-level 24-hour hackathon at Prince Dr. K. Vasudevan College of Engineering, Chennai, delivering rapid software prototyping and system architecture.",
      badge: "Hackathon Finalist"
    },
    {
      title: "Runner-Up — TECHNOVANZA-2K26 Hackathon",
      description: "Awarded Runner-Up merit certificate at the state-level technical symposium at Shree Venkateshwara Hi-Tech Engineering College for outstanding project execution.",
      badge: "Runner-Up Award"
    }
  ],
  coursework: [
    "Full Stack Web Development",
    "Object-Oriented Programming (OOP)",
    "Data Structures and Algorithms (DSA)",
    "Database Management Systems (DBMS)",
    "System Design Fundamentals",
    "Software Development Life Cycle (SDLC)"
  ],
  interests: {
    technical: [
      "Full Stack Development",
      "Java Enterprise Systems",
      "Large Language Models & AI",
      "Microservices & Cloud",
      "Database Optimization"
    ],
    nonTechnical: [
      "Technical Mentorship",
      "Competitive Coding",
      "Content Creation",
      "Video Editing"
    ]
  },
  projects: [
    {
      id: "harvion-ai",
      number: "01",
      title: "Harvion AI – Smart Agricultural System",
      category: "AI & Full Stack Systems",
      period: "2025 – 2026",
      shortDescription: "A full-stack agricultural platform with ML crop recommendation, JWT role-based access, Redis caching, Socket.io alerts, and an 8-language UI.",
      fullDescription: "Engineered a full-stack agri platform (React.js, Node.js, Express.js, MongoDB, FastAPI): 39 pages, 74 APIs, 20 data models. Trained a Random Forest crop model (29 crops, 8,700 synthetic samples); 8 passing unit tests validate the decision engine. Secured APIs with JWT role-based access, rate limiting, and Redis caching; added Socket.io alerts and an 8-language UI.",
      image: agriconnectMockup,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "FastAPI", "Random Forest ML", "Redis", "Socket.io", "JWT"],
      featured: true,
      badge: "FEATURED FULL-STACK",
      stats: {
        metric1: "39 Pages, 74 APIs, 20 Models",
        metric2: "29 Crops, 8,700 Samples",
        metric3: "Socket.io & 8-Language UI"
      },
      liveUrl: "https://agri-pulse-pied.vercel.app/",
      githubUrl: "https://github.com/babutechinfo03-blip/Harvion-AI",
      challenges: "Deploying a Random Forest model with rapid inference alongside real-time multi-lingual agricultural advisories and alerts.",
      solution: "Decoupled machine learning serving with FastAPI and Redis caching, secured API endpoints with JWT RBAC, and integrated Socket.io for live event streaming."
    },
    {
      id: "tenshiro",
      number: "02",
      title: "Tenshiro – AI Career Navigation Platform",
      category: "AI & Career Systems",
      period: "2025 – 2026",
      shortDescription: "An AI career navigation platform offering mentoring, roadmaps, interview prep, and resume analysis across 18 domains and 153 roles.",
      fullDescription: "Developed an AI career platform (React.js, Node.js, MySQL, OpenAI SDK): 23 pages, 74 REST endpoints, 15 tables. Delivered AI mentoring, roadmaps, interview prep, and resume analysis across 18 domains and 153 roles.",
      image: tenshiroMockup,
      tags: ["React.js", "Node.js", "MySQL", "OpenAI SDK", "REST APIs", "AI Mentoring"],
      featured: true,
      badge: "AI PLATFORM",
      stats: {
        metric1: "23 Pages, 74 REST APIs",
        metric2: "18 Domains & 153 Roles",
        metric3: "15 Relational Tables"
      },
      liveUrl: "https://tenshiro.vercel.app/",
      githubUrl: "https://github.com/babutechinfo03-blip/Tenshiro",
      challenges: "Generating personalized career roadmaps and real-time interview prep across 153 roles without excessive LLM latency.",
      solution: "Engineered optimized prompt pipelines with the OpenAI SDK, cached intermediate responses in MySQL, and architected modular REST services."
    },
    {
      id: "automind",
      number: "03",
      title: "AutoMind – AI Car Finder",
      category: "Web & Recommendation Systems",
      period: "2025",
      shortDescription: "A car discovery application with search, filtering, vehicle comparison, and favorites management across 55 cars and 6 categories.",
      fullDescription: "Built a car discovery app with React.js, TypeScript, Tailwind CSS and Supabase: 55 cars, 6 categories, 10 pages. Delivered search, filtering, recommendations, vehicle comparison and favorites management.",
      image: carMockup,
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Recommendation Engine", "Comparison"],
      featured: false,
      badge: "WEB APP",
      stats: {
        metric1: "55 Cars & 6 Categories",
        metric2: "10 Interactive Pages",
        metric3: "Dynamic Comparison Engine"
      },
      liveUrl: "https://carvendhan.netlify.app/",
      githubUrl: "https://github.com/Babuvishwanathan17/automind-car-finder",
      challenges: "Providing fluid multi-parameter filtering, category sorting, and side-by-side vehicle comparison with instant response times.",
      solution: "Utilized TypeScript for robust type safety, integrated Supabase for instant data synchronization, and designed responsive comparison components."
    }
  ],
  journey: [
    {
      id: "strydo",
      year: "Jun 2026 – Jul 2026",
      title: "Full Stack Web Development Intern",
      organization: "Strydo Technologies Pvt. Ltd.",
      location: "India",
      badge: "Internship",
      description: "Integrated LLM APIs (OpenAI SDK, Groq Llama 3.3 70B) in 5 backend controllers: AI mentor, interview prep, resume analysis. Implemented JWT and Google OAuth 2.0 login and a webcam-proctored exam flow with face detection and integrity scoring.",
      points: [
        "Integrated LLM APIs (OpenAI SDK, Groq Llama 3.3 70B) in 5 backend controllers: AI mentor, interview prep, resume analysis.",
        "Implemented JWT and Google OAuth 2.0 login and a webcam-proctored exam flow with face detection and integrity scoring."
      ],
      skills: ["OpenAI SDK", "Groq Llama 3.3 70B", "JWT", "Google OAuth 2.0", "Webcam Proctoring", "Face Detection", "React.js", "Node.js"],
      metrics: [
        { label: "AI Integration", value: "OpenAI & Groq" },
        { label: "Authentication", value: "JWT & OAuth 2.0" },
        { label: "Proctoring Flow", value: "Face Detection" }
      ]
    },
    {
      id: "codec",
      year: "Jan 2026 – Apr 2026",
      title: "Java Developer Intern",
      organization: "Codec Technologies",
      location: "Hybrid, India",
      badge: "Internship",
      description: "Developed an ERP backend (Java 21, Spring Boot 3): 115 REST endpoints, 20 controllers, 10 services, 28 JPA repositories. Designed 29 JPA entities in MySQL and secured endpoints using JWT, Spring Security and 8 roles (38 @PreAuthorize guards). Built STOMP WebSocket live updates and containerized the backend, frontend and MySQL 8 with Docker Compose. Generated a test dataset of 4,440 students, 423 faculty and 444,000 attendance records across 25 departments.",
      points: [
        "Developed an ERP backend (Java 21, Spring Boot 3): 115 REST endpoints, 20 controllers, 10 services, 28 JPA repositories.",
        "Designed 29 JPA entities in MySQL and secured endpoints using JWT, Spring Security and 8 roles (38 @PreAuthorize guards).",
        "Built STOMP WebSocket live updates and containerized the backend, frontend and MySQL 8 with Docker Compose.",
        "Generated a test dataset of 4,440 students, 423 faculty and 444,000 attendance records across 25 departments."
      ],
      skills: ["Java 21", "Spring Boot 3", "Spring Data JPA", "Spring Security", "MySQL 8", "STOMP WebSocket", "Docker Compose", "JWT RBAC"],
      metrics: [
        { label: "REST Endpoints", value: "115 APIs / 20 Ctrls" },
        { label: "Security & Guards", value: "8 Roles / 38 Guards" },
        { label: "Test Dataset", value: "444,000 Records" }
      ]
    },
    {
      id: "codealpha",
      year: "Nov 2025 – Dec 2025",
      title: "Frontend Development Intern",
      organization: "CodeAlpha",
      location: "Chennai, Tamil Nadu",
      badge: "Internship",
      description: "Designed a responsive React 19 and Tailwind CSS portfolio with 10 sections and 10 reusable components. Implemented Framer Motion animations in 15 files; the production build is 138 kB gzipped JS and 13 kB gzipped CSS.",
      points: [
        "Designed a responsive React 19 and Tailwind CSS portfolio with 10 sections and 10 reusable components.",
        "Implemented Framer Motion animations in 15 files; the production build is 138 kB gzipped JS and 13 kB gzipped CSS."
      ],
      skills: ["React 19", "Tailwind CSS", "Framer Motion", "Responsive Design", "Component Architecture", "Vite"],
      metrics: [
        { label: "Component System", value: "10 Reusable Comps" },
        { label: "Motion Files", value: "15 Framer Files" },
        { label: "Optimized Bundle", value: "138 kB gzipped" }
      ]
    },
    {
      id: "btech",
      year: "2023 – 2027 (Expected)",
      title: "B.Tech. – Information Technology",
      organization: "M.P.N.M.J. Engineering College",
      location: "Erode, Tamil Nadu",
      badge: "Degree",
      description: "Undergraduate degree in Information Technology with a CGPA of 7.8 / 10. Rigorous coursework in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and Web Engineering.",
      points: [
        "Cumulative Grade Point Average (CGPA): 7.8 / 10",
        "Focused study in Data Structures & Algorithms, Java OOP, DBMS, and Web Architecture."
      ],
      skills: ["DSA", "Java OOP", "DBMS", "System Design", "Web Development"],
      metrics: [
        { label: "Degree", value: "B.Tech IT" },
        { label: "Academic CGPA", value: "7.8 / 10" },
        { label: "Timeline", value: "2023 – 2027" }
      ]
    },
    {
      id: "hsc",
      year: "2023 (Completed)",
      title: "Higher Secondary Certificate (HSC)",
      organization: "Govt Boys Higher Secondary School Ponnai",
      location: "Vellore, Tamil Nadu",
      badge: "HSC Board",
      description: "Completed Higher Secondary Certificate (HSC) with 74% aggregate.",
      points: [
        "Completed HSC Board Examination with 74% aggregate.",
        "Strong foundation in Computer Science, Mathematics, and Physics."
      ],
      skills: ["Mathematics", "Computer Science", "Physics"],
      metrics: [
        { label: "Board", value: "State Board" },
        { label: "Score", value: "74%" },
        { label: "Year", value: "2023" }
      ]
    },
    {
      id: "sslc",
      year: "2021 (Completed)",
      title: "Secondary School Leaving Certificate (SSLC)",
      organization: "Govt Boys Higher Secondary School Ponnai",
      location: "Vellore, Tamil Nadu",
      badge: "SSLC Board",
      description: "Completed Secondary School Leaving Certificate (SSLC) with 100% aggregate.",
      points: [
        "Achieved a perfect 100% aggregate score in the SSLC Board Examination."
      ],
      skills: ["Foundational Sciences", "Mathematics", "English"],
      metrics: [
        { label: "Board", value: "State Board" },
        { label: "Perfect Score", value: "100%" },
        { label: "Year", value: "2021" }
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech. – Information Technology",
      institution: "M.P.N.M.J. Engineering College",
      location: "Erode, Tamil Nadu",
      period: "2023 – 2027 (Expected)",
      score: "CGPA: 7.8 / 10"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt Boys Higher Secondary School Ponnai",
      location: "Vellore, Tamil Nadu",
      period: "2023 (Completed)",
      score: "Percentage: 74%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Govt Boys Higher Secondary School Ponnai",
      location: "Vellore, Tamil Nadu",
      period: "2021 (Completed)",
      score: "Percentage: 100%"
    }
  ],
  contact: {
    heading: "Have a project or opportunity?\nLet's connect.",
    subheading: "Whether you have an open Software Engineer position, a full-stack developer role, or want to collaborate on innovative web applications — let's connect!",
    email: "babutechinfo03@gmail.com",
    web3forms_access_key: "",
    phone: "+91 8838643811",
    github: "https://github.com/babutechinfo03-blip",
    linkedin: "https://www.linkedin.com/in/babuvishwanathanofficial/",
    portfolioUrl: "https://babutechiee.vercel.app/",
    location: "Vellore, Tamil Nadu, India",
    cvUrl: "/Babu_V_Software_Engineer_Resume.pdf"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/babutechinfo03-blip", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/babuvishwanathanofficial/", icon: "Linkedin" },
    { name: "Email", url: "mailto:babutechinfo03@gmail.com", icon: "Mail" }
  ]
};
