import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jonathan",
  lastName: "Bereket",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Biomedical Engineering Student",
  avatar: "/images/avatar.jpg",
  location: "America/Denver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yonibereket/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:yberishcut@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Biomedical Engineering Student</>,
  subline: (
    <>
      I'm Jonathan, a Biomedical Engineering Student at <InlineCode>UNIVERSITY of COLORADO</InlineCode>, where I hone my skills
      <br /> in a multi-dimensional, cross disciplinary field that merges Biology and Technology to improve outcomes and better lives.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  //calendar: {
    //display: true,
    //link: "https://cal.com",
  //},
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jonathan is a junior pursuing a degree in Biomedical Engineering 
        with strong proficiency in Excel, SolidWorks, and Python. 
        He is passionate about merging biological concepts with technology
        to advance healthcare solutions and improve society's overall well-being. 
        Jonathan eagerly seeks opportunities that will allow him to pursue these  
        interests and contribute to innovations in the biomedical field.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Undergraduate Learning Assistant - Circuits",
        timeframe: "August 2024 - Present",
        role: "Teaching Assistant",
        achievements: [
          <>
            Evaluated and graded assignments, lab reports, and exams, ensuring alignment with learning objectives and academic standards.
          </>,
          <>
            Hosted office hours to provide targeted guidance and address technical concepts.
          </>,
          <>
            Analyzed student performance to identify learning gaps, offering personalized feedback and strategies to improve outcomes.
          </>,
          <>
            Developed and led interactive review sessions and collaborative study groups, promoting active learning and peer-to-peer engagement.
          </>,
        ],
        images: [],
      },
      {
        company: "Anschutz Medical Campus",
        timeframe: "June 2024 - August 2024",
        role: "Undergraduate Researcher",
        achievements: [
          <>
            Cultivated cell media and created cellular membranes, optimizing conditions for enhanced cell growth and membrane integrity.
          </>,
          <>
            Worked with frozen hearts to extract RNA, utilizing specialized protocols to ensure high-quality samples for downstream analysis.
          </>,
          <>
            Conducted experiments to determine the effects of various treatments on cellular function and viability.
          </>,
          <>
            Maintained detailed lab notebooks and contributed to the preparation of research presentations.
          </>,
        ],
        images: [],
      },
      {
        company: "The BOLd Center",
        timeframe: "August 2023 - May 2024",
        role: "Front Desk Intern",
        achievements: [
          <>
            Performed data entry and administrative duties such as filing and scanning documents and updating databases.
          </>,
          <>
            Scheduled client appointments using the office calendar system and provided updates on changes or cancellations.
          </>,
          <>
            Welcomed visitors professionally while managing incoming calls and emails, directed them to appropriate staff members, or took detailed messages as necessary.
          </>,
          <>
            Aided with mail distribution, package delivery, and pickup services.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Colorado Boulder",
        description: <>Biomedical Engineering | Minor: Electrical Engineering | Expected Graduation: May 2026 | GPA: 3.7 (Major)<br/>
          • Received CU Esteemed Scholarship Sewall<br/>
          • Received BOLD Schlps-EN<br/>
          <strong>Relevant Coursework</strong>: Electronic Design Lab, Printed Circuit Board Design, Circuits as Systems, Mechanics of Solids, Statics and Structures, Computer-Aided Design & Fabrication</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Circuit Design",
        description: <>Altium, PCB Design, SIMetrix</>,
        images: [],
      },
      {
        title: "Programming",
        description: <>MATLAB, VBA, Microsoft Excel, R, Arduino, Python (Basic Proficiency)</>,
        images: [],
      },
      {
        title: "Fabrication Design",
        description: <>SolidWorks (CSWA Certified), Computer-Aided Design and Fabrication</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
