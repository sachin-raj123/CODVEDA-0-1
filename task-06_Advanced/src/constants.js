// cSpell:ignore sviet SVIET Vivekanand shopsy Shopsy tastyburger wireframes Sitamarhi Pokhar Bhira


// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import gov from "./assets/achievements/gov.jpeg"
import nestle from "./assets/achievements/nestle.png"
import iit_delhi from "./assets/achievements/iit_delhi.jpg"
import cybersecurity from "./assets/achievements/cybersecurity.png"
import ncc from "./assets/achievements/ncc.jpg"
import certificates from "./assets/achievements/certificates.jpg"

// Education Section Logo's
import sviet from "./assets/education_logo/sviet.png"
import favicon from "./assets/education_logo/favicon.png"

// Project Section Logo's
import registration from "./assets/work_logo/registration.jpeg"
import counterapplication from "./assets/work_logo/counterapplication.jpeg"
import medicare from "./assets/work_logo/medicare.jpeg"
import shopsy from "./assets/work_logo/shopsy.jpeg"
import tastyburger from "./assets/work_logo/tastyburger.jpeg"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
    ],
  },
  {
    title: 'Backend',
    skills: [
    { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
    { name: 'Python', logo: pythonLogo },
    { name: 'JS', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    
    ],
  },
];

  export const achievements = [
  {
    id: 1,
    img:gov,
    role: "Government Certified in Multiple Domains",
    issuer: "Ministry of Youth Affairs & Sports, Government of India",
    date: "2024",
    desc: "Earned multiple government-issued certificates, including participation in the 'Next-Gen GST Reforms Quiz' organized by the Ministry of Youth Affairs and Sports, and the 'Cyber Hygiene Practices Quiz' focused on cybersecurity awareness.",
    skills: ["Cybersecurity", "Public Policy", "Digital Awareness", "GST Reforms"],
  },
  {
    id: 2,
    img:nestle,
    role: "Nestlé National Quiz Round Qualifier",
    issuer: "Nestlé India Pvt. Ltd.",
    date: "2024",
    desc: "Qualified the national quiz round conducted by Nestlé India, showcasing excellence in aptitude, general awareness, and communication skills during the competition.",
    skills: ["Aptitude", "Communication", "Leadership", "Confidence"],
  },
  {
    id: 3,
    img:iit_delhi,
    role: "Campus Ambassador – IIT Delhi Invitation",
    issuer: "IIT Delhi",
    date: "2024",
    desc: "Invited to IIT Delhi as a Campus Ambassador, received appreciation gifts from NIVEA, including perfumes and personal care hampers, for active participation and representation.",
    skills: ["Leadership", "Event Management", "Public Speaking", "Networking"],
  },
  {
    id: 4,
    img:cybersecurity,
    role: "Cyber Hygiene and Online Safety Certification",
    issuer: "Government of India (Cybersecurity Awareness Program)",
    date: "2024",
    desc: "Successfully completed an online certification quiz on Cyber Hygiene and Safe Digital Practices, promoting responsible and secure internet usage.",
    skills: ["Cyber Hygiene", "Online Safety", "Information Security"],
  },
  {
    id: 5,
    img:ncc,
    role: "NCC – Ex-Cadet",
    issuer: "National Cadet Corps (NCC)",
    date: "2019 – 2020",
    desc: "Served as an NCC cadet during school, learning discipline, teamwork, and leadership through national-level drills and community service programs.",
    skills: ["Discipline", "Teamwork", "Leadership", "Patriotism"],
  },
  {
    id: 6,
    img:certificates,
    role: "Online Language Certifications",
    issuer: "Coursera, Great Learning, Udemy & Others",
    date: "2023 – 2025",
    desc: "Completed multiple online certifications in programming languages such as C, C++, Java, Python, and JavaScript, strengthening technical and logical skills.",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
];

  export const education = [
    {
      id: 0,
      img: sviet, 
      school: "Swami Vivekanand Institute of Engineering & Technology (SVIET), Punjab",
      date: "2023 - 2027",
      grade: "Currently in 5th Semester",
      degree: "Bachelor of Technology (B.Tech) - Electronics & Communication Engineering",
      desc: "I am currently pursuing my B.Tech in Electronics & Communication Engineering at SVIET, under IKGPTU University, Punjab (2023-2027 batch). Alongside my studies, I am learning programming and web development languages on my own, building projects, and exploring modern technologies to strengthen my coding skills and practical knowledge."
    },

    {
      id: 1,
      img: favicon,
      school: "H/S Janipur, Sitamarhi",
      date: "Feb 2023",
      grade: "Second Division",
      desc: "I completed my Intermediate (Class 12) education under the Bihar School Examination Board, Patna, with a focus on Science. My core subjects were Physics, Chemistry, and Mathematics, along with English and Hindi. This education strengthened my analytical and problem-solving skills, preparing me for higher studies in the field of technology.",
      degree: "Intermediate - Science (PCM)",
    },
    {
    id: 2,
    img: favicon,
    school: "L.N.J.P.H.S, Pokhar Bhira, Sitamarhi",
    date: "Apr 2017 - Mar 2018",
    grade: "70%",
    desc: "I completed my class 10 education from L.N.J.P.H.S, Pokhar Bhira, Sitamarhi, where I studied all core subjects and built a strong foundation for my future studies.",
    degree: "Class X - Secondary Education",
  }
  ];
  
  export const projects = [
   {
    id: 0,
    title: "Responsive Registration Form",
    description:
      "A sleek and fully responsive registration form built with HTML and CSS, designed to provide a seamless user experience across all devices. The form includes intuitive input fields, real-time validation feedback, and an attractive layout that adapts flawlessly from mobile screens to large desktops. Ideal for websites requiring user registration, this project demonstrates clean code practices, responsive design principles, and attention to UI/UX details.",
    image:registration, // replace with your actual image variable
    tags: ["HTML", "CSS", "Responsive Design", "UI/UX"],
    github: "https://github.com/sachin-raj123/CODVEDA-0-1/tree/main/task-01%20Basic",
    webapp: "https://your-deployed-form-link.netlify.app",
  },

    {
      id: 1,
      title: "Interactive Counter App",
      description:
        "A modern and interactive counter application built with React.js, showcasing dynamic state management and responsive UI design. Users can increment, decrement, and reset the counter seamlessly, demonstrating real-time updates and smooth interactivity. This project highlights fundamental React concepts such as hooks, state handling, and event-driven programming, making it a great example of building functional and responsive web components.",
      image: counterapplication, // replace with your actual image variable
      tags: ["React JS", "JavaScript", "HTML", "CSS", "Responsive Design", "UI/UX"],
      github: "https://github.com/sachin-raj123/CODVEDA-0-1/tree/main/task-02%20Basic",
      webapp: "https://your-counter-app-link.netlify.app",
    },
    {
      id: 2,
      title: "Medicare Website",
      description:
        "A fully responsive medical services website built using React.js and Tailwind CSS. The site features multiple sections showcasing services, doctors, and patient information, enhanced with smooth animations, hover effects, and interactive UI components. This project demonstrates proficiency in React component architecture, responsive design, and modern frontend development techniques, creating a professional and user-friendly experience for visitors.",
      image: medicare, // replace with your actual image variable
      tags: ["React JS", "Tailwind CSS", "Responsive Design", "Animations", "UI/UX", "HTML", "CSS"],
      github: "https://github.com/sachin-raj123/CODVEDA-0-1/tree/main/task-03_Intermediate",
      webapp: "https://your-mmedicare-site.netlify.app",
    },

   {
      id: 3,
      title: "Tasty Burger Website",
      description:
        "A fully responsive and interactive 3-page website for a fictional burger restaurant, built using React.js and Bootstrap. The project includes Home, About, and Contact pages, featuring smooth animations, hover effects, and dynamic components to enhance user engagement. This project demonstrates proficiency in React component structure, state management, responsive design, and frontend animations, creating a polished and professional user experience.",
      image: tastyburger, // replace with your actual image variable
      tags: ["React JS", "Bootstrap", "CSS", "Responsive Design", "Animations", "UI/UX"],
      github: "https://github.com/sachin-raj123/CODVEDA-0-1/tree/main/task-04_Intermediate",
      webapp: "https://your-tasty-burger-site.netlify.app",
    },
    {
      id: 4,
      title: "Shopsy E-Commerce Website",
      description:
        "A full-featured, responsive e-commerce website built with React.js on the frontend and Django as the backend. The platform includes 5 interactive pages, featuring user authentication (login, logout, account creation, password change) and an admin panel for managing products and users. Enhanced with smooth animations, reusable components, and Storybook integration for component development, the website demonstrates modern web development practices, seamless user experience, and full-stack capabilities.",
      image: shopsy, // replace with your actual image variable
      tags: ["React JS", "Django", "Tailwind CSS", "Responsive Design", "Animations", "Authentication", "UI/UX", "Storybook"],
      github: "https://github.com/sachin-raj123/CODVEDA-0-1/tree/main/task-05_Advanced",
      webapp: "https://your-shopsy-site.netlify.app",
    },
    
    
  ];  