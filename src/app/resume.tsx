import Image from "next/image";
import {QRCodeSVG} from 'qrcode.react';
import { ReactNode } from "react";

const SKILLS = [
  {
    name: "Typescript",
    tags: [ "language", "coding" ],
    image: {
      logo: "/typescript_logo.svg",
      attribution: "™/®Microsoft, Public domain, via Wikimedia Commons"
    }
  },
  {
    name: "Javascript",
    tags: [ "language", "coding" ],
    image: {
      logo: "/javascript_logo.svg",
      attribution: "Christopher Williams, Public domain, via Wikimedia Commons"
    }
  },
  {
    name: "Node.js",
    tags: [ "runtime", "javascript", "framework" ],
    image: {
    }
  },
  {
    name: "V8",
    tags: [ "runtime", "javascript", "framework" ],
    image: {
    }
  },
  {
    name: "Bun",
    tags: [ "runtime", "javascript", "framework" ],
    image: {
    }
  },
  {
    name: "Deno",
    tags: [ "runtime", "javascript", "framework" ],
    image: {
    }
  },
  {
    name: "Npm",
    tags: [ "package-manager" ],
    image: {
    }
  },
  {
    name: "Crate.io",
    tags: [ "package-manager" ],
    image: {
    }
  },
  {
    name: "Maven",
    tags: [ "package-manager" ],
    image: {
    }
  },
  {
    name: "Java",
    tags: [ "language", "coding" ],
    image: {
      logo: "/java_logo.svg",
      source: "http://www.logoeps.com/java-eps-vector-logo/40925/"
    }
  },
  {
    name: "Rust",
    tags: [ "language", "coding" ],
    image: {
      logo: "/rust_lang.svg",
      source: "Rust Foundation, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"
    }
  },
  {
    name: "Python",
    tags: [ "language", "coding" ],
    image: {
      logo: "",
      source: ""
    }
  },
  {
    name: "C",
    tags: [ "language", "coding" ]
  },
  {
    name: "C++ / Cpp",
    tags: [ "language", "coding" ]
  },
  {
    name: "C#",
    tags: [ "language", "coding" ]
  },
  {
    name: "Objective-C",
    tags: [ "language", "coding" ]
  },
  {
    name: "Bash",
    tags: [ "language", "coding" ]
  },
  {
    name: "Linux",
    tags: [ "operating systems" ]
  },
  {
    name: "Mac",
    tags: [ "operating systems" ]
  },
  {
    name: "Windows",
    tags: [ "operating systems" ]
  },
  {
    name: "Arduino",
    tags: [ "embedded-systems" ]
  },
  {
    name: "Rasberry-pi",
    tags: [ "embedded-systems" ]
  },
  {
    name: "Go",
    tags: [ "language", "coding" ]
  },
  {
    name: "Lua",
    tags: [ "language", "coding" ]
  },
  {
    name: "Postgresql",
    tags: [ "database-system" ]
  },
  {
    name: "Mysql",
    tags: [ "database-system" ]
  },
  {
    name: "Mongodb",
    tags: [ "database-system" ]
  },
  {
    name: "Sql",
    tags: [ "database", "language", "concept" ]
  },
  {
    name: "NoSql",
    tags: [ "database", "concept" ]
  },
  {
    name: "Kubernetes / K8s",
    tags: [ "devops", "system" ]
  },
  {
    name: "Docker / DockerCompose",
    tags: [ "devops", "technology" ]
  },
  {
    name: "NestJS",
    tags: [ "framework", "backend", "javascript", "typescript" ]
  },
  {
    name: "NextJS",
    tags: [ "framework", "frontend", "javascript", "typescript" ]
  },
  {
    name: "ReactJS",
    tags: [ "framework", "frontend", "javascript", "typescript" ]
  },
  {
    name: "AngularJS",
    tags: [ "framework", "frontend", "javascript", "typescript" ]
  },
  {
    name: "VueJS",
    tags: [ "framework", "frontend", "javascript", "typescript" ]
  },
  {
    name: "Django",
    tags: [ "framework", "javascript", "typescript" ]
  },
  {
    name: "Back-end development",
    tags: ["development-domain"]
  },
  {
    name: "Front-end development",
    tags: ["development-domain"]
  },
  {
    name: "Full-stack development",
    tags: ["development-domain"]
  },
  {
    name: "Dev-ops",
    tags: ["development-domain"]
  },
  {
    name: "Software architecture",
    tags: ["development-domain"]
  },
  {
    name: "Solution architecture",
    tags: ["development-domain"]
  },
  {
    name: "Fin-tech",
    tags: ["business-domain"]
  },
  {
    name: "Logistics",
    tags: ["business-domain"]
  },
  {
    name: "Eccomerce",
    tags: ["business-domain"]
  },
  {
    name: "Techniques for 3D computer graphics",
    tags: ["gl", "webgl", "techniques", "computer-science"]
  },
  {
    name: "CICD / Continuous Integration and Continuous Delivery",
    tags: [ "cicd", "techniques" ]
  },
  {
    name: "Responsive web design",
    tags: [ "front-end", "techniques" ]
  },
  {
    name: "Problem solving",
    tags: [ "generic" ]
  },
  {
    name: "Micro-services",
    tags: [ "back-end", "techniques" ]
  },
  {
    name: "Rest APIs",
    tags: [ "back-end", "techniques" ]
  },
  {
    name: "AWS / Amazon web services",
    tags: [ "back-end", "technologies", "services" ]
  },
  {
    name: "Tailwind CSS",
    tags: [ "front-end", "library", "css" ]
  },
  {
    name: "API Development",
    tags: ["development-domain", "back-end", "technique"]
  },
  {
    name: "Creative problem solving",
    tags: ["generic"]
  },
  {
    name: "Coaching",
    tags: ["career-activities"]
  },
  {
    name: "Mentoring",
    tags: ["career-activities"]
  },
  {
    name: "Interviewing",
    tags: ["career-activities"]
  },
  {
    name: "Reviewing",
    tags: ["career-activities"]
  },
  {
    name: "Prompt engineering",
    tags: ["ai", "techniques"]
  },
  {
    name: "html5",
    tags: ["markup", "language", "front-end", "web-technology"]
  },
  {
    name: "ICT / Information and Communications Technology",
    tags: [ "generic", "domain" ]
  },
  {
    name: "communication",
    tags: ["generic"]
  },
  {
    name: "web services api",
    tags: ["generic", "domain", "architecture"]
  },
  {
    name: "express.js",
    tags: ["framework", "back-end", "javascript", "typescript"]
  },
  {
    name: ".net",
    tags: ["framework", "back-end", "javascript", "typescript"]
  },
  {
    name: ".net core",
    tags: ["framework", "back-end", "javascript", "typescript"]
  },
  {
    name: "redux.js",
    tags: ["framework", "front-end", "state-management", "javascript", "typescript"]
  },
  {
    name: "xstate",
    tags: ["framework", "front-end", "state-management", "javascript", "typescript"]
  },
  {
    name: "html",
    tags: ["markup", "language", "front-end"]
  },
  {
    name: "yaml",
    tags: ["markup", "language", "front-end"]
  },
  {
    name: "toml",
    tags: ["markup", "language", "front-end"]
  },
  {
    name: "markdown",
    tags: ["markup", "language", "front-end"]
  },
  {
    name: "Software development methodologies",
    tags: [ "development-practices" ]
  },
  {
    name: "Interpersonal skills",
    tags: [ "generic" ]
  },
  {
    name: "Generative AI",
    tags: [ "domain" ]
  },
  {
    name: "Gitlab",
    tags: [ "service", "version-control" ]
  },
  {
    name: "Github",
    tags: [ "service", "version-control" ]
  },
  {
    name: "Bitbucket",
    tags: [ "service", "version-control" ]
  },
  {
    name: "CICD pipelines",
    tags: [ "cicd", "devops" ]
  },
  {
    name: "Helm charts",
    tags: [ "build-system", "devops" ]
  },
  {
    name: "CMake",
    tags: [ "build-system", "devops" ]
  },
  {
    name: "Makefile",
    tags: [ "build-system", "devops" ]
  },
  {
    name: "Webpack",
    tags: [ "front-end", "configuration", "build-systems", "devops" ]
  },
  {
    name: "Restful Architecture",
    tags: [ "rest", "architecture", "development-techniques" ]
  },
  {
    name: "Rest",
    tags: [ "architecture", "development-techniques" ]
  },
  {
    name: "Algorithms",
    tags: [ "foundations", "computer-science" ]
  },
  {
    name: "Data structures",
    tags: [ "foundations", "computer-science" ]
  },
  {
    name: "Agile",
    tags: [ "development-methodologies", "practices" ]
  },
  {
    name: "Agile Application Development",
    tags: [ "development-methodologies", "practices" ]
  },
  {
    name: "OOP / Object Orientated Programming",
    tags: [ "development-techniques", "programming-paradigms" ]
  },
  {
    name: "Functional programming",
    tags: [ "development-techniques", "programming-paradigms" ]
  },
  {
    name: "Scripting",
    tags: [ "development-techniques", "programming-paradigms" ]
  },
  {
    name: "Procedural programming",
    tags: [ "development-techniques", "programming-paradigms" ]
  },
  {
    name: "WebGL",
    tags: ["3d-graphics", "technologies", "front-end"]
  },
  {
    name: "CypressJS",
    tags: ["qa", "testing", "web-technologies"]
  },
  {
    name: "CSS / Cascading Style Sheets",
    tags: ["front-end", "web-technologies"]
  },
  {
    name: "SASS",
    tags: ["front-end", "web-technologies", "css"]
  },
  {
    name: "Figma",
    tags: [ "ui-design", "Mockup" ]
  },
  {
    name: "Sketch",
    tags: [ "ui-design", "Mockup" ]
  },
  {
    name: "Clean architecture",
    tags: ["development-practice"]
  }
]

