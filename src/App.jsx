import React, { useState } from "react";

// Single-file React portfolio app (preview-friendly)
// - Uses Tailwind utility classes for styling (include Tailwind in your project)
// - Tabs show unique content for About / Resume / Portfolio / Contact
// - Replace placeholder text and project entries with your real data

const PROFILE_IMG = "/profile.jpg";

function Nav({ active, setActive }) {
  const tabs = ["About", "Resume", "Portfolio", "Contact"];
  return (
    <nav className="flex gap-2 bg-white/5 rounded-2xl p-2">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
            active === t
              ? "bg-gradient-to-r from-amber-400 to-rose-500 text-slate-900 shadow-lg"
              : "text-white/80 hover:bg-white/10"
          }`}
        >
          {t}
        </button>
      ))}
    </nav>
  );
}

function Sidebar({ setActive }) {
  return (
    <aside className="w-full md:w-72 bg-white/5 rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <img
          src={PROFILE_IMG}
          alt="Profile"
          className="w-20 h-20 object-cover rounded-full ring-2 ring-amber-400/60"
        />
        <div>
          <h3 className="font-bold text-lg">Ben Perry</h3>
          <p className="text-sm text-white/80">
            Software Engineer • Game Dev • ML
          </p>
        </div>
      </div>

      <div className="text-sm space-y-2">
        <div>
          <div className="text-xs text-white/70">Email</div>
          <div className="font-medium">bjperry.dev@gmail.com</div>
        </div>
        <div>
          <div className="text-xs text-white/70">Location</div>
          <div className="font-medium">Worcester, MA</div>
        </div>
        <div>
          <div className="text-xs text-white/70">Role</div>
          <div className="font-medium">Front-end & Game Engine Dev</div>
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => {
            setActive("Contact");
            requestAnimationFrame(() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            });
          }}
          className="hover:bg-yellow-600 w-full text-center px-4 py-2 rounded-xl bg-amber-400/90 text-slate-900 font-semibold transition-colors"
        >
          Hire / Contact
        </button>
      </div>
    </aside>
  );
}


function About() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-white/85 leading-relaxed max-w-3xl">
        I'm a software engineer and game developer who loves creating playful, useful,
        and well-crafted experiences. I specialize in front-end development (React),
        UI/UX, and game engines (Unity/Unreal). I also have experience building
        prediction tools and small machine-learning models for applied projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/6 p-4 rounded-xl">
          <h4 className="font-semibold">What I build</h4>
          <p className="text-sm text-white/80">Web apps, gameplay systems, data visualizers.</p>
        </div>
        <div className="bg-white/6 p-4 rounded-xl">
          <h4 className="font-semibold">How I work</h4>
          <p className="text-sm text-white/80">I focus on human-centered design, being test-driven, and being collaborative, in all my work.</p>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Resume</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/6 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Experience</h3>
          <ul className="list-disc pl-5 text-sm text-white/85 space-y-2">
            <li>
              <strong>Research / Software Engineering Intern</strong> - Harvard Data Visualization Lab & Redfish Group (Geospatial technology, Data visualization)
            </li>
            <li>
              <strong>Lead Programmer</strong> — Wonderworks (Gameplay tools, networking)
            </li>
            <li>
              <strong>Coding Instructor</strong> — CodeNinjas (Teaching C#, Python basics)
            </li>
            <li>
              <strong>Lifeguard</strong> — YMCA (Responsibility + teamwork)
            </li>
          </ul>
        </div>
        <div className="bg-white/6 p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Education & Skills</h3>
          <p className="text-sm text-white/85">
            B.S. Computer Science & IMGD — Worcester Polytechnic Institute (expected 2026)
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <div>Languages: C#, C++, Python, JS</div>
            <div>Frameworks: React, Unity, Unreal</div>
            <div>Tools: Git, Docker, Tailwind</div>
          </div>
        </div>
      </div>

      <a
        className="hover:bg-red-700 inline-block mt-2 px-4 py-2 rounded-xl bg-rose-500/90 text-white font-semibold"
        href="/Ben_Perry_Resume_2025.pdf"
      >
        Download Resume
      </a>
    </section>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: "Skate Shot — Prototype Level",
    desc: "A momentum-based speedrunning level where players use a camera to freeze time and optimize routes.",
    tags: ["Unreal", "C++", "Gameplay"],
    image: "/SkateShot_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Skate_Shot",
    download: null,
  },
  {
    id: 2,
    title: "Geocamera Archive",
    desc: "Mapping tool with pinning and media-linked frames; Street View + 3D map integration. Also uses YouTube's I-Frame API.",
    tags: ["I-Frame API", "Javascript", "Maps API", "UX", "Tabulator"],
    image: "/Geocamera_Photo.png",
    link: "https://benperry.acequia.io/matcher/index_v009.html",
    download: null,
  },
  {
    id: 3,
    title: "Herd Watch — Predictive Model Demo",
    desc: "Small ML model using the k-neighbors algorithm to predict library crowd levels. Shown with explanation UI and charts. The data set is since outdated, but the code structure remains relevant.",
    tags: ["Python", "ML", "Visualization"],
    image: "/HerdWatch_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Herd_Watch",
    download: null,
  },
  {
    id: 4,
    title: "ASKMII Game Engine",
    desc: "Custom C# game engine with ECS architecture, rendering, physics, and scripting.",
    tags: ["C++", "Engine Dev", "SFML"],
    image: "/ASKMII_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/ASKMII",
    download: null,
  },
  {
    id: 5,
    title: "Retro Games",
    desc: "Collection of small games with unique improvements (Wordle, Snake, Tetris, etc.) built from scratch in the Unity engine.",
    tags: ["Unity", "C#", "Game Dev"],
    image: "/Retro_Games_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Retro_Games",
    download: null,
  },
  {
    id: 6,
    title: "Pier Pressuring - Prototype Game",
    desc: "A puzzle-platformer where players play as a pelican undocking sailors ships from a pier. Experiment with human-like AI behaviors.",
    tags: ["Unity", "C#", "AI", "Human-like AI Behavior"],
    image: "/Pier_Pressuring_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Pier_Pressuring",
    download: null,
  },
  {
    id: 7,
    title: "Dungeon Scrawlers - Prototype Game",
    desc: "A procedurally-generated dungeon crawler where players explore multiple floors in a maze-like environment.",
    tags: ["Unity", "C#", "AI", "Procedural Generation"],
    image: "/Dungeon_Scrawlers_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Dungeon_Scrawlers",
    download: null,
  },
  {
    id: 8,
    title: "Smile App",
    desc: "A simple message board where users can log in and post positive messages to brighten someone's day.",
    tags: ["Software Engineering", "SQLalchemy", "Flask"],
    image: "/Smile_App_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Smile_App",
    download: null,
  },
  {
    id: 9,
    title: "2D RPG Template",
    desc: "A JRPG template with a Dragon Quest inspired system for combat, quest, dialogue, scene transition, camera, game manager, inventory, saving, audio, and shop systems, etc., along with custom menus created for each aspect of the game. ",
    tags: ["JRPG", "Systems Development", "C#", "Unity", "Game Dev"],
    image: "/2D_RPG_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/2D_RPG",
    download: null,
  },
  {
    id: 10,
    title: "2.5D RPG Template",
    desc: "A 2.5D RPG template with an isometric camera, movement, and combat.",
    tags: ["JRPG", "Systems Development", "C#", "Unity", "Game Dev"],
    image: "/2.5D_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/2.5D_RPG",
    download: null,
  },
  {
    id: 11,
    title: "Mood Matcher",
    desc: "A quote generator where the user selects their mood and receives a quote that matches it.",
    tags: ["Data Science", "C#", "Unity", "Game Dev"],
    image: "/Mood_Matcher_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Mood_Matcher",
    download: null,
  }, 
  {
    id: 12,
    title: "Project Lilac",
    desc: "I developed the real-time, stance based combat system for this Indie RPG, inspired by classic JRPGs like Chrono Trigger, using C# in the Unity engine.",
    tags: ["Combat Systems", "C#", "Unity", "Game Dev"],
    image: "/Project_Lilac_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Project_Lilac_Prototype_Foootage",
    download: null,
  },
  {
    id: 13,
    title: "Research Opportunities Board",
    desc: "An application that hosts research opportunities for students to apply to as well as opportunity provider accounts for users to post research opportunities. Built with Flask, SQLalchemy, and Python.",
    tags: ["Python", "Flask", "Software Engineering", "SQLalchemy"],
    image: "/Research_Opportunities_Board.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Research_Opportunities_Board",
    download: null,
  },
  {
    id: 14,
    title: "Computer Graphics & Computer Animation Projects",
    desc: "Projects ranging from a vector graphics editor, animating a sphere along a spline, a bunny on top of a car animation (with lighting and shadows), a rough humanoid animation, a cube animating using quaternions, a particle system, and more. Read each README for details on each project.",
    tags: ["WebGL", "Computer Graphics", "Computer Animation"],
    image: "/Computer_Graphics_Photo.png",
    link: "https://github.com/BPSupernova/Portfolio-Website/releases/tag/Computer_Graphics_%26_Animation",
    download: null,
  }
];

function Portfolio() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Portfolio</h2>
      <h3 className="text-white/85 font-bold">Click on a project to demo or download it!</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              if (p.download) {
                window.location.href = p.download;
              } else if (p.link) {
                window.open(p.link, "_blank");
              }
            }}
            className="relative bg-white/6 p-6 rounded-xl text-left group transition-all hover:scale-[1.02] hover:shadow-xl overflow-hidden"
          >
            {/* Hover image */}
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
            />

            {/* Content overlay */}
            <div className="relative z-10">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-sm text-white/80 my-2">{p.desc}</p>

              <div className="flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle darkening overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none"></div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-white/85">Want to work together? Send me a message and I’ll respond within a few days.</p>

      <form
        action="https://formspree.io/f/mwpgbgpd"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
      >
        <input className="p-3 rounded-xl bg-white/6" name="name" placeholder="Name" required />
        <input className="p-3 rounded-xl bg-white/6" name="email" placeholder="Email" type="email" required />
        <input className="p-3 rounded-xl bg-white/6 col-span-full" name="subject" placeholder="Subject" />
        <textarea className="p-3 rounded-xl bg-white/6 col-span-full" name="message" placeholder="Message" rows={5} required />
        <button
          type="submit"
          className="hover:bg-yellow-600 px-4 py-2 rounded-xl bg-amber-400/90 text-slate-900 font-semibold col-span-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default function PortfolioApp() {
  const [active, setActive] = useState("About");

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-900 to-rose-900" />

      {/* Stars overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/stars.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      {/* Page content */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Sidebar setActive={setActive} />
          </div>

          <main className="md:col-span-3 space-y-6">
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Ben Perry — Portfolio</h1>
              <Nav active={active} setActive={setActive} />
            </header>

            <div className="bg-white/4 p-6 rounded-2xl shadow-inner">
              {active === "About" && <About />}
              {active === "Resume" && <Resume />}
              {active === "Portfolio" && <Portfolio />}
              {active === "Contact" && <Contact />}
            </div>

            <footer className="text-center text-sm text-white/60">
              © {new Date().getFullYear()} Ben Perry
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

