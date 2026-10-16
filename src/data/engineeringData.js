// UNIPATH Verified Engineering & Sapthagiri NPS University Dataset

export const UNIVERSITY_INFO = {
  name: "Sapthagiri NPS University",
  shortName: "SNPSU",
  tagline: "Empowering Minds, Engineering the Future",
  location: "Chikkabanavara, Hesaraghatta Main Road, Bengaluru, Karnataka 560090",
  type: "Private State University (Karnataka Act No. 17 of 2023 / Legacy Sapthagiri College of Engineering established in 2001)",
  officialWebsite: "https://www.snpsu.edu.in/",
  engineeringPortal: "https://snpsu.edu.in/engineering/",
  admissionsInfo: "https://www.snpsu.edu.in/admissions",
  admissionsPortal: "https://snpsuadmissions.snpsu.edu.in/",
  alternateAdmissionUrl: "https://admission.snpsu.edu.in",
  campusFeatures: [
    {
      title: "State-of-the-Art Labs",
      desc: "Specialized computer labs, electronics design workstations, robotics and IoT testing bays.",
      sourceType: "official",
      sourceLabel: "Officially sourced information"
    },
    {
      title: "Central Library & Digital Resources",
      desc: "Extensive physical catalog, IEEE/Springer digital access, quiet reading zones, and group discussion rooms.",
      sourceType: "official",
      sourceLabel: "Officially sourced information"
    },
    {
      title: "Industry Collaboration & Placements",
      desc: "Active placement cell, skill training modules, and corporate linkages across Bangalore's tech ecosystem.",
      sourceType: "official",
      sourceLabel: "Officially sourced information"
    },
    {
      title: "Green Campus Atmosphere",
      desc: "Sprawling educational complex in North Bengaluru with sports grounds, hostel accommodations, and auditorium.",
      sourceType: "official",
      sourceLabel: "Officially sourced information"
    }
  ],
  disclaimer: "UNIPATH is an independent student-built exploratory platform designed to help prospective engineering students discover their interests. It is not the official website of Sapthagiri NPS University. All university trademarks, programme names, and official links belong to their respective authorities."
};