const Hobbies = [
  {
    name: "Coffee",
    description: "Like most developers I live on coffee, but unlike many my passion for coffee runs deep. I am an active member of my local coffee place. I'll spend hours there just talking about coffee and gear. When I go on holiday I'll bring coffee for us to try out and recommendations for guest roasters. At home I use a flair 58 / V60 / Niche grinder / Acaia scale."
  },
  {
    name: "Concerts",
    description: "I find it fun and engaging to meet other people and to listen to live music. Often I can be found at small concerts with a group of strangers or friends. My tastes change from time to time, but for now I am into Jazz, Classical, and evidently Heavy Metal."
  }
];

const Education = [
  {
    name: "University of Manitoba, B.Sc. Computer Science (2009-2016)",
    source: "University of Manitoba",
    cert: "B.Sc. Computer Science",
    tags: [ "university" ],
    icon: {
      image: "/university_manitoba.png",
      alt: "logo of university of manitoba",
      attribution: "https://umanitoba.ca/about-um/brand#our-logo"
    },
    description: "Studied computer science while minoring in psychology. Specialised in several areas including human-computer-interaction (ux design), web development, and software engineering. Additionally studied AI, machine learning, data mining, computer graphics, cryptography, management, and technical communication. Participated in several courses in which we developed applications in teams. Majority of courses also required students to develop applications."
  }
];

