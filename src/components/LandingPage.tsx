"use client";

import Image from "next/image";
import { FormEvent, type ReactNode, useState } from "react";
import AuroraBackground from "@/components/AuroraBackground";
import Logo from "@/components/Logo";

type ContactForm = {
  name: string;
  email: string;
  service: string;
  description: string;
};

const SERVICE_OPTIONS = [
  "Aplicación Web o App Móvil",
  "Análisis, Bases de Datos & Web Scraping",
  "Algoritmos, IA & Automatización",
  "Call Center con IA, WhatsApp & Comunicaciones",
  "Consultoría Integral",
] as const;

const SERVICES = [
  {
    title: "Software & Apps",
    description:
      "Aplicaciones web dinámicas y apps móviles híbridas con stacks modernos y arquitectura preparada para crecer.",
  },
  {
    title: "Análisis & Ingeniería de Datos",
    description:
      "Diseño, optimización y análisis de bases de datos, con extracción masiva (Web Scraping) para inteligencia de negocio.",
  },
  {
    title: "Algoritmos & Automatización",
    description:
      "Ranking, pipelines de Machine Learning, agentes de automatización y motores de decisión en tiempo real.",
  },
  {
    title: "Call Center con IA & WhatsApp",
    description:
      "Comunicación omnicanal: call center con IA, WhatsApp Business y plataformas de contacto escalables.",
  },
] as const;

const CLIENTS = [
  { name: "CBSE Yerba Mate", detail: "Call center · Atención al consumidor" },
  { name: "Thanks Brain", detail: "España · Soluciones digitales" },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Implementaron nuestro call center de atención al consumidor con IA y WhatsApp. Más velocidad, mejor organización y un consumidor que nota la diferencia.",
    author: "Atención al Consumidor",
    company: "CBSE Yerba Mate",
  },
  {
    quote:
      "Entendieron el desafío desde el primer día y entregaron un sistema estable, medible y listo para escalar.",
    author: "Dirección de Proyecto",
    company: "Thanks Brain · España",
  },
  {
    quote:
      "Arquitectura clara, plazos reales y resultados medibles. Un partner técnico de confianza.",
    author: "Cliente corporativo",
    company: "Ingeniería de datos",
  },
] as const;

const STEPS = [
  {
    number: "01",
    title: "Arquitectura y Diseño",
    description:
      "Planificamos flujos de datos y lógica para anticipar cuellos de botella desde el día uno.",
  },
  {
    number: "02",
    title: "Desarrollo e Integración",
    description:
      "Código limpio, moderno y testeado, preparado para alta carga desde el primer deploy.",
  },
  {
    number: "03",
    title: "Optimización Crítica",
    description:
      "Monitoreo de velocidad, estabilidad y ejecución en tiempo real bajo presión.",
  },
] as const;

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  service: "",
  description: "",
};

function LinkCue({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-meta-blue transition-colors group-hover:text-blue-700">
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </span>
  );
}