export const UNIVERSITY_PROGRAMMES = [
  {
    id: "cse-core",
    name: "B.E. – Computer Science & Engineering",
    degree: "Undergraduate (4 Years)",
    category: "Software & Computing",
    overview: "Comprehensive curriculum covering algorithmic problem solving, software engineering, systems programming, and modern computational architecture.",
    officialUrl: "https://snpsu.edu.in/course/computer science and engineering",
    sourceType: "official",
    keyAreas: ["Algorithms & Data Structures", "Operating Systems", "Cloud & Web Architectures", "Database Systems"],
    unipathGuidance: "Ideal for students who love logical puzzles, building web or mobile apps, and understanding how computers execute code from low-level memory to cloud scale."
  },
  {
    id: "cse-aiml",
    name: "B.E. – CSE (Artificial Intelligence & Machine Learning)",
    degree: "Undergraduate (4 Years)",
    category: "Artificial Intelligence",
    overview: "Focused specialization integrating machine learning algorithms, deep neural networks, computer vision, natural language processing, and statistical computing.",
    officialUrl: "https://snpsu.edu.in/course/ArtificialIntelligenceMachineLearning",
    sourceType: "official",
    keyAreas: ["Supervised & Unsupervised ML", "Deep Learning & Neural Networks", "Natural Language Processing", "Computer Vision"],
    unipathGuidance: "Great for students fascinated by smart automation, predictive modeling, speech recognition, and building generative AI applications."
  },
  {
    id: "cse-aids",
    name: "B.E. – CSE (Artificial Intelligence & Data Science)",
    degree: "Undergraduate (4 Years)",
    category: "Artificial Intelligence & Data",
    overview: "Hybrid curriculum blending intelligent systems engineering with big data analytics, statistical modeling, data visualization, and decision intelligence.",
    officialUrl: "https://snpsu.edu.in/course/ArtificialIntelligenceData",
    sourceType: "official",
    keyAreas: ["Applied Data Science", "Big Data Analytics", "Statistical Inference", "AI Decision Models"],
    unipathGuidance: "Perfect for students who enjoy both mathematical modeling and extracting meaningful stories, trends, and business intelligence from data."
  },
  {
    id: "cse-ds",
    name: "B.E. – CSE (Data Science)",
    degree: "Undergraduate (4 Years)",
    category: "Data Science",
    overview: "Specialized engineering program emphasizing data pipelines, data warehousing, predictive analytics, visualization, and cloud-scale data platforms.",
    officialUrl: "https://snpsu.edu.in/course/BEDataScience",
    sourceType: "official",
    keyAreas: ["Data Wrangling & ETL", "Predictive Analytics", "Business Intelligence", "Cloud Data Lakes"],
    unipathGuidance: "Best suited for analytical thinkers who like working with metrics, quantitative reasoning, and visual dashboards."
  },
  {
    id: "ece",
    name: "B.E. – Electronics & Communication Engineering",
    degree: "Undergraduate (4 Years)",
    category: "Hardware & Electronics",
    overview: "Covers analog & digital communications, microcontrollers, embedded systems design, VLSI circuitry, signals and systems, and wireless networks.",
    officialUrl: "https://snpsu.edu.in/course/ECE",
    sourceType: "official",
    keyAreas: ["Digital Signal Processing", "Embedded Microcontrollers", "VLSI Design & Fabrication", "Wireless Communication"],
    unipathGuidance: "A bridge between hardware and software. Ideal for students who want to build smart devices, robotics, drones, or IoT sensors."
  },
  {
    id: "eee",
    name: "B.E. – Electrical & Electronics Engineering",
    degree: "Undergraduate (4 Years)",
    category: "Electrical Systems",
    overview: "Focuses on electric circuits, power generation, transmission, renewable energy technologies, power electronics, electric vehicle powertrains, and control automation.",
    officialUrl: "https://snpsu.edu.in/course/EEE",
    sourceType: "official",
    keyAreas: ["Power Systems & Smart Grids", "Electric Vehicles & Energy Storage", "Renewable Energy Systems", "Industrial Control Systems"],
    unipathGuidance: "Essential for students passionate about green energy transition, smart electric grids, EV powertrains, and high-voltage power engineering."
  },
  {
    id: "mtech-cse",
    name: "M.Tech – Computer Science & Engineering",
    degree: "Postgraduate (2 Years)",
    category: "Advanced Computing",
    overview: "Advanced postgraduate specialization emphasizing high-performance computing, distributed networks, advanced algorithm design, and applied research.",
    officialUrl: "https://snpsu.edu.in/course/MTechCE",
    sourceType: "official",
    keyAreas: ["Advanced Algorithms", "Distributed Systems", "Cloud Computing Security", "Research Methodologies"],
    unipathGuidance: "Recommended for graduates aiming to pursue technical leadership, R&D labs, or academic specialization."
  },
  {
    id: "mtech-ece-vlsi",
    name: "M.Tech – Electronics & Communication Engineering (VLSI Design)",
    degree: "Postgraduate (2 Years)",
    category: "Semiconductors & VLSI",
    overview: "Specialized postgraduate program focused on semiconductor device modeling, ASIC design, digital and analog VLSI testing, and semiconductor fabrication workflows.",
    officialUrl: "https://snpsu.edu.in/course/M.Tech Electronics and Communication ",
    sourceType: "official",
    keyAreas: ["ASIC & FPGA Design", "Analog & Mixed-Signal ICs", "CAD for VLSI", "Semiconductor Physics"],
    unipathGuidance: "Designed for engineers wanting to work in India's expanding semiconductor chip design and verification industry."
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What do you enjoy exploring most?",
    subtitle: "Select the option that sparks your genuine curiosity.",
    options: [
      { text: "Artificial intelligence and intelligent systems that can learn.", category: "ai", weight: 3 },
      { text: "Building software, web apps, or games people can interact with.", category: "swe", weight: 3 },
      { text: "Working with data, finding hidden patterns and statistics.", category: "ds", weight: 3 },
      { text: "Electronics, circuits, microcontrollers, and smart devices.", category: "ece", weight: 3 },
      { text: "Electrical systems, renewable energy, and power networks.", category: "eee", weight: 3 },
      { text: "I am still exploring different technologies and possibilities.", category: "explore", weight: 1 }
    ]
  },
  {
    id: 2,
    question: "Which type of challenge sounds most exciting?",
    subtitle: "Think about the kind of puzzle you wouldn't mind spending hours on.",
    options: [
      { text: "Training an algorithm to recognize objects or generate human-like text.", category: "ai", weight: 3 },
      { text: "Architecting a web application with smooth user experience and backend.", category: "swe", weight: 3 },
      { text: "Uncovering trends from massive datasets to make accurate predictions.", category: "ds", weight: 3 },
      { text: "Wiring a circuit and programming a microcontroller to read sensors.", category: "ece", weight: 3 },
      { text: "Designing clean power grids, solar inverters, or electric vehicle motors.", category: "eee", weight: 3 },
      { text: "Exploring real-world problems from multiple angles before committing.", category: "explore", weight: 1 }
    ]
  },
  {
    id: 3,
    question: "Which activity would you most like to try first?",
    subtitle: "Imagine you have a free weekend with all necessary tools.",
    options: [
      { text: "Developing a custom AI chatbot or computer vision camera filter.", category: "ai", weight: 3 },
      { text: "Creating a student productivity web application or mobile app.", category: "swe", weight: 3 },
      { text: "Analyzing real-world sports or health data and creating visual charts.", category: "ds", weight: 3 },
      { text: "Building an automated home lighting system using Arduino or ESP32.", category: "ece", weight: 3 },
      { text: "Testing a mini solar-powered battery charger or motor controller.", category: "eee", weight: 3 },
      { text: "Trying a hands-on sample of several fields to see what clicks.", category: "explore", weight: 1 }
    ]
  },
  {
    id: 4,
    question: "When solving a problem, what is your natural instinct?",
    subtitle: "Your thinking style says a lot about engineering branches you will love.",
    options: [
      { text: "Look for statistical patterns and teach the system through training data.", category: "ai", weight: 3 },
      { text: "Break it down into logical functions, algorithms, and modular code.", category: "swe", weight: 3 },
      { text: "Organize the information into charts, tables, and quantitative metrics.", category: "ds", weight: 3 },
      { text: "Inspect the physical hardware, test connections, and check voltage signals.", category: "ece", weight: 3 },
      { text: "Consider the overall energy flow, safety, efficiency, and sustainability.", category: "eee", weight: 3 },
      { text: "Brainstorm collaboratively and study practical case studies.", category: "explore", weight: 1 }
    ]
  },
  {
    id: 5,
    question: "Which technological breakthrough fascinates you the most?",
    subtitle: "Which breakthrough makes you think 'I want to build things like that'?",
    options: [
      { text: "Autonomous self-driving cars and intelligent conversational agents.", category: "ai", weight: 3 },
      { text: "Global cloud platforms, mobile operating systems, and video games.", category: "swe", weight: 3 },
      { text: "Algorithmic recommendations and predictive healthcare data models.", category: "ds", weight: 3 },
      { text: "Nanometer semiconductor microchips, drones, and wearable smartwatches.", category: "ece", weight: 3 },
      { text: "High-capacity electric vehicle batteries and green renewable microgrids.", category: "eee", weight: 3 },
      { text: "A mix of software, hardware, and sustainable societal impact.", category: "explore", weight: 1 }
    ]
  },
  {
    id: 6,
    question: "What kind of capstone project would you be most proud to show?",
    subtitle: "Envision yourself showcasing your project at a university exhibition.",
    options: [
      { text: "A medical image diagnosis tool powered by deep learning neural nets.", category: "ai", weight: 3 },
      { text: "A collaborative real-time web platform used by thousands of students.", category: "swe", weight: 3 },
      { text: "An interactive public health dashboard predicting disease spread trends.", category: "ds", weight: 3 },
      { text: "An autonomous rover with obstacle detection and wireless telemetry.", category: "ece", weight: 3 },
      { text: "A smart solar microgrid prototype with automated load balancing.", category: "eee", weight: 3 },
      { text: "An interdisciplinary project combining basic code, sensors, and data.", category: "explore", weight: 1 }
    ]
  },
  {
    id: 7,
    question: "How do you prefer your learning journey to look?",
    subtitle: "The way you like to learn helps guide your academic experience.",
    options: [
      { text: "Heavy on math, matrix algebra, probability, and neural algorithms.", category: "ai", weight: 3 },
      { text: "Hands-on coding, software design patterns, and continuous testing.", category: "swe", weight: 3 },
      { text: "Data wrangling, statistical charts, SQL queries, and insight storytelling.", category: "ds", weight: 3 },
      { text: "Hardware breadboards, oscilloscopes, microcontrollers, and C/C++.", category: "ece", weight: 3 },
      { text: "Electrical machines, electromagnetism, circuit design, and safety systems.", category: "eee", weight: 3 },
      { text: "A balanced, progressive curriculum giving me exposure to multiple topics.", category: "explore", weight: 1 }
    ]
  }
];

