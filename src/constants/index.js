import image from "../assets/mongo-svgrepo-com.svg"
import image2 from "../assets/mongo-svgrepo-com.svg"
import image3 from "../assets/mongo-svgrepo-com.svg"
import image4 from "../assets/mongo-svgrepo-com.svg"


export const EXPERIENCES = [
    {
        year: "oct 2022 to feb 2023",
        role: "Software Developer",
        company: "Eversole",
        description: `Developed CRUD API for a desktop application using .NET framework and C#.`,
        technologies: ["C#", ".NET", "Javascript"],
    },
    {
        year: "2023 to Feb 2024",
        role: "Full Stack Developer",
        company: "Bytelinx",
        description: `During my tenure at Bytelinx, I engaged in full stack development utilizing PHP and CodeIgniter, ensuring robust and efficient solutions. I also worked extensively with the MERN stack, demonstrating my versatility in modern web technologies. Additionally, I enhanced backend functionality and performed comprehensive SEO, contributing to improved site performance and visibility.
`,
        technologies: ["Javascript", "React.js", "Expressjs", "mongoDB", "php", "nodejs"],
    },

]

export const PROJECTS = [
    {
        title: "Cloud APP",
        image: image,
        description: "Built a cloud-based note-taking application with secure authentication.",
        technologies: ["React", "Node.js", "MongoDB" , "Expressjs" , "JWT"],
    },
    {
        title: "user-details",
        image: image2,
        description: "Developed a comprehensive user management system.",
        technologies: ["React", "Node.js", "MongoDB" , "Expressjs" , "Redux/Toolkit"],
    },
    {
        title: "Blog site",
        image:image3,
        description: "Built a cloud-based note-taking application with secure authentication.",
        technologies: ["React", "Node.js", "MongoDB" , "Expressjs" , "EJS" , "JWT"],
    },
    {
        title: "Ecommerce site(static)",
        image: image4,
        description: "Built a responsive e-commerce website with a focus on user experience and interface.",
        technologies: ["React"],
    },
]

export const CONTACT = {
    address : "al-taif",
    phone : "0311-7694349",
    email : "abutt3009@gmail.com"
}