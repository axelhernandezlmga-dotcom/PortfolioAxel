import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
} from "lucide-react";

/**
 * Versión JS pura (sin TypeScript, sin shadcn).
 * Imagen de fondo:
 *  - Opción A (recomendada): coloca una imagen en /public/assets/sierras.jpg
 *  - Opción B: usa una imagen en src/assets y cambias a import.
 */

// ==== Fondo ====
const BG_URL = "/assets/sierras.jpg"; // si la pones en public/assets/sierras.jpg

// Si tu imagen está en src/assets con otro nombre, usá estas 2 líneas y comenta la anterior:
// import sierras from "./assets/sierras.jpg";
// const BG_URL = sierras;

// ==== Pequeños componentes utilitarios (reemplazan Card/Badge/Button) ====
function Card({ className = "", children }) {
  return <div className={`rounded-2xl border ${className}`}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function Badge({ className = "", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
function Button({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow 
                  bg-white/10 text-white border border-white/30 hover:bg-white/20 transition ${className}`}
    >
      {children}
    </button>
  );
}

// ==== Fondo fijo con blur suave ====
function BackgroundLayer() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
    </div>
  );
}

// ==== Splash Hola/Hello ====
function Splash({ onDone }) {
  const [word, setWord] = useState("Hola");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const swap = setInterval(
      () => setWord((w) => (w === "Hola" ? "Hello" : "Hola")),
      700
    );
    const timer = setTimeout(() => {
      setShow(false);
      const end = setTimeout(onDone, 450);
      return () => clearTimeout(end);
    }, 2200);
    return () => {
      clearInterval(swap);
      clearTimeout(timer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-50 grid place-items-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_URL})`, filter: "blur(8px)" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 px-8 py-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
          >
            <div className="text-center">
              <span className="block text-sm uppercase tracking-[0.3em] text-white/70">
                Bienvenido
              </span>
              <div className="h-20 flex items-center justify-center mt-2">
                <motion.span
                  key={word}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-5xl md:text-6xl font-bold text-white drop-shadow"
                >
                  {word}
                </motion.span>
              </div>
              <p className="mt-2 text-white/70">
                Entrando al portfolio de Axel…
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ==== Helpers de layout ====
function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 text-left">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight flex items-center gap-3">
        <Sparkles className="h-7 w-7" /> {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-white/80 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
function Container({ children, id }) {
  return (
    <section id={id} className="w-full px-5 md:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

// ==== Navbar (glass) ====
function Navbar() {
  const items = [
    { href: "#about", label: "Inicio" },
    { href: "#projects", label: "Proyectos" },
    { href: "#stack", label: "Tecnologías" },
    { href: "#experience", label: "Experiencia" },
    { href: "#contact", label: "Contacto" },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="mx-auto max-w-6xl flex items-center justify-between h-14 px-5 md:px-8">
        <a
          href="#about"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Axel Hernández
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="hover:text-white text-white/80 transition-colors"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/tu-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </a>
          <a href="/CVitae_AXEL.pdf" download>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

// ==== Hero ====
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);

  return (
    <div
      ref={ref}
      id="about"
      className="relative h-[92vh] w-full overflow-hidden"
    >
      <motion.div
        style={{ y, backgroundImage: `url(${BG_URL})` }}
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-5 md:px-8 flex items-center">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Axel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Desarrollador en formación (UCU) — Frontend con React, bases de
            datos y redes. Me interesan las interfaces pulidas, animaciones
            sutiles y proyectos con impacto real.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Badge className="bg-white/20 text-white border border-white/30">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              Solís de Mataojo / Montevideo, UY
            </Badge>
            <Badge className="bg-white/20 text-white border border-white/30">
              <GraduationCap className="h-3.5 w-3.5 mr-1" />
              Ingeniería Informática (UCU)
            </Badge>
            <Badge className="bg-white/20 text-white border border-white/30">
              <Code2 className="h-3.5 w-3.5 mr-1" />
              React • JS • SQL
            </Badge>
          </motion.div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:axelhernandezlmga@gmail.com">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Contactar
              </Button>
            </a>
            <a
              href="https://github.com/tu-github"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}

// ==== Projects (glass cards) ====
function Projects() {
  const data = [
    {
      title: "Sistema de stock & etiquetado (Papelería)",
      desc: "Gestión de inventario, códigos de barras/QR, precios y etiquetas. Frontend en React; backend simple con Node/SQLite.",
      tags: ["React", "Node", "SQLite", "Etiquetas"],
      link: "#",
    },
    {
      title: "Juego educativo: Flag Trivia",
      desc: "SPA con React Router. Lógica simple, estados y niveles, pensado para enseñanza básica.",
      tags: ["React", "React Router"],
      link: "#",
    },
    {
      title: "Demo Pedidos tipo delivery",
      desc: "Prototipo estilo PedidosYa: listado, filtros y carrito. Énfasis en UI limpia.",
      tags: ["React", "Vite"],
      link: "#",
    },
  ];
  return (
    <Container id="projects">
      <SectionTitle
        title="Proyectos"
        subtitle="UI/UX + soluciones prácticas; cartas con glassmorphism y blur."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link.startsWith("http") ? "_blank" : undefined}
            rel={p.link.startsWith("http") ? "noreferrer" : undefined}
            whileHover={{ y: -4 }}
            className="block"
          >
            <Card className="h-full bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/15 transition-colors">
              <CardContent>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight text-white">
                    {p.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 opacity-80 text-white" />
                </div>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      className="bg-white/20 text-white border border-white/30"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </Container>
  );
}

// ==== Tech Stack ====
function Stack() {
  const groups = [
    {
      name: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Vite", "React Router"],
    },
    {
      name: "Backend & DB",
      items: ["Node.js", "SQLite", "MySQL", "PostgreSQL", "APIs REST"],
    },
    {
      name: "Herramientas",
      items: ["Git/GitHub", "VS Code", "Linux", "Firebase Hosting", "Trello"],
    },
  ];
  return (
    <Container id="stack">
      <SectionTitle
        title="Tecnologías"
        subtitle="Base sólida en web, bases de datos y Linux."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <Card
            key={g.name}
            className="bg-white/10 border-white/20 backdrop-blur-xl"
          >
            <CardContent>
              <h3 className="text-lg font-semibold text-white">{g.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Badge
                    key={it}
                    className="bg-white/20 text-white border border-white/30"
                  >
                    {it}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}

// ==== Experiencia & Educación ====
function Experience() {
  const roles = [
    {
      org: "Secundaria – DGES",
      where: "Solís de Mataojo",
      when: "2025 – Actualidad",
      role: "Docente de Informática",
    },
    {
      org: "Papelería Los Gurises (empresa familiar)",
      where: "Solís de Mataojo",
      when: "2022 – Actualidad",
      role: "Colaborador (operaciones, tecnología e inventario)",
    },
  ];
  const edu = [
    {
      org: "Universidad Católica del Uruguay (UCU)",
      what: "Ingeniería Informática (beca 50%)",
      when: "2024 – 2028 (en curso)",
    },
    {
      org: "Liceo Militar ‘Gral. Artigas’",
      what: "Bachillerato",
      when: "2021 – 2023",
    },
  ];
  return (
    <Container id="experience">
      <SectionTitle
        title="Experiencia y Educación"
        subtitle="Compromiso académico y trabajo aplicado."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 border-white/20 backdrop-blur-xl">
          <CardContent>
            <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
              <Briefcase className="h-5 w-5" /> Experiencia
            </h3>
            <div className="mt-4 space-y-4">
              {roles.map((r) => (
                <div
                  key={r.org}
                  className="p-4 rounded-2xl border border-white/20 bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{r.org}</p>
                    <span className="text-xs text-white/70">{r.when}</span>
                  </div>
                  <p className="text-sm text-white/80">
                    {r.role} · {r.where}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20 backdrop-blur-xl">
          <CardContent>
            <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
              <GraduationCap className="h-5 w-5" /> Educación
            </h3>
            <div className="mt-4 space-y-4">
              {edu.map((e) => (
                <div
                  key={e.org}
                  className="p-4 rounded-2xl border border-white/20 bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{e.org}</p>
                    <span className="text-xs text-white/70">{e.when}</span>
                  </div>
                  <p className="text-sm text-white/80">{e.what}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Badge className="border border-white/30 text-white/90 bg-transparent">
          Inglés: Intermedio
        </Badge>
        <Badge className="border border-white/30 text-white/90 bg-transparent">
          Linux/Unix • Redes (RIP, OSPF) • Packet Tracer
        </Badge>
        <Badge className="border border-white/30 text-white/90 bg-transparent">
          Git/GitHub
        </Badge>
      </div>
    </Container>
  );
}

// ==== Contacto ====
function Contact() {
  return (
    <Container id="contact">
      <SectionTitle
        title="Contactame"
        subtitle="¿Tenés una propuesta o proyecto? Contestás y coordinamos."
      />
      <div className="grid md:grid-cols-5 gap-6">
        <Card className="md:col-span-3 bg-white/10 border-white/20 backdrop-blur-xl">
          <CardContent>
            <form action="mailto:axelhernandezlmga@gmail.com" method="get">
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm mb-1 text-white/80">
                    Asunto
                  </label>
                  <input
                    required
                    name="subject"
                    className="w-full rounded-xl border px-3 py-2 bg-white/10 text-white placeholder:text-white/60 border-white/30"
                    placeholder="Oportunidad / Proyecto"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-white/80">
                    Mensaje
                  </label>
                  <textarea
                    required
                    name="body"
                    rows={6}
                    className="w-full rounded-xl border px-3 py-2 bg-white/10 text-white placeholder:text-white/60 border-white/30"
                    placeholder="Contame brevemente tu necesidad…"
                  />
                </div>
                <Button type="submit" className="gap-2">
                  Enviar <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="mt-3 text-xs text-white/70">
              Alternativa: integrar Formspree / Resend para envío sin abrir el
              cliente de correo.
            </p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 bg-white/10 border-white/20 backdrop-blur-xl">
          <CardContent className="space-y-3 text-white">
            <a
              className="flex items-center gap-3"
              href="mailto:axelhernandezlmga@gmail.com"
            >
              <Mail className="h-5 w-5" /> axelhernandezlmga@gmail.com
            </a>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5" /> 095 884 377
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5" /> Solís de Mataojo / Montevideo
            </p>
            <a
              className="flex items-center gap-3"
              href="https://www.linkedin.com/in/tu-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              className="flex items-center gap-3"
              href="https://github.com/tu-github"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

// ==== Footer ====
function Footer() {
  return (
    <footer className="py-10 border-t border-white/20 bg-black/20 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/80">
        <p>
          © {new Date().getFullYear()} Axel Hernández. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="/CVitae_AXEL.pdf">
            Descargar CV
          </a>
          <a className="hover:text-white" href="#about">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}

// ==== App ====
export default function PortfolioAxel() {
  const [splashDone, setSplashDone] = useState(false);

  // smooth scroll de anclas
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <BackgroundLayer />
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