export const INTEREST_PROFILES = {
  ai: {
    title: "Artificial Intelligence & Intelligent Systems",
    tagline: "Empowering computers to perceive, learn, and make intelligent decisions.",
    description: "Your responses show a strong curiosity for machine learning, neural networks, predictive algorithms, and intelligent agents.",
    recommendedBranches: [
      "B.E. – CSE (Artificial Intelligence & Machine Learning)",
      "B.E. – CSE (Artificial Intelligence & Data Science)",
      "B.E. – Computer Science & Engineering"
    ],
    whyMatched: "You indicated interest in learning algorithms, training computers with data, and building autonomous intelligent solutions.",
    coreSkills: ["Python Programming", "Linear Algebra & Probability", "Machine Learning (Scikit-Learn)", "Deep Learning (PyTorch)", "Prompt Engineering"],
    starterProject: "Build an Image Classifier that distinguishes between different objects using transfer learning.",
    careerOutcomes: ["AI Engineer", "Machine Learning Specialist", "Computer Vision Researcher", "NLP Developer"],
    officialBranchIds: ["cse-aiml", "cse-aids", "cse-core"]
  },
  swe: {
    title: "Software Development & Systems Engineering",
    tagline: "Designing scalable applications, cloud architectures, and digital experiences.",
    description: "Your responses highlight an appetite for logic, software development, building practical applications, and engineering reliable user systems.",
    recommendedBranches: [
      "B.E. – Computer Science & Engineering",
      "B.E. – CSE (Data Science)",
      "B.E. – CSE (Artificial Intelligence & Machine Learning)"
    ],
    whyMatched: "You enjoy structured coding, problem-solving through modular architecture, and building digital tools that everyday people can interact with.",
    coreSkills: ["Data Structures & Algorithms", "JavaScript / TypeScript", "Backend APIs (Node/Express)", "SQL/NoSQL Databases", "Git Version Control"],
    starterProject: "A campus resource exchange web application with search, filtering, and responsive interface.",
    careerOutcomes: ["Software Development Engineer (SDE)", "Full-Stack Web Developer", "Backend Systems Engineer", "Mobile App Developer"],
    officialBranchIds: ["cse-core", "cse-ds", "cse-aiml"]
  },
  ds: {
    title: "Data Science & Analytical Intelligence",
    tagline: "Transforming raw data into actionable knowledge, metrics, and predictive insights.",
    description: "You gravitate toward statistics, quantitative reasoning, discovering patterns in data, and visually communicating findings.",
    recommendedBranches: [
      "B.E. – CSE (Data Science)",
      "B.E. – CSE (Artificial Intelligence & Data Science)",
      "B.E. – Computer Science & Engineering"
    ],
    whyMatched: "You selected options focused on data analysis, statistical trends, prediction modeling, and metrics-driven decisions.",
    coreSkills: ["Python (Pandas, NumPy)", "SQL Querying", "Exploratory Data Analysis", "Interactive Dashboards", "Statistical Inference"],
    starterProject: "An interactive public dataset explorer analyzing city traffic or weather trends with automated charts.",
    careerOutcomes: ["Data Analyst", "Data Scientist", "Analytics Engineer", "Business Intelligence Specialist"],
    officialBranchIds: ["cse-ds", "cse-aids", "cse-core"]
  },
  ece: {
    title: "Electronics & Embedded Hardware",
    tagline: "Bridging the physical and digital worlds with microchips, sensors, and wireless communication.",
    description: "You are drawn to how electronic devices work under the hood, circuit design, sensor prototyping, and hardware-software interaction.",
    recommendedBranches: [
      "B.E. – Electronics & Communication Engineering",
      "M.Tech – Electronics & Communication Engineering (VLSI Design)"
    ],
    whyMatched: "You expressed excitement about physical devices, microcontrollers, sensor-based automation, and semiconductor hardware.",
    coreSkills: ["Digital & Analog Electronics", "Embedded C / C++", "Microcontroller Prototyping (Arduino/ESP32)", "PCB Design Basics", "Wireless Protocols"],
    starterProject: "A smart environmental monitor reading air quality, temperature, and humidity sent to an IoT cloud dashboard.",
    careerOutcomes: ["Embedded Systems Engineer", "IoT Solutions Architect", "VLSI / ASIC Verification Engineer", "RF & Wireless Specialist"],
    officialBranchIds: ["ece", "mtech-ece-vlsi"]
  },
  eee: {
    title: "Electrical Systems & Sustainable Energy",
    tagline: "Powering the modern world through clean energy, smart grids, and electric mobility.",
    description: "You are passionate about power generation, sustainable energy transition, electric vehicle powertrains, and high-voltage grid stability.",
    recommendedBranches: [
      "B.E. – Electrical & Electronics Engineering"
    ],
    whyMatched: "Your answers favored clean energy systems, electrical power management, electric motors, and sustainable infrastructure.",
    coreSkills: ["Circuit Analysis", "Electric Machines & Motors", "Power Electronics", "Renewable Energy Systems", "MATLAB / Simulink"],
    starterProject: "A solar battery charge controller with real-time energy efficiency telemetry.",
    careerOutcomes: ["Electrical Design Engineer", "Power Systems Engineer", "EV Powertrain Engineer", "Renewable Energy Consultant"],
    officialBranchIds: ["eee"]
  },
  explore: {
    title: "Broad Exploration & Foundational Engineering",
    tagline: "Keeping horizons broad while developing foundational problem-solving abilities.",
    description: "You enjoy multiple aspects of technology. This is completely natural before starting college! A solid foundational year will help you find your exact calling.",
    recommendedBranches: [
      "B.E. – Computer Science & Engineering",
      "B.E. – Electronics & Communication Engineering",
      "B.E. – CSE (Artificial Intelligence & Machine Learning)"
    ],
    whyMatched: "You showed curiosity across several disciplines rather than a single narrow silo.",
    coreSkills: ["Fundamental Programming in C/Python", "Engineering Mathematics", "Problem Decomposition", "Technical Prototyping"],
    starterProject: "An exploratory multi-tool: a simple web page connected to an Arduino sensor showing live readings.",
    careerOutcomes: ["Multidisciplinary Engineer", "Systems Integrator", "Technical Product Associate"],
    officialBranchIds: ["cse-core", "ece", "cse-aiml"]
  }
};