export default function LandingPage() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const updateField = <K extends keyof ContactForm>(
    field: K,
    value: ContactForm[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Consulta técnica:", form);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen text-ink">
      <AuroraBackground />

      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a
            href="#top"
            className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-meta-blue/40"
            aria-label="busquedas.net — inicio"
          >
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-ink md:flex">
            <a href="#servicios" className="transition-opacity hover:opacity-60">
              Servicios
            </a>
            <a href="#clientes" className="transition-opacity hover:opacity-60">
              Clientes
            </a>
            <a href="#ceo" className="transition-opacity hover:opacity-60">
              Equipo
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-[1]">
        {/* Hero — statement corporativo grande, estilo Meta */}
        <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-medium text-ink-muted">
            25 años gestionando datos e información en internet
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Datos y software de alto rendimiento.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Infraestructuras robustas, scraping, algoritmos inteligentes y
            sistemas de comunicación — con la solidez de 25 años en internet.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex rounded-full bg-meta-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Cotizar proyecto
            </a>
            <a
              href="#servicios"
              className="group inline-flex items-center rounded-full px-2 py-3"
            >
              <LinkCue>Ver servicios</LinkCue>
            </a>
          </div>
        </section>

        {/* Statement band */}
        <section className="border-y border-black/5 bg-white/50 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl lg:leading-tight">
              Y las tecnologías que lo hacen posible.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              De la ingeniería de datos a la automatización con IA: diseñamos
              sistemas listos para escala real.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="servicios"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-meta-blue">Nuestros servicios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Especialización técnica, sin ruido.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-shadow hover:shadow-md sm:p-10"
              >
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Clients + social proof */}
        <section id="clientes" className="bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <p className="text-sm font-medium text-meta-blue">Clientes</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Confianza construida con resultados.
                </h2>
              </div>
              <div className="flex flex-wrap gap-10">
                {CLIENTS.map((client) => (
                  <div key={client.name}>
                    <p className="text-xl font-semibold tracking-tight text-ink">
                      {client.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">{client.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-8 border-t border-black/5 pt-16 md:grid-cols-3">
              {TESTIMONIALS.map((item) => (
                <blockquote key={item.company}>
                  <p className="text-[15px] leading-relaxed text-ink">
                    “{item.quote}”
                  </p>
                  <footer className="mt-5">
                    <cite className="not-italic">
                      <span className="block text-sm font-semibold text-ink">
                        {item.author}
                      </span>
                      <span className="mt-0.5 block text-sm text-ink-muted">
                        {item.company}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership — eco Meta */}
        <section
          id="ceo"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            <div className="mx-auto w-full max-w-[240px] lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                {!photoError ? (
                  <Image
                    src="/mauricio-viola.jpg"
                    alt="Mauricio Adrián Viola, CEO de busquedas.net"
                    fill
                    className="object-cover"
                    sizes="240px"
                    priority
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#dbeafe] to-white text-center">
                    <span className="text-3xl font-semibold text-ink">MV</span>
                    <span className="mt-2 px-4 text-[11px] text-ink-muted">
                      public/mauricio-viola.jpg
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-meta-blue">
                Conocé a nuestro liderazgo
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Mauricio Adrián Viola
              </h2>
              <p className="mt-2 text-base font-medium text-ink-muted">
                Fundador & CEO · Growth & Content Creator
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
                Licenciado en Comunicación Social (UNR) y periodista digital
                (Universitat Ramon Llull, Barcelona). Fundador de{" "}
                <span className="text-ink">busquedas.net</span> desde 2001: 25
                años en búsquedas de información, análisis de datos e
                inteligencia colectiva para empresas de Argentina, España y +20
                países.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
                Growth y content creator: combina estrategia de crecimiento con
                creación de contenido. Hoy lidera el pivot hacia ingeniería de
                datos, software de alto rendimiento, automatización con IA y
                sistemas de comunicación omnicanal.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-white/55 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Del diseño a la ejecución crítica.
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {STEPS.map((step) => (
                <li key={step.number}>
                  <span className="text-sm font-semibold text-meta-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contacto"
          className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl lg:leading-tight">
                ¿Tenés un desafío técnico en mente?
              </h2>
              <p className="mt-5 text-lg text-ink-muted">
                Contanos el contexto. Respondemos con un diagnóstico técnico
                inicial.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              {submitted ? (
                <div role="status">
                  <p className="text-lg font-semibold text-ink">
                    Consulta recibida.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Te contactaremos a la brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-meta-blue"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-ink-muted"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full rounded-xl border border-black/10 bg-[#f4f6fa] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-meta-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-ink-muted"
                    >
                      Email Corporativo
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full rounded-xl border border-black/10 bg-[#f4f6fa] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-meta-blue"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-xs font-medium text-ink-muted"
                    >
                      Tipo de proyecto
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full appearance-none rounded-xl border border-black/10 bg-[#f4f6fa] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-meta-blue"
                    >
                      <option value="" disabled>
                        Seleccioná una opción
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="mb-1.5 block text-xs font-medium text-ink-muted"
                    >
                      Descripción del proyecto
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={form.description}
                      onChange={(e) =>
                        updateField("description", e.target.value)
                      }
                      className="w-full resize-y rounded-xl border border-black/10 bg-[#f4f6fa] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-meta-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-meta-blue py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    INICIAR CONSULTA TÉCNICA
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-[1] border-t border-black/5 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-ink-muted sm:flex-row sm:items-center lg:px-8">
          <Logo />
          <p>© {currentYear} busquedas.net</p>
        </div>
      </footer>
    </div>
  );
}