const Languages = [
  {
    name: "English, Native via Canada",
    level: "Native",
    source: "growing up in canada",
    icon: {
      attribution: "Rei-artur and Kjoonlee, Public domain, via Wikimedia Commons",
      image: "/english.svg"
    }
  },
  {
    name: "Dutch, Beginner (A1) via self-study",
    level: "Beginner (A1)",
    source: "self-study",
    icon: {
      attribution: "SKopp and Schaengel89, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons",
      image: "/dutch.png"
    },
    cert: null
  }
];

const Projects = [
  {
    name: "Unamed Language Learning App",
    technology: ["Typescript", "ReactJS", "NestJS", "NextJS"],
    description: "An application for self-study of a language based around frequency and other lists of words and user statistics. Details and lessons are guided by AI."
  },
  {
    name: "Unamed Language Graphing App",
    technology: ["Rust", "DieselRS", "Axum", "NextJS"],
    description: "An application for researching language interactions and similarities to produce quality introspection of languages."
  },
  {
    name: "Businesskaartje",
    technoglogy: [ "NextJS", ".next" ],
    description: "An application for showing business information"
  }
];

const EMPLOYMENT = [
  {
    name: "Passionate People (December 2022 - Present), Amsterdam",
    nested:{
      name: "clients",
      tags: [ "clients", "employment" ],
      filter: () => true,
      list: [ 
        {
        name: "Bridgefund",
        icon: {
          image: "/bridgefund_logo.svg",
          attribution: "bridgefund logo",
          alt: "bridgefund logo"
        },
        description: "Collaborate on architecture, development, and releases back-end and front-end services while helping client scale up in-house development.",
        details: [
          "Refined fin-tech services with architects and stakeholders to complete specifications and enable development of new services without reliance on legacy systems.",
          "Assumed responsibility for an incomplete customer financial information system and enhanced its design and brought it to production independently a resulting in successful delivery [that improved performance by 10-15%].",
          "Implemented and co-ordinated company wide development principles to ease effort in developers transitioning to the company and different projects within the company."
        ]
      }]
    },
    icon: {
      image: "/passionate_people_logo.png",
      alt: "passionate people logo",
      attribution: "passionate people logo"
    }
  },
  {
    name: "CarNext (March 2019 - November 2022), Amsterdam",
    icon: {
      image: "/carnext_logo.webp",
      attribution: "https://www.cobase.com/client-story/carnext",
      alt: "carnext logo",
    },
    description: "Improved and optimized the pre-checkout flow, order management, and checkout processes.",
    details: [
      "Designed and built scalable back-end solution for consolidating and broadcasting data between different internal services to enable management of stock and enable a more robust checkout.",
      "Reviewed code and designs to enhance quality and shared knowledge within the organisation.",
      "Conducted interviews and hired many senior developers for front-end positions.",
      "Refined and improved product detail and listing pages leading to a more modern design and increased conversion.",
      "Lead organisation development side on ab-testing features along with stakeholders to improve conversion rates.",
    ]
  },
  {
    name: "Floorplanner (March 2018 - January 2019), Amsterdam",
    icon: {
      image: "/floorplanner_logo.svg",
      attribution: "floorplanner",
      alt: "floorplanner logo",
    },
    description: "Worked as a front-end developer on a close knit team including in-house designer to create new web-application and client-project portal.",
    details: [
      "Co-ordinated with developers to improve in-house quality.",
      "Worked and collaborated with designers to improve designs and validate them for new client portal.",
      "Collaborated on test automation and quality assurance processes for software releases.",
    ]
  },
  {
    name: "Bizboard (March 2017 - February 2018), Amsterdam",
    icon: {
      image: "/bizboard_logo.png",
      attribution: "bizboard",
      alt: "bizboard logo",
    },
    description: "Worked on various projects using JavaScript and Cordova, improving practices and collaborating with designers.",
    details: [
      "Enhanced coding practices and standards.",
      "Worked on development of several applications both internal and external for logistics, education, and fin-tech companies.",
      "Co-ordinated with designers in flushing out designs to improve time-to-release and conversion rates."
    ]
  },
  {
    name: "University of Manitoba (September 2013 - September 2015), Winnipeg [Manitoba, Canada]",
    icon: {
      image: "/university_manitoba.png",
      attribution: "university of manitoba",
      alt: "university of manitoba"
    },
    description: "Worked in various different labs contributing to computer vision and medical research.",
    details: [
      "Conducted innovative deep learning research in visual saliency within computer vision.",
      "Refined and improved application for visual exploration of anatomical models for medical eduction.",
      "Refined and improved application for simulating surgery using 3d technologies.",
      "Debugged and analysed data from laryngoscope study.",
      "Designed and created setup for tracking movements of endoscope to enable it to be used as an input device for gaming along with software to track analytics.",
    ]
  }
  // Floorplanner
  // Bizboard
  // University of Manitoba
]