export const CAREER_PATHWAYS = [
  {
    id: "path-ai",
    title: "Path A: Artificial Intelligence & Machine Learning",
    badge: "Most Explored",
    interest: "Artificial Intelligence & Smart Systems",
    relevantBranch: "B.E. – CSE (AI & ML) / B.E. – CSE (AI & DS)",
    officialBranchUrl: "https://snpsu.edu.in/course/ArtificialIntelligenceMachineLearning",
    stages: [
      {
        stageName: "Foundational Skills",
        focus: "Programming & Math Essentials",
        description: "Develop strong computational logic, matrix algebra, and structured data handling.",
        topics: ["Python programming syntax & control flow", "Linear algebra (vectors, matrices, eigenvalues)", "Multivariate calculus & gradient descent", "Probability distributions & Bayesian statistics"]
      },
      {
        stageName: "Core Technologies",
        focus: "Machine Learning & Neural Architectures",
        description: "Understand how mathematical optimization enables machines to learn patterns from datasets.",
        topics: ["Supervised learning (Regression, Trees, SVM)", "Unsupervised clustering (K-Means, PCA)", "Deep learning foundations (CNNs, RNNs)", "PyTorch & Scikit-learn frameworks"]
      },
      {
        stageName: "Applied Projects",
        focus: "Realistic Capstone Projects",
        description: "Hands-on projects to demonstrate problem formulation and model evaluation.",
        topics: [
          "Project 1: Image classifier distinguishing damaged components on an assembly line",
          "Project 2: Sentiment analyzer for student campus feedback using NLP",
          "Project 3: Interactive recommendation engine deployed on web"
        ]
      },
      {
        stageName: "Possible Career Directions",
        focus: "Industry & Research Roles",
        description: "Roles shaping next-generation intelligent automation across software and enterprise.",
        topics: [
          "AI Engineer: Designing and serving ML models into production applications.",
          "Machine Learning Engineer: Training, optimizing, and monitoring neural pipelines.",
          "Computer Vision / NLP Specialist: Fine-tuning vision and language transformers."
        ]
      }
    ]
  },
  {
    id: "path-swe",
    title: "Path B: Software Development & Systems",
    badge: "High Industry Demand",
    interest: "Building Software & Web Platforms",
    relevantBranch: "B.E. – Computer Science & Engineering",
    officialBranchUrl: "https://snpsu.edu.in/course/computer science and engineering",
    stages: [
      {
        stageName: "Foundational Skills",
        focus: "Programming & Algorithmic Rigor",
        description: "Learn how data is represented in memory and how to solve problems efficiently.",
        topics: ["C / C++ or Java programming foundations", "Data Structures (Arrays, Linked Lists, Trees, Graphs)", "Asymptotic time and space complexity (Big-O)", "Object-Oriented Design & Principles (SOLID)"]
      },
      {
        stageName: "Core Technologies",
        focus: "Modern Web, APIs & Databases",
        description: "Build interactive client interfaces connected to scalable server databases.",
        topics: ["Modern JavaScript/TypeScript & React", "REST & GraphQL API design", "Relational SQL (PostgreSQL) & NoSQL databases", "Linux environment & Git version control workflows"]
      },
      {
        stageName: "Applied Projects",
        focus: "Realistic Capstone Projects",
        description: "Software that solves real problems and demonstrates clean code craftsmanship.",
        topics: [
          "Project 1: University event registration and digital ticket generation platform",
          "Project 2: Real-time collaborative note-taking application using WebSockets",
          "Project 3: Developer portfolio with automated CI/CD deployment"
        ]
      },
      {
        stageName: "Possible Career Directions",
        focus: "Industry Roles",
        description: "Software engineering disciplines across product startups and technology multinationals.",
        topics: [
          "Software Development Engineer (SDE): Writing core product features and reliable code.",
          "Full-Stack Developer: Bridging responsive frontends with robust backend microservices.",
          "Backend Systems Engineer: Designing high-throughput databases and distributed APIs."
        ]
      }
    ]
  },
  {
    id: "path-ds",
    title: "Path C: Data Science & Analytics",
    badge: "Decision Intelligence",
    interest: "Data Patterns, Statistics & Insights",
    relevantBranch: "B.E. – CSE (Data Science) / B.E. – CSE (AI & DS)",
    officialBranchUrl: "https://snpsu.edu.in/course/BEDataScience",
    stages: [
      {
        stageName: "Foundational Skills",
        focus: "Quantitative & Analytical Rigor",
        description: "Understand data distributions, sampling, hypothesis testing, and relational structures.",
        topics: ["Python for data analysis (NumPy, Pandas)", "Advanced SQL queries, joins, and aggregations", "Descriptive & Inferential statistics", "Data ethics and privacy fundamentals"]
      },
      {
        stageName: "Core Technologies",
        focus: "Data Pipelines & Visual Analytics",
        description: "Collect, sanitize, and transform messy unstructured datasets into actionable insight dashboards.",
        topics: ["Data visualization with Matplotlib, Seaborn, and Plotly", "Feature engineering & missing data imputation", "Predictive modeling & regression analysis", "Big data storage basics (Data Lakes, Parquet)"]
      },
      {
        stageName: "Applied Projects",
        focus: "Realistic Capstone Projects",
        description: "Data-driven projects that answer critical operational questions.",
        topics: [
          "Project 1: Bengaluru urban transit delay explorer and predictive arrival model",
          "Project 2: E-commerce customer churn analysis dashboard with automated reports",
          "Project 3: Interactive air quality index (AQI) forecasting tool"
        ]
      },
      {
        stageName: "Possible Career Directions",
        focus: "Industry Roles",
        description: "Empowering organizational leaders to make verified data-driven decisions.",
        topics: [
          "Data Analyst: Translating complex business questions into dashboards and SQL queries.",
          "Data Scientist: Building predictive statistical models and automated recommendation features.",
          "Analytics Engineer: Managing clean transformation pipelines between raw databases and BI tools."
        ]
      }
    ]
  },
  {
    id: "path-ece",
    title: "Path D: Electronics & Embedded Systems",
    badge: "Hardware & IoT",
    interest: "Circuits, Microcontrollers & Hardware",
    relevantBranch: "B.E. – Electronics & Communication Engineering",
    officialBranchUrl: "https://snpsu.edu.in/course/ECE",
    stages: [
      {
        stageName: "Foundational Skills",
        focus: "Circuits & Physics Foundations",
        description: "Understand electronic currents, semiconductors, operational amplifiers, and digital logic.",
        topics: ["Circuit theory & Ohm/Kirchhoff laws", "Semiconductor physics (Diodes, Transistors, MOSFETs)", "Boolean algebra & combinational logic gates", "Basic electrical measurement with Multimeters & Oscilloscopes"]
      },
      {
        stageName: "Core Technologies",
        focus: "Microcontrollers, C & Embedded Protocols",
        description: "Program hardware to sense physical stimuli and communicate over digital protocols.",
        topics: ["Embedded C programming for microcontrollers", "Arduino, ESP32, and STM32 architectures", "Communication protocols (UART, SPI, I2C)", "Sensors, actuators, and signal conditioning"]
      },
      {
        stageName: "Applied Projects",
        focus: "Realistic Capstone Projects",
        description: "Physical prototypes showing hardware-software integration.",
        topics: [
          "Project 1: Solar-powered environmental sensor station with WiFi telemetry",
          "Project 2: Autonomous obstacle-avoiding robotic rover with ultrasonic sensors",
          "Project 3: Smart wearable pulse-rate tracker with OLED display"
        ]
      },
      {
        stageName: "Possible Career Directions",
        focus: "Industry Roles",
        description: "Pioneering the Internet of Things, robotics, automotive electronics, and chip design.",
        topics: [
          "Embedded Systems Engineer: Writing low-level firmware for connected hardware products.",
          "IoT Solutions Architect: Building sensor networks and industrial telemetry pipelines.",
          "VLSI Verification Engineer: Designing and validating integrated circuit silicon chips."
        ]
      }
    ]
  },
  {
    id: "path-eee",
    title: "Path E: Electrical Systems & Power Engineering",
    badge: "Clean Energy Transition",
    interest: "Electrical Power, Motors & Green Energy",
    relevantBranch: "B.E. – Electrical & Electronics Engineering",
    officialBranchUrl: "https://snpsu.edu.in/course/EEE",
    stages: [
      {
        stageName: "Foundational Skills",
        focus: "Electromagnetism & Circuit Physics",
        description: "Master AC/DC circuit analysis, electromagnetic fields, and power mathematics.",
        topics: ["AC and DC circuit theorems (Thevenin, Norton)", "Electromagnetism & magnetic circuits", "Polyphase AC systems and power factor correction", "Electrical safety standards and grounding"]
      },
      {
        stageName: "Core Technologies",
        focus: "Power Electronics, Motors & Clean Energy",
        description: "Control high voltages, electric motors, solar converters, and energy storage.",
        topics: ["Power electronics (Inverters, Converters, Choppers)", "Transformers, Induction Motors & Synchronous Machines", "Solar photovoltaic and wind energy conversion", "MATLAB / Simulink circuit simulation"]
      },
      {
        stageName: "Applied Projects",
        focus: "Realistic Capstone Projects",
        description: "Prototypes addressing real-world power efficiency and green transitions.",
        topics: [
          "Project 1: Maximum Power Point Tracking (MPPT) solar battery charger prototype",
          "Project 2: Speed and torque controller for brushless DC electric vehicle motor",
          "Project 3: Smart energy meter with automated over-consumption alert system"
        ]
      },
      {
        stageName: "Possible Career Directions",
        focus: "Industry Roles",
        description: "Driving the global transition to renewable electricity and electric transportation.",
        topics: [
          "Electrical Design Engineer: Architecting distribution boards and high-efficiency systems.",
          "EV Powertrain Engineer: Developing motor controllers and battery management systems (BMS).",
          "Renewable Energy Systems Engineer: Installing and maintaining solar/wind microgrid systems."
        ]
      }
    ]
  }
];

