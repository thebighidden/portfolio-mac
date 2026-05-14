const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    // {
    //     id: "maps",
    //     name: "Maps",
    //     icon: "maps.svg",
    //     canOpen: true,
    // },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Dec 1, 2024",
        title: "Building Modern Web Applications with React and Vite",
        image: "/images/blog1.png",
        link: "https://github.com/thebighidden",
    },
    {
        id: 2,
        date: "Nov 15, 2024",
        title: "Creating Beautiful UI with Tailwind CSS",
        image: "/images/blog2.png",
        link: "https://github.com/thebighidden",
    },
    {
        id: 3,
        date: "Oct 20, 2024",
        title: "Full Stack Development Best Practices",
        image: "/images/blog3.png",
        link: "https://github.com/thebighidden",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Vue.js", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS3", "Sass"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express",],
    },
    {
        category: "Database",
        items: ["MongoDB", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker", "VS Code"],
    },
    {
        category: "Other",
        items: ["REST APIs", "GraphQL", "AWS"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/thebighidden",
    },
    {
        id: 2,
        text: "Portfolio",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://thebighidden.com",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/thebighidden",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/soufiane",
    },
];

const albums = [
    {
        id: "sevilla",
        title: "Sevilla",
        subtitle: "Spain",
        icon: "/icons/gicon1.svg",
        coords: [37.3886, -5.9823],
        photos: [
            { id: 1, img: "/images/trips/sevilla/1.jpg", caption: "Plaza de España" },
            { id: 2, img: "/images/trips/sevilla/2.jpg", caption: "Cathedral" },
            { id: 3, img: "/images/trips/sevilla/3.jpg", caption: "Alcázar" },
            { id: 4, img: "/images/trips/sevilla/4.jpg", caption: "Triana" },
            { id: 5, img: "/images/trips/sevilla/5.jpg", caption: "Metropol Parasol" },
            { id: 6, img: "/images/trips/sevilla/6.jpg", caption: "Old town" },
        ],
    },
    {
        id: "barcelona",
        title: "Barcelona",
        subtitle: "Spain",
        icon: "/icons/gicon2.svg",
        coords: [41.3851, 2.1734],
        photos: [
            { id: 1, img: "/images/trips/barcelona/1.jpg", caption: "Sagrada Família" },
            { id: 2, img: "/images/trips/barcelona/2.jpg", caption: "Park Güell" },
            { id: 3, img: "/images/trips/barcelona/3.jpg", caption: "La Rambla" },
            { id: 4, img: "/images/trips/barcelona/4.jpg", caption: "Barceloneta" },
            { id: 5, img: "/images/trips/barcelona/5.jpg", caption: "Casa Batlló" },
            { id: 6, img: "/images/trips/barcelona/6.jpg", caption: "Gothic Quarter" },
        ],
    },
    {
        id: "malaga",
        title: "Málaga",
        subtitle: "Spain",
        icon: "/icons/gicon4.svg",
        coords: [36.7213, -4.4214],
        photos: [
            { id: 1, img: "/images/trips/malaga/1.jpg", caption: "Alcazaba" },
            { id: 2, img: "/images/trips/malaga/2.jpg", caption: "Playa de la Malagueta" },
            { id: 3, img: "/images/trips/malaga/3.jpg", caption: "Calle Larios" },
            { id: 4, img: "/images/trips/malaga/4.jpg", caption: "Gibralfaro" },
            { id: 5, img: "/images/trips/malaga/5.jpg", caption: "Port" },
            { id: 6, img: "/images/trips/malaga/6.jpg", caption: "Sunset" },
        ],
    },
    {
        id: "dakhla",
        title: "Dakhla",
        subtitle: "Morocco",
        icon: "/icons/gicon5.svg",
        coords: [23.6848, -15.9579],
        photos: [
            { id: 1, img: "/images/trips/dakhla/1.jpg", caption: "White Dune" },
            { id: 2, img: "/images/trips/dakhla/2.jpg", caption: "Lagoon" },
            { id: 3, img: "/images/trips/dakhla/3.jpg", caption: "Kitesurfing" },
            { id: 4, img: "/images/trips/dakhla/4.jpg", caption: "Desert" },
            { id: 5, img: "/images/trips/dakhla/5.jpg", caption: "Oysters" },
            { id: 6, img: "/images/trips/dakhla/6.jpg", caption: "Sunrise" },
        ],
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    albums,
};

const PROJECTS_LOCATION = {
    id: 1,
    type: "projects",
    name: "My Projects",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Rental Cars App
        {
            id: 5,
            name: "Rental Cars App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Rental Cars.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A modern car rental platform that lets users browse, filter, and book vehicles in just a few taps.",
                        "Features include real-time availability, location-based search, secure checkout, and trip management.",
                        "Built with a clean, mobile-first UI focused on getting users on the road as fast as possible.",
                        "Stack: React, Node.js, and a REST API backed by a relational database.",
                    ],
                },
                {
                    id: 2,
                    name: "rental-cars.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/thebighidden",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "rental-cars.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://figma.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Ecommerce App
        {
            id: 6,
            name: "Ecommerce App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Ecommerce.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A full-featured ecommerce app — product catalog, cart, checkout, and order tracking — built end-to-end.",
                        "Includes admin tools for managing inventory, orders, and customers, plus a polished customer-facing storefront.",
                        "Optimized for performance with image lazy-loading, route-level code splitting, and server-side rendering.",
                        "Stack: Next.js, Tailwind CSS, Stripe for payments, and a Node/Express backend.",
                    ],
                },
                {
                    id: 2,
                    name: "ecommerce.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/thebighidden",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ecommerce.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://figma.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Shopify Stores
        {
            id: 7,
            name: "Shopify Stores",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Shopify Services.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "End-to-end Shopify store creation: theme customization, app integrations, and conversion-focused design.",
                        "From niche dropshipping shops to branded DTC stores — I handle setup, product imports, payment configuration, and launch.",
                        "Custom Liquid templates and JavaScript snippets to push beyond what's possible with stock themes.",
                        "Stack: Shopify, Liquid, custom apps where needed, and analytics/SEO tuning to boost conversion.",
                    ],
                },
                {
                    id: 2,
                    name: "shopify-store.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shopify.com",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "store-preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://figma.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const CONTRIBUTIONS_LOCATION = {
    id: 5,
    type: "contributions",
    name: "Contributions",
    icon: "/icons/github.svg",
    kind: "list",
    children: [
        {
            id: 1,
            name: "Open Source PR",
            role: "Collaborator",
            description: "Bug fixes and feature PRs to libraries I use daily.",
            tags: ["JavaScript", "Open Source"],
            icon: "/icons/github.svg",
            href: "https://github.com/thebighidden",
        },
        {
            id: 2,
            name: "Team Project (Web App)",
            role: "Frontend Developer",
            description: "Worked alongside a team to ship a production web app — owned the UI layer.",
            tags: ["React", "Tailwind"],
            icon: "/icons/atom.svg",
            href: "https://github.com/thebighidden",
        },
        {
            id: 3,
            name: "Hackathon Build",
            role: "Fullstack",
            description: "Group hackathon build — took the lead on the API and database side.",
            tags: ["Node.js", "MongoDB"],
            icon: "/icons/work.svg",
            href: "https://github.com/thebighidden",
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 left-10",
            subtitle: "Hi, I'm Soufiane Bighidene",
            description: [
                "I'm a Fullstack Developer based in Morocco — I build modern web apps end-to-end, from sleek UIs to the APIs and databases behind them.",
                "My day-to-day stack is React, Next.js, Tailwind, Node.js, and MongoDB — but I'm comfortable picking up whatever the project needs.",
                "I take freelance work too: rental car platforms, ecommerce stores, custom Shopify shops — if it ships on the web, I can build it.",
                "When I'm not coding I'm usually traveling — Sevilla, Barcelona, Málaga, Dakhla — or kitesurfing somewhere with good wind.",
                "Reach me at thebighidden09@gmail.com — happy to chat about projects, collabs, or just nerd out about stack decisions.",
            ],
        },
        {
            id: 2,
            name: "skills.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 right-20",
            subtitle: "What I work with",
            description: [
                "Frontend: React, Next.js, Vue, TypeScript, Tailwind CSS",
                "Backend: Node.js, Express, REST APIs, GraphQL",
                "Databases: MongoDB, MySQL, PostgreSQL",
                "Tools: Git, GitHub, Docker, Vite, VS Code",
                "Other: Shopify (Liquid + custom apps), AWS basics, deployment & CI/CD",
            ],
        },
        {
            id: 3,
            name: "contact.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "mailto:thebighidden09@gmail.com",
            position: "top-44 left-10",
        },
        {
            id: 4,
            name: "github.url",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/thebighidden",
            position: "top-44 right-20",
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    projects: PROJECTS_LOCATION,
    contributions: CONTRIBUTIONS_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    maps: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };