import image from "../assets/pro11.png"
import image2 from "../assets/pro22.png"
import image3 from "../assets/pro3.png"
import image4 from "../assets/pro4.png"
import image5 from "../assets/movieappss.png"
import image6 from "../assets/ecomappss.png"
import ragImage from "../assets/RAG.png"


export const HOMEEN = [
    {
        "greeting": "Ahmad Ali",
        "title": "Full Stack Software Engineer",
        "description": "I build enterprise-grade SaaS platforms, AI-powered RAG systems, and real-time web experiences using React, TypeScript, Node.js, Fastify, and cloud-native architectures."
      }
]
export const HOMEAR = [
    {
        "greeting": "أحمد علي",
        "title": "مطور متكامل",
        "description": "لدي شغف بحل المشكلات المعقدة والتعلم المستمر للتقنيات الجديدة للبقاء في طليعة المشهد التكنولوجي المتطور باستمرار. هدفي هو تقديم حلول عالية الجودة وقابلة للتطوير لتحديات تطوير الويب الحديثة."
      }
]
export const EXPERIENCES_EN = [
    {
        year: "Aug 2025 – Present",
        role: "Senior Software Engineer",
        company: "Rakeez Solutions · KSA",
        summary:
            "Leading backend and real-time architecture for a Gamification Dashboard that powers enterprise employee engagement with live leaderboards, notifications, and achievement tracking.",
        primaryClient: {
            label: "Gamification Platform",
            title: "Enterprise Gamification & Engagement Suite",
            timeframe: "Multi-tenant production deployment",
            highlights: [
                "Architected Fastify (TypeScript) services with PostgreSQL and Prisma, delivering low-latency APIs for points, badges, levels, and leaderboards.",
                "Integrated OAuth 2.0, SSO, and JWT-based access/refresh tokens with role-based authorization for admins, managers, and employees.",
                "Implemented WebSocket and Redis Pub/Sub powered Socket.IO channels to stream real-time leaderboard and notification updates.",
                "Designed CI/CD pipelines with GitHub Actions, Docker, and AWS EC2/S3 to achieve reliable, repeatable deployments.",
                "Collaborated with DevOps teams to run services on Kubernetes, ensuring horizontal scaling, observability, and resilience.",
            ],
        },
        otherProjects: {
            label: "Internal Platforms",
            highlights: [
                "Provided technical leadership on microservices design, API versioning, and observability across multiple internal tools.",
            ],
        },
        technologies: [
            "Fastify",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Socket.IO",
            "JWT",
            "OAuth2/SSO",
            "AWS EC2",
            "AWS S3",
            "GitHub Actions",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        year: "Jan 2024 – Jul 2025",
        role: "Software Engineer",
        company: "Devoasis Technologies",
        summary:
            "Led full-stack development of React and Node.js applications for enterprise clients, focusing on performance, reliability, and scalable e‑commerce experiences.",
        primaryClient: {
            label: "E‑commerce Platform",
            title: "Salla-based Commerce & Admin Portal",
            timeframe: "High-traffic SaaS deployment",
            highlights: [
                "Delivered a Salla-based e‑commerce platform with JWT authentication, RBAC, and real-time WebSocket notifications.",
                "Improved frontend performance by ~40% via code-splitting, lazy loading, and component-level optimizations.",
                "Containerized services with Docker and implemented CI/CD with GitHub Actions targeting AWS EC2, ECR, and S3.",
            ],
        },
        otherProjects: {
            label: "Client Projects",
            highlights: [
                "Implemented scalable backend services in Node.js/Express with robust logging, error handling, and monitoring.",
            ],
        },
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "TypeScript",
            "MongoDB",
            "JWT",
            "WebSocket",
            "Docker",
            "GitHub Actions",
            "AWS EC2",
            "AWS S3",
        ],
    },
    {
        year: "Mar 2022 – Dec 2023",
        role: "Software Engineer",
        company: "Bytelinx",
        summary:
            "Built and optimized full-stack platforms for education and SEO using MERN and PHP stacks, with a strong focus on performance and security.",
        primaryClient: {
            label: "Education & SEO Platforms",
            highlights: [
                "Developed a full-stack Education Coding Platform and Fiveryltics SEO platform using MERN and PHP, improving website performance by 20%.",
                "Implemented JWT-based authentication with refresh tokens and RBAC to protect critical admin and reporting flows.",
            ],
        },
        otherProjects: {
            label: "Growth & Analytics",
            highlights: [
                "Enhanced SEO via best practices, lifting organic traffic by ~25% while hardening OWASP-aligned security controls.",
                "Shipped an analytics-rich admin dashboard with modular architecture, improving maintainability and reporting speed.",
            ],
        },
        technologies: [
            "React",
            "Redux Toolkit",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PHP",
            "CodeIgniter",
            "JWT",
            "REST APIs",
        ],
    },
    {
        year: "Mar 2021 – Feb 2022",
        role: "Software Engineer",
        company: "Eversole",
        summary:
            "Developed backend services for a hospital management system using .NET Core and C#, integrating SQL Server and MongoDB for clinical and operational data.",
        primaryClient: {
            label: "Hospital Management System",
            highlights: [
                "Implemented RESTful APIs in .NET Core/C# to support patient records, appointments, and operational workflows.",
                "Integrated SQL Server and MongoDB databases, focusing on data consistency, reliability, and performance.",
            ],
        },
        technologies: [".NET Core", "C#", "SQL Server", "MongoDB", "JavaScript"],
    },
]

