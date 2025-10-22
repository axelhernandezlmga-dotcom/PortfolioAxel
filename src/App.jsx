// src/App.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import bgSierras from "./assets/sierras.jpg";

/* =============================== Logos minimal (monocromo) =============================== */
const TechLogo = ({ name, title }) => {
  const c = "h-5 w-5 md:h-6 md:w-6";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name.toLowerCase()) {
    // Frontend
    case "html":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "HTML"}
          aria-label="HTML"
        >
          <path
            {...stroke}
            d="M3 3h18l-2 16-7 2-7-2L3 3zM7 7h10M8 12h8M9 16h6"
          />
        </svg>
      );
    case "css":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "CSS"}
          aria-label="CSS"
        >
          <path
            {...stroke}
            d="M3 3h18l-2 16-7 2-7-2L3 3zM8 8h8M7 12h10M9 16h6"
          />
        </svg>
      );
    case "javascript":
    case "js":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "JavaScript"}
          aria-label="JavaScript"
        >
          <rect {...stroke} x="3" y="3" width="18" height="18" rx="2" />
          <path
            {...stroke}
            d="M8 14c0 2 3 2 3 0v-4M13 12c0-2 3-2 3 0 0 2-3 2-3 4"
          />
        </svg>
      );
    case "react":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "React"}
          aria-label="React"
        >
          <circle {...stroke} cx="12" cy="12" r="2.2" />
          <ellipse {...stroke} cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse
            {...stroke}
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            {...stroke}
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "tailwind":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Tailwind"}
          aria-label="Tailwind"
        >
          <path
            {...stroke}
            d="M4 12c2-6 7-8 10-4 3 4 6 2 8 0-2 6-7 8-10 4S6 10 4 12z"
          />
        </svg>
      );
    case "vite":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Vite"}
          aria-label="Vite"
        >
          <path {...stroke} d="M12 21 3 6h18z" />
          <path {...stroke} d="M12 17V9" />
        </svg>
      );

    // Backend/APIs
    case "node":
    case "node.js":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Node.js"}
          aria-label="Node.js"
        >
          <path {...stroke} d="M12 2 3 7v10l9 5 9-5V7zM8 9h8v2H10v4h6v2H8z" />
        </svg>
      );
    case "apis":
    case "rest":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "APIs REST"}
          aria-label="APIs"
        >
          <path {...stroke} d="M4 12h16M7 8v8M17 8v8M4 6h16v12H4z" />
        </svg>
      );

    // DB
    case "sqlite":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "SQLite"}
          aria-label="SQLite"
        >
          <ellipse {...stroke} cx="12" cy="6" rx="7.5" ry="3" />
          <path {...stroke} d="M4.5 6v10c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
        </svg>
      );
    case "mysql":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "MySQL"}
          aria-label="MySQL"
        >
          <path
            {...stroke}
            d="M3 7c2-3 7-4 9-1s7 2 9-1v12c-2 3-7 4-9 1s-7-2-9 1V7z"
          />
        </svg>
      );
    case "postgresql":
    case "postgres":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "PostgreSQL"}
          aria-label="PostgreSQL"
        >
          <path {...stroke} d="M12 3c5 0 8 2 8 6s-3 6-8 6-8-2-8-6 3-6 8-6z" />
          <path {...stroke} d="M8 15v4l4 2 4-2v-4" />
        </svg>
      );

    // Sistemas / redes
    case "linux":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Linux"}
          aria-label="Linux"
        >
          <path
            {...stroke}
            d="M12 3a4 4 0 0 0-4 4v1a6 6 0 1 0 8 0V7a4 4 0 0 0-4-4zM9 21h6"
          />
        </svg>
      );
    case "networking":
    case "redes":
    case "packet tracer":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Redes"}
          aria-label="Redes"
        >
          <circle {...stroke} cx="5" cy="12" r="2" />
          <circle {...stroke} cx="12" cy="5" r="2" />
          <circle {...stroke} cx="19" cy="12" r="2" />
          <circle {...stroke} cx="12" cy="19" r="2" />
          <path {...stroke} d="M7 12h10M12 7v10M7 12l5-5m0 10 5-5" />
        </svg>
      );

    // Herramientas / lenguajes extra
    case "git":
    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Git/GitHub"}
          aria-label="Git"
        >
          <path
            {...stroke}
            d="M12 2a9.5 9.5 0 0 0-3 18.5v-2.1c-3 .7-3.7-1.3-3.7-1.3M9 18c.1-.7.4-1.1.7-1.4-2.4-.3-5-1.2-5-5.3 0-1.1.4-2 .9-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.8 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7.9 1.6.9 2.7 0 4.1-2.6 5-5 5.3.4.3.8.9.8 1.9V21"
          />
        </svg>
      );
    case "firebase":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Firebase"}
          aria-label="Firebase"
        >
          <path {...stroke} d="M6 19 5 5l6 4 3-5 5 15-7 3-7-3z" />
        </svg>
      );
    case "trello":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Trello"}
          aria-label="Trello"
        >
          <rect {...stroke} x="3" y="3" width="18" height="18" rx="2" />
          <rect {...stroke} x="6.5" y="6.5" width="4.5" height="9" rx="1" />
          <rect {...stroke} x="13" y="6.5" width="4.5" height="6" rx="1" />
        </svg>
      );
    case "python":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Python"}
          aria-label="Python"
        >
          <path
            {...stroke}
            d="M7 7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H10a3 3 0 0 0-3 3v2H7a3 3 0 0 1-3-3V10h6V7zM17 17a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4h7a3 3 0 0 0 3-3V8h1a3 3 0 0 1 3 3v3h-6v3z"
          />
        </svg>
      );
    case "java":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "Java"}
          aria-label="Java"
        >
          <path
            {...stroke}
            d="M12 3c2 2-2 3 0 5s-2 3 0 5M6 18c2 2 10 2 12 0M5 15c3 2 11 2 14 0"
          />
        </svg>
      );
    case "c#":
    case "csharp":
      return (
        <svg
          viewBox="0 0 24 24"
          className={c}
          title={title || "C#"}
          aria-label="C#"
        >
          <circle {...stroke} cx="10" cy="12" r="5" />
          <path {...stroke} d="M16 9v6M18.5 9v6M16 12h4.5" />
        </svg>
      );
    default:
      return (
        <div
          className={`${c} rounded bg-white/15`}
          title={title || name}
          aria-label={title || name}
        />
      );
  }
};