const INLINE_SECTION_LIST_CLASSNAME = "inline-flex flex-wrap gap-x-2 list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]";
//const SECTION_LIST_CLASSNAME = "list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]";
const DETAILED_SECTION_LIST_CLASSNAME = "list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]";
const NESTED_DETAILED_SECTION_LIST_CLASSNAME = "list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] pl-8 border-l-2";

// list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]
interface ListSectionProps {
  name: string,
  filter: (tags: string[]) => boolean,
  list: Array<{ 
    name: string, 
    tags?: string[], 
    description?: string,
    icon?: {
      attribution: string,
      image: string,
      alt?: string
    },
    details?: Array<string>,
    nested?: ListSectionProps,
  }>,
  depth?: number,
  children?: ReactNode | Array<ReactNode>
}

const ListSection: React.FC<ListSectionProps> = (props) => (
  <section>
    <h4> {props.name} </h4>
    <ul className={INLINE_SECTION_LIST_CLASSNAME}>
      {
        props.list.filter(item => props.filter(item.tags || [])).map(item => (
          <li className="w-auto" key={item.name}>
            {item.name}
          </li>
        ))
      }
    </ul>
  </section>
);
const NamedSection: React.FC<ListSectionProps> = (props) => (
  <section>
    <h4> {props.name} </h4>
    {props.children}
  </section>
)
const ListWithIconsSection: React.FC<ListSectionProps> = (props) => {
  const depth = props.depth || 0;
  const inner = (
    <ul className={depth > 0? NESTED_DETAILED_SECTION_LIST_CLASSNAME: DETAILED_SECTION_LIST_CLASSNAME} data-depth={depth}>
      {
        props.list.filter(item => props.filter(item.tags || [])).map(item => (
          <li key={item.name}>
            <div className="flex items-center space-x-4 flex-wrap min-w-0">
              <div className="flex items-center w-16 min-h-16 max-h-16">
                <Image
                  aria-hidden
                  className="object-contain"
                  width={64} 
                  height={64} 
                  layout="intrinsic"
                  src={item.icon!.image}
                  alt={item.icon!.alt! || item.icon!.attribution}
                />
              </div>
              <div>
                <span className="text-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
            {
              item.description? <p className="mb-4 mt-2">{item.description}</p>: null
            }
            {
              item.details? <ul className="list-inside list-disc">{item.details?.map(x => <li key={x}>{x}</li>)}</ul>: null
            }
            {
              item.nested? <ListWithIconsSection name={item.nested!.name} list={item.nested!.list} filter={item.nested!.filter} depth={depth + 1}/>: null
            }
          </li>
        ))
      }
    </ul>
  );

  if (depth === 0) {
    return <NamedSection name={props.name} list={props.list} filter={() => false}>
      {inner}
    </NamedSection>
  }
  return inner;
}
const DetailedListSection: React.FC<ListSectionProps> = (props) => (
  <section>
    <h4> {props.name} </h4>
    <ul className={DETAILED_SECTION_LIST_CLASSNAME}>
      {
        props.list.filter(item => props.filter(item.tags || [])).map(item => (
          <li className="mb-2" key={item.name}>
            <details>
              <summary>{item.name}</summary>
              <p> {item.description} </p>
            </details>
          </li>
        ))
      }
    </ul>
  </section>
)
const INTRO = `You can call me Chris. I'm a full stack software engineer with a solid education in computer science and many years in web-development. I'm keen on ai, people, and creating new opportunities for businesses. I boost a creative mindset and practical strategy for creating workable and extendable initiatives.`;
export const Resume = () => {
  return (
    <div className="grid grid-rows-[0px_1fr_64px] items-center justify-items-center min-h-screen p-8 pb-20 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full overflow-hidden" >
      <main className="flex w-full max-w-full overflow-hidden flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-8 w-full max-w-full">
          <Image aria-hidden className="object-contain" src="/profile_pic.jpeg" alt="handsome man" width="128" height="128" />
          <QRCodeSVG value="https://catton.nl/" />
          <div>
            <h1 className="text-9x1 font-[family-name:var(--font-geist-mono)]">C. W. Catton</h1>
            <h2 className="text-9x1 font-[family-name:var(--font-geist-mono)]">Software Engineer</h2>
          </div>
        </div>
        <p>{INTRO}</p>
        <section>
          <h3> Skills </h3>
          <ListSection name="Language + Markup" list={SKILLS} filter={tags => tags.includes("language") && (tags.includes("coding") || tags.includes("markup"))}/>
          <ListSection name="Databases" list={SKILLS} filter={tags => tags.includes("database-system") || tags.includes("database")}/>
          <ListSection name="Devops" list={SKILLS} filter={tags => tags.includes("devops")}/>
          <ListSection name="Practices" list={SKILLS} filter={tags => tags.includes("practices") || tags.includes("technical-skill") || tags.includes("development-techniques") || tags.includes("development-practices")}/>
          <ListSection name="UI design" list={SKILLS} filter={tags => tags.includes("ui-design")}/>
        </section>
        <section>
          <DetailedListSection list={Hobbies} filter={() => true} name="Hobbies"/>
        </section>
        <section>
          <ListWithIconsSection list={EMPLOYMENT} filter={() => true} name="Employment" />
          <ListWithIconsSection list={Education} filter={() => true} name="Education" />
        </section>
        <section>
          <ListWithIconsSection list={Languages} filter={() => true} name="Languages" />
        </section>
        <section>
          <DetailedListSection list={Projects} filter={() => true} name="Projects" />
        </section>
      </main>
      <footer className="flex w-full max-w-full row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex w-full max-w-full gap-6 items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/chriswcatton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.png"
              alt="File icon"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/ChrisWC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github-mark-white.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