export const EXPERIENCES_AR = [
    {
        year: "أغسطس 2025 – حتى الآن",
        role: "مهندس برمجيات أول",
        company: "Rakeez Solutions · السعودية",
        description: `قيادة تطوير لوحة تحكم للتلعيب (Gamification Dashboard) على مستوى المؤسسة مع لوحات ومؤشرات في الوقت الحقيقي، وإشعارات فورية، ونظام إنجازات متكامل.
قمت ببناء خدمات خلفية باستخدام Fastify (TypeScript) مع PostgreSQL وPrisma، مع دعم كامل لنظام النقاط، الشارات، المستويات، ولوحات المتصدرين.
نفذت مصادقة قوية تعتمد على OAuth2/SSO و JWT (رموز وصول وتحديث) مع أدوار متعددة للمسؤولين والمديرين والموظفين.
استخدمت Socket.IO مع Redis Pub/Sub لتدفق التحديثات في الوقت الحقيقي، بالإضافة إلى خطوط نشر CI/CD باستخدام GitHub Actions وDocker على خوادم AWS EC2 و S3، مع جاهزية كاملة للعمل على Kubernetes.`,
        technologies: [
            "Fastify",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Socket.IO",
            "JWT",
            "OAuth2/SSO",
            "AWS EC2",
            "AWS S3",
            "GitHub Actions",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        year: "يناير 2024 – يوليو 2025",
        role: "مهندس برمجيات",
        company: "Devoasis Technologies",
        description: `قيادة تطوير تطبيقات React و Node.js لعملاء على مستوى المؤسسات، مع التركيز على الأداء العالية والاعتمادية.
طورت منصة تجارة إلكترونية مبنية على سلة مع مصادقة JWT، وصلاحيات أدوار (RBAC)، وإشعارات لحظية عبر WebSocket.
حسّنت أداء الواجهة الأمامية بنسبة تقارب 40٪ من خلال تقسيم الكود، والتحميل الكسول، وتحسين مكونات React.
نفذت حاويات Docker وخطوط نشر CI/CD باستخدام GitHub Actions على AWS EC2 و ECR و S3.`,
        technologies: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "WebSocket", "Docker", "GitHub Actions", "AWS"],
    },
    {
        year: "مارس 2022 – ديسمبر 2023",
        role: "مطور برامج",
        company: "Bytelinx",
        description: `تطوير منصات تعليمية ومنصات SEO باستخدام MERN و PHP مع التركيز على الأداء والأمان.
حسّنت أداء الموقع بنسبة 20٪ من خلال تحسينات في البنية، وتقليل حجم الملفات، وتحسين التخزين المؤقت.
نفذت مصادقة JWT مع رموز تحديث ونظام صلاحيات أدوار لحماية لوحات التحكم والتقارير.`,
        technologies: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "PHP", "CodeIgniter", "JWT"],
    },
    {
        year: "مارس 2021 – فبراير 2022",
        role: "مطور برامج",
        company: "Eversole",
        description: `تطوير خدمات خلفية لنظام إدارة مستشفى باستخدام .NET Core و C# مع تكامل لقواعد بيانات SQL Server و MongoDB.
بناء واجهات برمجة تطبيقات REST لدعم سجلات المرضى والمواعيد والعمليات اليومية مع التركيز على الموثوقية والأداء.`,
        technologies: [".NET Core", "C#", "SQL Server", "MongoDB", "جافاسكريبت"],
    },
]