/* =================================== Fondo global =================================== */
function BackgroundLayer() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgSierras})` }}
      initial={{ scale: 1.05, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
    </motion.div>
  );
}

/* =================================== Navbar =================================== */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-black/35 backdrop-blur-md text-white z-50 border-b border-white/10">
      <a href="#about" className="text-base md:text-lg font-semibold">
        Axel Hernández
      </a>
      <div className="flex items-center gap-6 text-sm">
        <a
          href="https://www.linkedin.com/in/axel-hernandez-468773334/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-white/90"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="/CVitae_AXEL.pdf"
          download
          className="flex items-center gap-1 hover:text-white/90"
        >
          <Download size={18} /> CV
        </a>
      </div>
    </nav>
  );
}

/* =================================== Splash Hola→Hello =================================== */
function Splash({ onDone }) {
  const [word, setWord] = useState("Hola");

  useEffect(() => {
    const swap = setInterval(
      () => setWord((w) => (w === "Hola" ? "Hello" : "Hola")),
      900
    );
    const end = setTimeout(onDone, 2400); // ~ Hola → Hello → salir
    return () => {
      clearInterval(swap);
      clearTimeout(end);
    };
  }, [onDone]);

  return (
    <motion.div className="fixed inset-0 z-50 grid place-items-center">
      {/* fondo con cover (evita collage) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgSierras})` }}
      />
      <div className="absolute inset-0 bg-black/45 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 px-8 py-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
      >
        <div className="text-center">
          <span className="block text-xs md:text-sm uppercase tracking-[0.35em] text-white/70">
            Bienvenido
          </span>
          <div className="h-16 md:h-20 flex items-center justify-center mt-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={word}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-white drop-shadow will-change-transform"
              >
                {word}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =================================== Secciones =================================== */
