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

function Sidebar() {
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
          <p className="text-sm text-white/80">Software Engineer • Game Dev • ML</p>
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
        <a
          href="#contact"
          className="inline-block w-full text-center px-4 py-2 rounded-xl bg-amber-400/90 text-slate-900 font-semibold"
        >
          Hire / Contact
        </a>
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
        className="inline-block mt-2 px-4 py-2 rounded-xl bg-rose-500/90 text-white font-semibold"
        href="/mnt/data/Resume.pdf"
      >
        Download Resume (placeholder)
      </a>
    </section>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: "Speedrun Camera — Prototype",
    desc: "A momentum-based speedrunning level where players use a camera to freeze time and optimize routes.",
    tags: ["Unreal", "C++", "Gameplay"],
  },
  {
    id: 2,
    title: "Geocamera Archive",
    desc: "Mapping tool with pinning and media-linked frames; Street View + 3D map integration.",
    tags: ["React", "Maps API", "UX"],
  },
  {
    id: 3,
    title: "Predictive Model Demo",
    desc: "Small ML model for a vision task with explanation UI and charts.",
    tags: ["Python", "ML", "Visualization"],
  },
];

function Portfolio() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <article key={p.id} className="bg-white/6 p-6 rounded-xl">
            <h3 className="font-semibold text-xl">{p.title}</h3>
            <p className="text-sm text-white/80 my-2">{p.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-white/8 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </article>
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

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <input className="p-3 rounded-xl bg-white/6" placeholder="Name" />
        <input className="p-3 rounded-xl bg-white/6" placeholder="Email" />
        <input className="p-3 rounded-xl bg-white/6 col-span-full" placeholder="Subject" />
        <textarea className="p-3 rounded-xl bg-white/6 col-span-full" placeholder="Message" rows={5} />
        <button className="px-4 py-2 rounded-xl bg-amber-400/90 text-slate-900 font-semibold col-span-full">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default function PortfolioApp() {
  const [active, setActive] = useState("About");

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-900 via-violet-900 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Sidebar />
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

          <footer className="text-center text-sm text-white/60">© {new Date().getFullYear()} Ben Perry</footer>
        </main>
      </div>
    </div>
  );
}