export const PROJECTS_EN = [
    {
        title: "DeepReader AI – Multi-Service RAG Platform",
        link: "https://github.com/ahmadali3009/deepreader-rag-gateway",
        demo: "http://13.215.178.100/",
        image: ragImage,
        description: `Project Overview:\n
Multi-tenant Retrieval-Augmented Generation (RAG) platform for document analysis, built as two collaborating microservices with a cloud-native ingestion pipeline.\n
\n
Architecture:\n
• Node.js API gateway and background worker handling tenants, authentication, document ingestion, and vector search.\n
• Python FastAPI microservice specialized for retrieval and answer generation using LangChain and Google Gemini.\n
\n
Main Service (Node.js Gateway):\n
• Tech stack: Node.js, Express, Mongoose, BullMQ, AWS SDK.\n
• Implements JWT-based authentication with bcrypt and strict tenant isolation using tenantId-based partitioning.\n
• Tracks per-tenant usage limits for storage and queries to enforce quotas.\n
• Provides /api/upload endpoint to accept PDF files, store them in AWS S3, and create metadata records in MongoDB.\n
• Uses BullMQ (Redis) queues to offload heavy PDF processing to background workers for resilience and scalability.\n
• Worker downloads PDFs from S3, extracts text with pdf-parse, chunks content with configurable chunkSize and overlap, generates embeddings via Google Gemini, and writes vectors into ChromaDB.\n
• Performs initial vector search against ChromaDB to gather relevant context before delegating to the Python AI service.\n
• Serves the React/Vite frontend as static assets behind the same gateway.\n
\n
AI Microservice (FastAPI RAG Service):\n
• Tech stack: Python 3, FastAPI, LangChain, Google Generative AI (Gemini).\n
• Exposes a high-performance /api/v1/ask endpoint secured via INTERNAL_API_KEY for internal service-to-service calls.\n
• Embeds incoming questions, retrieves top-matching chunks from ChromaDB, and filters them using a configurable similarity threshold (مثل MIN_SCORE = 0.3).\n
• Deduplicates and ranks context passages by relevance before prompting Gemini 2.5 Flash (or a configurable model).\n
• Forces strict grounding: the model is instructed to answer only from provided context and to cite sources using bracketed indices like [1][2].\n
\n
Data Infrastructure:\n
• ChromaDB stores all vector embeddings in a shared rag_collection for fast semantic search.\n
• MongoDB holds users, tenants, and document metadata including file names, sizes, and processing status.\n
• Redis powers BullMQ queues, enabling fault-tolerant document processing and horizontal worker scaling.\n
• AWS S3 acts as the durable source of truth for original PDFs with support for presigned URLs.\n
\n
Interaction Flow (Example – /api/search):\n
• User submits a question from the frontend with a tenant-aware JWT.\n
• Gateway validates the token, checks tenant quotas, and performs an initial vector search against ChromaDB.\n
• Node.js gateway calls the Python FastAPI microservice over the internal network, passing the query and candidate context.\n
• Python service enriches and filters context, calls Gemini with the question plus ranked snippets, and generates a professional, structured answer.\n
• Final response is returned with citations and presigned S3 links back to the source documents for full transparency.`,
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Redis",
            "BullMQ",
            "AWS S3",
            "FastAPI",
            "Python",
            "LangChain",
            "Google Gemini",
            "ChromaDB",
            "JWT",
            "Docker"
        ],
    },
    {
        title: "Movie Discovery App",
        link: "https://github.com/ahmadali3009/movieapp",
        demo: "https://movieapp-1-9vz5.onrender.com",
        image: image5,
        description: `Core Features:\n
• Movie Discovery: Popular movies, top TV shows, featured content rotation\n
• Search System: Instant movie search with results display\n
• Detailed Views: Comprehensive movie/TV show info pages\n
• JWT Authentication: Secure access with token validation\n
• Responsive Design: Mobile-compatible layouts\n
Main Functions:\n
• returndata(): Fetches popular movies from TMDB API\n
• Fmoviesbyid(): Retrieves specific movie details by ID\n
• searchFetch(): Processes user search queries\n
• FetchTopRated(): Gets authenticated top-rated TV content\n
• jwtDecode(): Validates user authentication tokens\n
• handlepage()/handlepreviouspage(): Controls pagination\n
• handlesearch()/searchbuttton(): Manages search functionality\n
UI Components:\n
• HeroBanner: Showcases featured movies with auto-rotation\n
• MovieCard: Displays movie information in card format\n
• Moviedetail/MovieDetail2: Renders detailed movie/TV information\n
• Loading states with skeleton loaders for better UX\n
Technical Implementation:\n
• React Query for efficient data fetching & caching\n
• React Router for seamless navigation between views\n
• Responsive CSS with media queries & flexible layouts\n
• Modern visual effects including animations & gradients\n
• Token-based authentication with expiration handling`,
        technologies: [
            "React",
            "React Query",
            "React Router",
            "JWT",
            "TMDB API",
            "CSS3",
            "REST API",
            "Authentication"
        ],
    },
    {
        title: "E-Commerce Platform (Full Stack)",
        link: "https://github.com/ahmadali3009/Ecommerce-fullS",
        image: image6,
        description: `Backend Development:\n
• Built scalable REST API with Node.js/Express.js implementing MVC architecture\n
• Designed MongoDB schemas with Mongoose for optimal data relationships\n
• Implemented JWT authentication with Passport.js and role-based access control\n
• Integrated Stripe payment gateway with secure payment processing\n
• Added robust security measures including password hashing and protected routes\n
Frontend Development:\n
• Developed modern SPA using React 18 with custom hooks and context\n
• Implemented state management using Redux Toolkit with async thunks\n
• Created responsive UI with Tailwind CSS and Headless UI components\n
• Built multi-step checkout process with React Hook Form validation\n
Core Features:\n
• Advanced product catalog with filtering, sorting, and search\n
• Real-time shopping cart with persistent storage\n
• Order management system with tracking capabilities\n
• Admin dashboard with sales analytics and Recharts visualization\n
• User profile management with multiple address support\n
• Role-based access control (Admin/Customer)\n
• Comprehensive error handling and toast notifications`,
        technologies: [
            "React 18",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "Stripe",
            "Tailwind CSS",
            "JWT",
            "Passport.js",
            "React Hook Form",
            "Recharts"
        ],
    },
    {
        title: "Gamification Platform – Real-time Employee Engagement",
        link: "https://github.com/ahmadali3009/gamification-platform",
        image: image4,
        description: `Project Overview:\n
Enterprise-ready employee engagement and gamification platform designed for modern organizations, with Arabic/RTL support and real-time collaboration.\n
\n
Backend Architecture:\n
• Fastify (TypeScript) API layer backed by PostgreSQL and Prisma ORM with a clean domain model for users, departments, challenges, projects, and rewards.\n
• JWT authentication with access and refresh tokens, including role-based access control (Admin, Manager, Member) and audit-friendly API design using OpenAPI 3.0/Swagger.\n
• Redis-backed caching for frequently accessed leaderboard and profile data.\n
• Socket.IO with Redis Pub/Sub for real-time events and multi-device notification delivery.\n
• AWS S3 storage with presigned URLs for secure uploads of submissions, attachments, and project artifacts.\n
\n
Frontend Architecture:\n
• React 19 + TypeScript application bootstrapped with Vite for fast DX and modern build tooling.\n
• State management via a combination of TanStack Query (server state) and Redux Toolkit (app state and permissions).\n
• Tailwind CSS + shadcn/ui for a polished, accessible UI with dark mode and responsive layouts.\n
• Routing handled by React Router v7, with protected routes per role and lazy-loaded feature modules.\n
• Rich text editing powered by Lexical for challenge descriptions, project briefs, and announcements.\n
• Full i18n support (English/Arabic) including RTL layouts and localized copy.\n
\n
Gamification Features:\n
• Points engine with configurable rules, validation workflows, and anti-abuse checks.\n
• Badge system (Bronze/Silver/Gold) and level progression model tied to engagement and completion metrics.\n
• Global and department-level leaderboards with filters (time range, department, team).\n
\n
Challenge & Project Management:\n
• Individual and team challenges with invitations, deadlines, and approval workflows.\n
• Team collaboration spaces with shared submissions, comments, and file attachments stored on S3.\n
• Project boards for tracking tasks, owners, and status, including approval and review flows.\n
\n
Collaboration & Admin:\n
• Department-based organization model that maps to real-world org structures.\n
• Admin dashboard for user and department management, audit logs, and global configuration of points, badges, and rewards.\n
• Analytics and KPI views for HR and leadership to understand engagement trends and top performers.\n
\n
Real-time Notifications:\n
• Socket.IO channels for challenge invitations, approvals, leaderboard updates, and reward redemptions.\n
• Multi-device support so web clients stay synchronized with new events in real time.\n
\n
Market Position (2026):\n
• Competes with platforms like 15Five, Culture Amp, Bonusly, and Achievers, but differentiates with Arabic/RTL support and highly customizable workflows.\n
• Built with a microservices-ready, cloud-native architecture suitable for Docker/Kubernetes deployments.`,
        technologies: [
            "Fastify",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Socket.IO",
            "AWS S3",
            "React 19",
            "Vite",
            "Redux Toolkit",
            "TanStack Query",
            "Tailwind CSS",
            "shadcn/ui",
            "Lexical",
            "React Router v7",
            "i18next",
            "OpenAPI/Swagger"
        ],
    },
    {   
        title: "Cloud Note",
        link: "https://github.com/ahmadali3009/cloud-app-note",
        demo: "https://cloud-note-frontend.onrender.com",
        image: image,
        description: `• Utilized the MERN stack (MongoDB, ExpressJS, ReactJS, Node.js) for full-stack development\n
• Implemented JWT-based authentication for secure user sessions.\n
• Enhanced password security using bcrypt with salt for hashing.\n
• Stored data securely in the cloud using MongoDB Atlas.\n
• Ensured that only the respective user can view their notes, maintaining privacy and security.\n
• Styled the frontend with TailwindCSS for a responsive and modern UI.`,
        technologies: ["React", "Node.js", "MongoDB" , "Expressjs" , "JWT"],
    },
    {
        title: "user-details",
        link: "https://github.com/ahmadali3009/userdetailMERN-Reduxtoolkit",
        image: image2,
        description: `• Developed a comprehensive user management system.\n
    • Technologies: ReactJS, Node.js, ExpressJS, MongoDB, Redux Toolkit.\n
    • Managed state and data flow within the application.\n
    • Used Thunk to handle data retrieval and submission via RESTful APIs.`,
        technologies: ["React", "Node.js", "MongoDB" , "Expressjs" , "Redux/Toolkit"],
    },
    {
        title: "Blog site",
        link: "https://github.com/ahmadali3009/blogsitenodejs",
        image:image3,
        description: `• Technologies: Node.js, MongoDB, ExpressJS, EJS, JWT\n
    • Implemented authentication and authorization using stateless JWT for secure access.\n
    • Developed role-based access control to manage different user levels and permissions.\n
    • Built comment functionality to enhance user interaction within the application.\n
    • Integrated Multer for efficient picture upload and management.`,
        technologies: ["React", "Node.js", "MongoDB" , "Expressjs" , "EJS" , "JWT"],
    },
    {
        title: "Ecommerce site(static site)",
        link: "https://github.com/ahmadali3009/ecom-react",
        demo: "https://jovialhub222.netlify.app",
        image: image4,
        description: "Built a responsive e-commerce website with a focus on user experience and interface.",
        technologies: ["React"],
    }
]

