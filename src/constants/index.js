import image from "../assets/pro11.png"
import image2 from "../assets/pro22.png"
import image3 from "../assets/pro3.png"
import image4 from "../assets/pro4.png"
import image5 from "../assets/movieappss.png"
import image6 from "../assets/ecomappss.png"


export const HOMEEN = [
    {
        "greeting": "Ahmad Ali",
        "title": "Full Stack Developer",
        "description": "I have a passion for solving complex problems and continuously learning new technologies to stay at the forefront of the ever-evolving tech landscape. My goal is to deliver high-quality, scalable solutions for modern web development challenges."
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
        year: "Feb 2024 to Present",
        role: "Freelance Software Developer",
        company: "Self-Employed",
        description: `• Engineered a full-stack E-commerce platform with Stripe integration, admin dashboard, and real-time inventory management using React 18, Node.js, and MongoDB
• Integrated secure payment processing with Stripe, ensuring PCI compliance and smooth checkout experience
• Developed a movie discovery application featuring JWT authentication, real-time search, and personalized recommendations using TMDB API
• Built a secure cloud-based note-taking solution with role-based access control and real-time collaboration features`,
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "JWT", "REST APIs", "Git"],
    },
    {
        year: "2023 to Feb 2024",
        role: "Full Stack Developer",
        company: "Bytelinx",
        description: `During my tenure at Bytelinx, I engaged in full stack development utilizing PHP and CodeIgniter, ensuring robust and efficient solutions. I also worked extensively with the MERN stack, demonstrating my versatility in modern web technologies. Additionally, I enhanced backend functionality and performed comprehensive SEO, contributing to improved site performance and visibility.`,
        technologies: ["Javascript", "React.js", "Expressjs", "mongoDB", "php", "nodejs"],
    },
    {
        year: "oct 2022 to feb 2023",
        role: "Software Developer",
        company: "Eversole",
        description: `Developed CRUD API for a desktop application using .NET framework and C#.`,
        technologies: ["C#", ".NET", "Javascript"],
    },
]

export const EXPERIENCES_AR = [
    {
        year: "فبراير 2024 حتى الآن",
        role: "مطور برمجيات مستقل",
        company: "عمل حر",
        description: `• تطوير منصة تجارة إلكترونية متكاملة مع دمج Stripe ولوحة تحكم المسؤول وإدارة المخزون في الوقت الفعلي باستخدام React 18 وNode.js وMongoDB
• دمج معالجة مدفوعات آمنة مع Stripe وPayPal وبوابات الدفع المحلية، مع ضمان الامتثال لمعايير PCI وتجربة دفع سلسة
• تطوير تطبيق لاكتشاف الأفلام يتميز بمصادقة JWT والبحث في الوقت الفعلي والتوصيات المخصصة باستخدام TMDB API
• إنشاء حل آمن لتدوين الملاحظات السحابية مع التحكم في الوصول القائم على الأدوار وميزات التعاون في الوقت الفعلي`,
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "JWT", "REST APIs", "Git"],
    },
    {
        year: "2023 إلى فبراير 2024",
        role: "مطور متكامل",
        company: "بايتلينكس",
        description: `خلال فترة عملي في بايتلينكس، انخرطت في تطوير الويب الكامل باستخدام PHP وCodeIgniter، مما يضمن حلول قوية وفعالة. عملت بشكل مكثف مع MERN stack، مما يظهر تعدد مهاراتي في تقنيات الويب الحديثة. بالإضافة إلى ذلك، قمت بتحسين الوظائف الخلفية وأداء تحسين محركات البحث الشامل، مما ساهم في تحسين أداء الموقع وزيادة رؤيته.`,
        technologies: ["جافاسكريبت", "React.js", "Expressjs", "mongoDB", "php", "nodejs"],
    },
    {
        year: "أكتوبر 2022 إلى فبراير 2023",
        role: "مطور برامج",
        company: "إيفرسول",
        description: "تم تطوير CRUD API لتطبيق سطح المكتب باستخدام إطار عمل .NET ولغة البرمجة C#.",
        technologies: ["C#", ".NET", "جافاسكريبت"],
    },
]



export const PROJECTS_EN = [
    {
        title: "Movie Discovery App",
        link: "https://github.com/ahmadali3009/movieapp",
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
    }
]

export const PROJECTS_AR = [
    {
        title: "تطبيق اكتشاف الأفلام",
        link: "https://github.com/ahmadali3009/movieapp",
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
    }
]


export const CONTACT_EN = {
    address : "Al-Taif hayi nahab",
    phone : "0574995058",
    email : "abutt3009@gmail.com"
}


    export const CONTACT_AR = {
      address: "الطائف حي نهاب",
      phone: "0574995058",
      email: "abutt3009@gmail.com"
    }

  