function Hero() {
  return (
    <section
      id="about"
      className="h-[92vh] flex flex-col justify-center px-6 md:px-16 text-white"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Axel Hernández
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl max-w-2xl text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
      >
        Desarrollador en formación (UCU) — Frontend con React, bases de datos y
        redes. Me interesan las interfaces pulidas, animaciones sutiles y
        proyectos con impacto real.
      </motion.p>
    </section>
  );
}

function ProjectCard({ title, desc, img, tech = [] }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl"
    >
      <div className="relative h-40 md:h-44 lg:h-48 w-full overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5" />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-5 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{desc}</p>
        {!!tech.length && (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-white/90">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/10 border border-white/20"
              >
                <TechLogo name={t} title={t} />
                <span className="text-xs">{t}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  const projects = [
    {
      title: "Sistema de Stock – Papelería",
      desc: "Gestión de inventario, códigos de barras/QR, precios y etiquetas.",
      img: null,
      tech: ["React", "Node", "SQLite", "JavaScript"],
    },
    {
      title: "Flag Trivia (SPA)",
      desc: "Juego educativo con ruteo y estados.",
      img: null,
      tech: ["React", "Vite", "JavaScript"],
    },
    {
      title: "Demo Delivery",
      desc: "Prototipo UI estilo PedidosYa con carrito y filtros.",
      img: null,
      tech: ["React", "Vite", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-16 py-16 md:py-20 text-white">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold">Proyectos</h3>
        <p className="mt-2 text-white/80 max-w-2xl">
          Imágenes de portada y logos de tecnologías en estilo minimal.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const groups = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite"],
    },
    { title: "Backend / APIs", items: ["Node.js", "APIs"] },
    { title: "Bases de Datos", items: ["MySQL", "PostgreSQL", "SQLite"] },
    {
      title: "Sistemas y Redes",
      items: ["Linux", "Networking", "Packet Tracer"],
    },
    { title: "Herramientas", items: ["Git", "GitHub", "Firebase", "Trello"] },
    { title: "Lenguajes", items: ["Python", "Java", "C#"] },
  ];

  return (
    <section id="stack" className="px-6 md:px-16 py-16 text-white">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold">Tecnologías</h3>
        <p className="mt-2 text-white/80 max-w-3xl">
          Stack basado en tu formación y experiencia.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5"
          >
            <h4 className="font-semibold mb-3">{g.title}</h4>
            <div className="flex flex-wrap gap-3">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/20"
                >
                  <TechLogo name={it} title={it} />
                  <span className="text-sm">{it}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-16 bg-black/35 backdrop-blur-md text-white border-t border-white/10"
    >
      <h3 className="text-3xl md:text-4xl font-semibold">Contactame</h3>
      <div className="mt-4 flex flex-col gap-2 text-lg">
        <p className="flex items-center gap-2">
          <Mail className="h-5 w-5" /> axelhernandezlmga@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-5 w-5" /> 095 884 377
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-5 w-5" /> Solís de Mataojo / Montevideo
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-white/70 bg-black/25 backdrop-blur-md border-t border-white/10">
      © {new Date().getFullYear()} Axel Hernández — Todos los derechos
      reservados.
    </footer>
  );
}

/* =================================== App =================================== */
export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="min-h-screen text-white">
      {/* Fondo SIEMPRE presente (también durante el splash) */}
      <BackgroundLayer />

      {/* Splash controlado sólo desde adentro (evita pantalla negra) */}
      {!splashDone ? (
        <Splash onDone={() => setSplashDone(true)} />
      ) : (
        <>
          <Navbar />
          <main className="pt-16">
            <Hero />
            <Projects />
            <Technologies />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