// Future Simulator Generator Engine
export function generateFutureJourney(interestId, activityId, experienceId, careerId) {
  const interestMeta = {
    ai: {
      name: "Artificial Intelligence & Machine Learning",
      stage1Text: "Artificial Intelligence is about creating systems that learn from data and experience rather than relying solely on hardcoded human instructions. In engineering, you will explore how algorithms recognize speech, identify objects in images, and solve complex optimization challenges.",
      foundations: ["Computational Thinking & Logic", "Python Programming Essentials", "Linear Algebra & Probability", "Matrix Operations"],
      beginnerProjects: [
        { name: "Handwritten Digit Recognizer", desc: "A beginner neural model trained on the MNIST dataset to classify handwritten numbers 0-9." },
        { name: "Text Sentiment Classifier", desc: "A simple NLP tool classifying user reviews as positive, neutral, or negative." }
      ],
      intermediateProjects: [
        { name: "Autonomous Road Sign Detector", desc: "A computer vision model using OpenCV and PyTorch to recognize traffic signs in diverse lighting." },
        { name: "AI Campus FAQ Assistant", desc: "A retrieval-augmented QA bot that answers admissions and syllabus questions from PDF documents." }
      ],
      advancedProjects: [
        { name: "Multimodal Healthcare Symptom Classifier", desc: "A deep learning model combining tabular patient metrics with diagnostic image embeddings." },
        { name: "Edge-Device Vision Pipeline", desc: "An optimized lightweight neural network deployed on a Raspberry Pi for real-time occupancy counting." }
      ],
      growth: [
        "Participate in beginner Kaggle competitions to analyze real-world datasets.",
        "Learn model optimization techniques such as quantization and pruning.",
        "Commit project code to GitHub with detailed README explanations and performance benchmarks."
      ],
      careers: [
        { role: "Machine Learning Engineer", desc: "Trains, tests, and deploys predictive mathematical models into production." },
        { role: "AI Software Developer", desc: "Integrates AI capabilities into web, mobile, and cloud user applications." },
        { role: "Computer Vision Specialist", desc: "Develops visual perception software for robotics, healthcare, and security." }
      ],
      relevantBranch: "B.E. – CSE (Artificial Intelligence & Machine Learning)"
    },
    swe: {
      name: "Software Development & Systems Engineering",
      stage1Text: "Software development is the art and science of architecting robust digital solutions that scale. It is about understanding how data flows from user interfaces into servers and databases, ensuring high performance, security, and exceptional user experience.",
      foundations: ["Programming Fundamentals (JavaScript or Python)", "Data Structures (Arrays, Lists, HashMaps)", "Algorithms & Complexity Basics", "Object-Oriented Design"],
      beginnerProjects: [
        { name: "Interactive Task & Habit Tracker", desc: "A browser-based productivity app with local storage persistence and clean task categorization." },
        { name: "Student Budget Calculator", desc: "A responsive financial calculator with expense category breakdown and visual summary." }
      ],
      intermediateProjects: [
        { name: "Full-Stack Campus Event Hub", desc: "A React + Node.js application allowing club heads to publish events and students to RSVP." },
        { name: "Real-Time Chat & File Room", desc: "A WebSocket-powered collaborative study room with active user presence and markdown support." }
      ],
      advancedProjects: [
        { name: "Microservices-Based E-Commerce Engine", desc: "A decoupled architecture with separate authentication, inventory, and payment simulation services." },
        { name: "Distributed Task Queue Worker", desc: "A backend service handling asynchronous background job processing with Redis and retry logic." }
      ],
      growth: [
        "Master Git branching workflows, pull requests, and code reviews.",
        "Solve algorithmic challenges on LeetCode/HackerRank to sharpen problem breakdown skills.",
        "Build a personal developer portfolio showcasing 3 high-quality deployed web apps."
      ],
      careers: [
        { role: "Software Development Engineer (SDE)", desc: "Builds core product features and maintains scalable enterprise software." },
        { role: "Full-Stack Web Architect", desc: "Develops responsive frontends seamlessly integrated with cloud databases." },
        { role: "Cloud & DevOps Engineer", desc: "Automates software build pipelines, containerization (Docker), and cloud servers." }
      ],
      relevantBranch: "B.E. – Computer Science & Engineering"
    },
    ds: {
      name: "Data Science & Analytical Intelligence",
      stage1Text: "Data Science turns vast oceans of raw information into clear decisions and forward-looking forecasts. You will learn to clean messy data, calculate statistical probabilities, and build visual dashboards that empower organizations to act with confidence.",
      foundations: ["Python for Data Analysis (NumPy, Pandas)", "Applied Statistics & Probability", "Relational Database Queries (SQL)", "Data Visualization Fundamentals"],
      beginnerProjects: [
        { name: "Global Weather Trends Analyzer", desc: "A Python notebook reading weather CSV data and plotting temperature variations over decades." },
        { name: "Movie Ratings Insight Dashboard", desc: "An interactive visualization exploring genre popularity and box-office returns." }
      ],
      intermediateProjects: [
        { name: "Bengaluru Real Estate Price Predictor", desc: "A regression model analyzing locality, square footage, and amenities to estimate property valuations." },
        { name: "E-Commerce Customer Segmentation", desc: "An unsupervised clustering pipeline grouping buyers by purchasing frequency and cart size." }
      ],
      advancedProjects: [
        { name: "Automated Financial Fraud Detection Engine", desc: "A high-precision anomaly detection model processing simulated transaction streams." },
        { name: "Interactive Health Epidemic Tracking Portal", desc: "A full-stack data dashboard with automated daily ETL ingestion and interactive geospatial maps." }
      ],
      growth: [
        "Learn SQL window functions and complex database joins.",
        "Practice storytelling: explaining what charts mean in plain English to non-technical stakeholders.",
        "Publish exploratory data reports on Kaggle or GitHub with clean reproducible notebooks."
      ],
      careers: [
        { role: "Data Scientist", desc: "Applies statistical modeling and machine learning to forecast outcomes." },
        { role: "Data Analyst", desc: "Builds business intelligence dashboards and answers executive operational questions." },
        { role: "Analytics Engineer", desc: "Constructs clean data transformation pipelines from raw event logs." }
      ],
      relevantBranch: "B.E. – CSE (Data Science) / B.E. – CSE (AI & DS)"
    },
    ece: {
      name: "Electronics & Embedded Hardware",
      stage1Text: "Electronics engineering bridges the physical world of silicon, electricity, and radio waves with the digital world of software. You will learn how microprocessors think, how sensors measure temperature and motion, and how wireless devices communicate across distances.",
      foundations: ["Circuit Theory & Electronic Components", "Digital Logic Gates & Boolean Algebra", "Embedded C / C++ Programming", "Microcontroller Architecture Basics"],
      beginnerProjects: [
        { name: "Smart Light Controller", desc: "An Arduino prototype using a photoresistor (LDR) to automatically illuminate LEDs in dark conditions." },
        { name: "Digital Temperature & Humidity Monitor", desc: "An LCD display wired to a DHT11 sensor displaying live ambient metrics." }
      ],
      intermediateProjects: [
        { name: "WiFi-Connected IoT Plant Care Station", desc: "An ESP32 device measuring soil moisture and sending automated alert messages to a mobile phone." },
        { name: "Obstacle-Avoiding Mini Rover", desc: "A two-wheeled robotic chassis with ultrasonic sensors and autonomous steering logic." }
      ],
      advancedProjects: [
        { name: "FPGA-Based Hardware Calculator", desc: "A custom digital arithmetic circuit synthesized on a Xilinx FPGA board using Verilog HDL." },
        { name: "LoRa Long-Range Agricultural Telemetry Mesh", desc: "A multi-node wireless sensor network transmitting farm metrics over kilometer distances." }
      ],
      growth: [
        "Learn PCB schematic design and layout using open-source KiCAD software.",
        "Familiarize yourself with laboratory oscilloscopes, logic analyzers, and multimeters.",
        "Explore hardware description languages (Verilog/VHDL) for semiconductor and FPGA design."
      ],
      careers: [
        { role: "Embedded Firmware Engineer", desc: "Writes rock-solid low-level C code running on resource-constrained microchips." },
        { role: "IoT Solutions Specialist", desc: "Designs connected hardware ecosystems for smart cities, factories, and homes." },
        { role: "VLSI / Silicon Design Engineer", desc: "Verifies and designs integrated microcircuits for modern processor chips." }
      ],
      relevantBranch: "B.E. – Electronics & Communication Engineering"
    },
    eee: {
      name: "Electrical Systems & Sustainable Energy",
      stage1Text: "Electrical engineering powers our civilization. From harnessing solar and wind power to engineering high-efficiency electric vehicle drivetrains and smart city power grids, electrical engineers lead the charge toward a sustainable, electrified future.",
      foundations: ["DC & AC Circuit Laws", "Electromagnetism & Transformers", "Power Electronics & Semiconductor Switches", "Energy Measurement & Safety Protocols"],
      beginnerProjects: [
        { name: "Dual-Supply Variable DC Bench Power Supply", desc: "A regulated bench power source converting AC mains into adjustable low-voltage DC." },
        { name: "Automatic Solar Night Lamp", desc: "A compact solar charging circuit that powers a rechargeable battery by day and lights up at night." }
      ],
      intermediateProjects: [
        { name: "Microcontroller-Based Smart Energy Meter", desc: "A digital wattmeter reading voltage and current to calculate true power consumption in real-time." },
        { name: "Speed Control of DC Motor using PWM", desc: "A MOSFET-driven motor speed regulator modulated by pulse-width modulation signals." }
      ],
      advancedProjects: [
        { name: "Electric Vehicle Battery Management System (BMS)", desc: "A multi-cell lithium battery monitor tracking individual cell voltages and thermal safety." },
        { name: "Simulated Solar Microgrid with MPPT Inverter", desc: "A MATLAB/Simulink model simulating grid-tied solar injection with reactive power control." }
      ],
      growth: [
        "Master MATLAB and Simulink simulation for power converter and motor testing.",
        "Study Indian and international electrical safety codes, grounding standards, and switchgear.",
        "Learn about lithium battery chemistry, state-of-charge algorithms, and EV chargers."
      ],
      careers: [
        { role: "Electrical Power Systems Engineer", desc: "Oversees transmission grids, substation automation, and stability." },
        { role: "Electric Vehicle Powertrain Engineer", desc: "Designs high-efficiency motors, inverters, and battery systems for EVs." },
        { role: "Renewable Energy Project Engineer", desc: "Plans and integrates commercial solar photovoltaic and wind energy plants." }
      ],
      relevantBranch: "B.E. – Electrical & Electronics Engineering"
    },
    explore: {
      name: "Broad Exploratory Engineering Path",
      stage1Text: "Choosing an engineering path is a discovery process. By starting with strong fundamentals across computing logic, physical circuits, and scientific problem-solving, you give yourself the freedom to discover which discipline excites you most.",
      foundations: ["Computational Logic & Python", "Basic Electrical Circuit Principles", "Applied Mathematics & Calculus", "Engineering Design Thinking"],
      beginnerProjects: [
        { name: "Personal Engineering Portfolio Page", desc: "A simple website recording experiments and projects you test during your exploration." },
        { name: "Interactive Sensor Demo", desc: "An Arduino board connected to a light sensor that displays readings on your computer screen." }
      ],
      intermediateProjects: [
        { name: "Smart Campus Room Monitor", desc: "A combined software-hardware project measuring noise and temperature with a web dashboard." },
        { name: "Data-Driven University Comparison Tool", desc: "A web app organizing publicly available university features and admissions criteria." }
      ],
      advancedProjects: [
        { name: "Interdisciplinary Capstone Prototype", desc: "A project combining software automation, physical sensors, and data analytics." }
      ],
      growth: [
        "Attend open tech meetups and college hackathons as an observer or team member.",
        "Speak with senior students across different engineering branches about their daily work.",
        "Build small weekend experiments to test what you truly enjoy building."
      ],
      careers: [
        { role: "Systems Integration Engineer", desc: "Connects software, hardware, and networks into unified solutions." },
        { role: "Technical Product Analyst", desc: "Bridges user needs with engineering execution across disciplines." },
        { role: "Engineering Consultant", desc: "Evaluates technology implementations across broad industrial domains." }
      ],
      relevantBranch: "Explore B.E. programmes at Sapthagiri NPS University"
    }
  };

  const selectedInterest = interestMeta[interestId] || interestMeta.explore;

  let projects = selectedInterest.beginnerProjects;
  if (experienceId === "intermediate") {
    projects = selectedInterest.intermediateProjects;
  } else if (experienceId === "advanced") {
    projects = selectedInterest.advancedProjects;
  }

  return {
    interestId,
    interestName: selectedInterest.name,
    activityId,
    experienceId,
    careerId,
    stage1: {
      title: "STAGE 1: EXPLORE",
      subtitle: "Understanding the Field",
      content: selectedInterest.stage1Text,
      keyFocus: "Core Philosophy & Mental Model"
    },
    stage2: {
      title: "STAGE 2: LEARN",
      subtitle: "Foundational Skills & Concepts",
      content: `Recommended foundational topics tailored for your experience level (${experienceId}):`,
      topics: selectedInterest.foundations,
      keyFocus: "First-Principles Knowledge"
    },
    stage3: {
      title: "STAGE 3: BUILD",
      subtitle: "Hands-on Realistic Projects",
      content: `Projects matched to your current starting point (${experienceId}):`,
      projects: projects,
      keyFocus: "Applied Problem Solving"
    },
    stage4: {
      title: "STAGE 4: GROW",
      subtitle: "Portfolio, Practice & Community",
      content: "How to level up your engineering capabilities and stand out:",
      actionItems: selectedInterest.growth,
      keyFocus: "Career Readiness & Craftsmanship"
    },
    stage5: {
      title: "STAGE 5: EXPLORE CAREERS",
      subtitle: "Future Roles & Potential",
      content: "Possible career directions and roles where these skills are in active demand:",
      careers: selectedInterest.careers,
      relevantBranch: selectedInterest.relevantBranch,
      keyFocus: "Real-World Impact"
    }
  };
}