export const PROJECTS_AR = [
    {
        title: "DeepReader AI – منصة RAG متعددة الخدمات",
        link: "https://github.com/ahmadali3009/deepreader-rag-gateway",
        demo: "http://13.215.178.100/",
        image: ragImage,
        description: `نظرة عامة على المشروع:\n
منصة RAG متعددة المستأجرين لتحليل المستندات تعتمد على خدمات مصغّرة، مع بوابة Node.js وخدمة ذكاء اصطناعي مبنية بـ FastAPI.\n
\n
الخدمة الرئيسية (بوابة Node.js):\n
• المكدس التقني: Node.js، Express، Mongoose، BullMQ، AWS SDK.\n
• مصادقة JWT مع تشفير كلمات المرور باستخدام bcrypt وعزل كامل لكل مستأجر عبر tenantId.\n
• تتبع حدود الاستخدام لكل مستأجر (السعة التخزينية وعدد الاستعلامات).\n
• استقبال ملفات PDF عبر /api/upload وتخزينها في AWS S3 مع حفظ البيانات الوصفية في MongoDB.\n
• استخدام BullMQ (Redis) لمعالجة المستندات في الخلفية؛ تنزيل PDF، استخراج النص، تقسيمه إلى مقاطع، وتوليد المتجهات باستخدام Gemini وتخزينها في ChromaDB.\n
• تنفيذ بحث متجهي أولي في ChromaDB للحصول على السياق قبل الاتصال بخدمة الذكاء الاصطناعي.\n
\n
خدمة الذكاء الاصطناعي (FastAPI RAG Service):\n
• المكدس التقني: Python، FastAPI، LangChain، Google Gemini.\n
• نقطة نهاية /api/v1/ask محمية بمفتاح داخلي INTERNAL_API_KEY.\n
• توليد تمثيلات متجهية للاستعلام، واسترجاع أفضل المقاطع من ChromaDB مع حد أدنى لدرجة التشابه.\n
• ترتيب النتائج وإزالة التكرار ثم تمريرها إلى نموذج Gemini 2.5 Flash مع تعليمات صارمة بالاعتماد على السياق فقط.\n
• إجابات منظمة مع إرجاع مراجع للمصادر باستخدام أرقام بين أقواس مثل [1][2].\n
\n
البنية التحتية للبيانات:\n
• ChromaDB لتخزين المتجهات الخاصة بجميع المستندات.\n
• MongoDB لتخزين بيانات المستخدمين والمستأجرين وبيانات الملفات.\n
• Redis لتشغيل طوابير BullMQ وضمان قابلية التوسع الأفقي.\n
• AWS S3 لتخزين ملفات PDF الأصلية مع روابط مؤقتة (Presigned URLs) للوصول الآمن.`,
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Redis",
            "BullMQ",
            "AWS S3",
            "FastAPI",
            "Python",
            "LangChain",
            "Google Gemini",
            "ChromaDB",
            "JWT",
            "Docker"
        ],
    },
    {
        title: "تطبيق اكتشاف الأفلام",
        link: "https://github.com/ahmadali3009/movieapp",
        demo: "https://movieapp-1-9vz5.onrender.com",
        image: image5,
        description: `الميزات الأساسية:\n
• اكتشاف الأفلام: الأفلام الشائعة، أفضل العروض التلفزيونية، تناوب المحتوى المميز\n
• نظام البحث: بحث فوري عن الأفلام مع عرض النتائج\n
• عروض تفصيلية: صفحات معلومات شاملة للأفلام/العروض التلفزيونية\n
• مصادقة JWT: وصول آمن مع التحقق من صلاحية الرمز المميز\n
• تصميم متجاوب: تخطيطات متوافقة مع الأجهزة المحمولة\n
الوظائف الرئيسية:\n
• returndata(): جلب الأفلام الشائعة من TMDB API\n
• Fmoviesbyid(): استرجاع تفاصيل فيلم محدد\n
• searchFetch(): معالجة استعلامات بحث المستخدم\n
• FetchTopRated(): الحصول على محتوى تلفزيوني مصنف\n
• jwtDecode(): التحقق من رموز المصادقة\n
• handlepage()/handlepreviouspage(): التحكم في ترقيم الصفحات\n
• handlesearch()/searchbuttton(): إدارة وظائف البحث\n
مكونات واجهة المستخدم:\n
• HeroBanner: عرض الأفلام المميزة مع التدوير التلقائي\n
• MovieCard: عرض معلومات الفيلم في تنسيق البطاقة\n
• Moviedetail/MovieDetail2: عرض معلومات الفيلم/التلفزيون المفصلة\n
• حالات التحميل مع محملات هيكلية لتحسين تجربة المستخدم\n
التنفيذ التقني:\n
• React Query للحصول على البيانات وتخزينها مؤقتًا\n
• React Router للتنقل السلس بين العروض\n
• CSS متجاوب مع استعلامات الوسائط\n
• تأثيرات بصرية حديثة تشمل الرسوم المتحركة والتدرجات\n
• مصادقة قائمة على الرموز المميزة مع معالجة انتهاء الصلاحية`,
        technologies: [
            "React",
            "React Query",
            "React Router",
            "JWT",
            "TMDB API",
            "CSS3",
            "REST API",
            "Authentication"
        ],
    },
    {
        title: "منصة التجارة الإلكترونية (متكاملة)",
        link: "https://github.com/ahmadali3009/Ecommerce-fullS",
        image: image6,
        description: `تطوير الواجهة الخلفية:\n
• بناء واجهة برمجة تطبيقات REST قابلة للتطوير باستخدام Node.js/Express.js\n
• تصميم مخططات MongoDB مع Mongoose للعلاقات المثلى للبيانات\n
• تنفيذ المصادقة JWT مع Passport.js والتحكم في الوصول القائم على الأدوار\n
• دمج بوابة الدفع Stripe مع معالجة آمنة للمدفوعات\n
• إضافة إجراءات أمنية قوية تشمل تشفير كلمات المرور والمسارات المحمية\n
تطوير الواجهة الأمامية:\n
• تطوير تطبيق SPA حديث باستخدام React 18\n
• تنفيذ إدارة الحالة باستخدام Redux Toolkit\n
• إنشاء واجهة مستخدم متجاوبة مع Tailwind CSS\n
• بناء عملية دفع متعددة الخطوات مع التحقق من صحة النماذج\n
الميزات الأساسية:\n
• كتالوج منتجات متقدم مع التصفية والفرز والبحث\n
• سلة تسوق فورية مع تخزين دائم\n
• نظام إدارة الطلبات مع إمكانيات التتبع\n
• لوحة تحكم المسؤول مع تحليلات المبيعات\n
• إدارة ملف المستخدم مع دعم العناوين المتعددة\n
• التحكم في الوصول القائم على الأدوار\n
• معالجة شاملة للأخطاء وإشعارات`,
        technologies: [
            "React 18",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "Stripe",
            "Tailwind CSS",
            "JWT",
            "Passport.js",
            "React Hook Form",
            "Recharts"
        ],
    },
    {
        title: "منصة التلعيب – تفاعل الموظفين في الوقت الحقيقي",
        link: "https://github.com/ahmadali3009/gamification-platform",
        image: image4,
        description: `نظرة عامة على المشروع:\n
منصة حديثة لتلعيب بيئة العمل ورفع تفاعل الموظفين، مصممة للمؤسسات مع دعم كامل للغة العربية واتجاه RTL.\n
\n
الواجهة الخلفية:\n
• استخدام Fastify (TypeScript) مع PostgreSQL و Prisma لبناء واجهات برمجة تطبيقات سريعة وقابلة للتوسع.\n
• مصادقة JWT مع رموز وصول وتحديث ونظام صلاحيات أدوار (مدير/مسؤول/عضو) مع توثيق كامل عبر OpenAPI 3.0/Swagger.\n
• Redis للتخزين المؤقت ولقنوات Pub/Sub الخاصة بإشعارات Socket.IO.\n
• تخزين الملفات والمرفقات في AWS S3 باستخدام روابط موقّتة (Presigned URLs).\n
\n
الواجهة الأمامية:\n
• تطبيق React 19 مع TypeScript و Vite لتجربة تطوير سريعة.\n
• إدارة الحالة باستخدام TanStack Query لحالة الخادم و Redux Toolkit لحالة التطبيق والصلاحيات.\n
• تصميم متجاوب باستخدام Tailwind CSS ومكوّنات shadcn/ui مع دعم الوضع الليلي.\n
• التوجيه عبر React Router v7 مع مسارات محمية حسب الدور.\n
• محرر نصوص غني (Lexical) لكتابة التحديات ووصف المشاريع والإعلانات.\n
• دعم لغوي كامل (الإنجليزية/العربية) مع واجهات RTL.\n
\n
ميزات التلعيب:\n
• نظام نقاط مع قواعد وقنوات اعتماد لضمان جودة المشاركات.\n
• نظام شارات (برونزية/فضية/ذهبية) ومستويات تقدم مرتبطة بمؤشرات التفاعل.\n
• لوحات متصدرين على مستوى الشركة والأقسام.\n
\n
التحديات والمشاريع:\n
• تحديات فردية وجماعية مع دعوات، مواعيد نهائية، وتدفقات موافقة.\n
• مساحات تعاون للفرق مع مرفقات وملفات مخزنة على S3.\n
• إدارة مشاريع ومهام مع تتبع للحالة والأعضاء.\n
\n
لوحة التحكم والتحليلات:\n
• إدارة المستخدمين والأقسام والصلاحيات من خلال لوحة تحكم إدارية.\n
• مؤشرات أداء رئيسية وتقارير لمتابعة التفاعل والإنجازات.\n
\n
الإشعارات في الوقت الحقيقي:\n
• قنوات Socket.IO لإرسال إشعارات فورية بالدعوات، الموافقات، تحديث لوحات المتصدرين، واسترداد المكافآت.\n
\n
الموقع في السوق (2026):\n
• تنافس منصات مثل 15Five و Culture Amp و Bonusly و Achievers، مع نقطة قوة واضحة في دعم العربية ومرونة تدفق العمل، وجاهزية كاملة للنشر على Docker و Kubernetes.`,
        technologies: [
            "Fastify",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Socket.IO",
            "AWS S3",
            "React 19",
            "Vite",
            "Redux Toolkit",
            "TanStack Query",
            "Tailwind CSS",
            "shadcn/ui",
            "Lexical",
            "React Router v7",
            "i18next",
            "OpenAPI/Swagger"
        ],
    },
    {
        title: "تطبيق السحابة",
        link: "https://github.com/ahmadali3009/cloud-app-note",
        demo: "https://cloud-note-frontend.onrender.com",
        image: image,
        description: "بناء تطبيق لتدوين الملاحظات يعتمد على السحابة مع مصادقة آمنة.",
        technologies: ["React", "Node.js", "MongoDB", "Expressjs", "JWT"],
    },
    {
        title: "تفاصيل المستخدم",
        link: "https://github.com/ahmadali3009/userdetailMERN-Reduxtoolkit",
        image: image2,
        description: "تطوير نظام شامل لإدارة المستخدمين.",
        technologies: ["React", "Node.js", "MongoDB", "Expressjs", "Redux/Toolkit"],
    },
    {
        title: "موقع المدونة",
        link: "https://github.com/ahmadali3009/blogsitenodejs",
        image: image3,
        description: "بناء تطبيق لتدوين الملاحظات يعتمد على السحابة مع مصادقة آمنة.",
        technologies: ["React", "Node.js", "MongoDB", "Expressjs", "EJS", "JWT"],
    },
    {
        title: "موقع التجارة الإلكترونية",
        link: "https://github.com/ahmadali3009/ecom-react",
        demo: "https://jovialhub222.netlify.app",
        image: image4,
        description: "بناء موقع تجارة إلكترونية مستجيب يركز على تجربة المستخدم والواجهة.",
        technologies: ["React"],
    }
]


export const CONTACT_EN = {
    address : "Riyadh, Saudi Arabia",
    phone : "0559875408",
    email : "abutt3009@gmail.com"
}


    export const CONTACT_AR = {
      address: "الرياض، المملكة العربية السعودية",
      phone: "0559875408",
      email: "abutt3009@gmail.com"
    }

  
