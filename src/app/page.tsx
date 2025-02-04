import Image from "next/image";

const SKILLS = [
  {
    name: "Typescript",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Javascript",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Java",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Rust",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Python",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "C",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "C++ / Cpp",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Go",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Lua",
    tags: [ "Language", "Coding" ]
  },
  {
    name: "Postgresql",
    tags: [ "Database", "System" ]
  },
  {
    name: "Mysql",
    tags: [ "Database", "System" ]
  },
  {
    name: "Mongodb",
    tags: [ "Database", "System" ]
  },
  {
    name: "Kubernetes / K8s",
    tags: [ "Devops", "System" ]
  },
  {
    name: "Docker / DockerCompose",
    tags: [ "Database", "Technology" ]
  },
  {
    name: "NestJS",
    tags: [ "Framework", "Backend", "Javascript", "Typescript" ]
  },
  {
    name: "NextJS",
    tags: [ "Framework", "Frontend", "Javascript", "Typescript" ]
  },
  {
    name: "ReactJS",
    tags: [ "Framework", "Frontend", "Javascript", "Typescript" ]
  },
  {
    name: "AngularJS",
    tags: [ "Framework", "Frontend", "Javascript", "Typescript" ]
  },
  {
    name: "VueJS",
    tags: [ "Framework", "Frontend", "Javascript", "Typescript" ]
  },
  {
    name: "Django",
    tags: [ "Framework", "Javascript", "Typescript" ]
  },
  {
    name: "Figma",
    tags: [ "UI-Design", "Mockup" ]
  },
  {
    name: "Sketch",
    tags: [ "UI-Design", "Mockup" ]
  },
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
    source: "University of Manitoba",
    cert: "B.Sc. Computer Science",
    logo: "/university-manitoba.png"
  }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-9x1 font-[family-name:var(--font-geist-mono)]">C. W. Catton</h1>
        <h2 className="text-9x1 font-[family-name:var(--font-geist-mono)]">Software Engineer</h2>
        <p>You can call me Chris. I'm a full stack software engineer with a solid education in computer science 
        and many years in web-development. I'm keen on ai, people, and creating new opportunities for businesses. I 
        boost a creative mindset and practical strategy for creating workable and extendable initiatives.</p>
        <section>
          <h3> Skills </h3>
          <section>
            <h4> Languages + Markup </h4>
            <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {
                SKILLS.filter(x => x.tags.includes("Language") && x.tags.includes("Coding")).map(skill => (
                  <li className="mb-2" key={skill.name}>
                    {skill.name}
                  </li>
                ))
              }
            </ul>
          </section>
          <section>
            <h4> Databases </h4>
            <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {
                SKILLS.filter(x => x.tags.includes("Database") && x.tags.includes("System")).map(skill => (
                  <li className="mb-2" key={skill.name}>
                    {skill.name}
                  </li>
                ))
              }
            </ul>
          </section>
          <section>
            <h4> Skills / Practices </h4>
            <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {
                SKILLS.filter(x => x.tags.includes("Development-Practice")).map(skill => (
                  <li className="mb-2" key={skill.name}>
                    {skill.name}
                  </li>
                ))
              }
            </ul>
          </section>
          <section>
            <h4> Skills / Design </h4>
            <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {
                SKILLS.filter(x => x.tags.includes("UI-Design")).map(skill => (
                  <li className="mb-2" key={skill.name}>
                    {skill.name}
                  </li>
                ))
              }
            </ul>
          </section>
        </section>
        <section>
          <h3> Hobbies </h3>
          <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            {
              Hobbies.map(skill => (
                <li className="mb-2" key={skill.name}>
                  {skill.name}
                  <details> {skill.description} </details>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h3> Eductation </h3>
          <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            {
              Education.map(edu => (
                <li className="flex items-center space-x-4 p-4 shadow-md rounded-lg" key={edu.source}>
                    <div className="w-16 h-16 relative">
                      <Image
                        aria-hidden
                        src="/university_manitoba.png"
                        alt={`${edu.source} logo`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      {edu.source}, {edu.cert}
                    </div>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h3> Projects </h3>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
      </footer>
    </div>
  );
}
