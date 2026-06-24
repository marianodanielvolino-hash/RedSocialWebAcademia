import { useStore } from '../store/useStore'
import NetworkCanvas from './NetworkCanvas'
import { ArrowRight } from 'lucide-react'

export default function Landing() {
  const { setScreen } = useStore()

  const stats = [
    { value: '2017', label: 'Año de habilitación formal por la IGJ' },
    { value: '5', label: 'Líneas fundacionales que guían el trabajo' },
    { value: '14', label: 'Documentos técnicos públicos y curados' },
    { value: '12', label: 'Cursos en la academia, en tres niveles' }
  ]

  const partners = ['Gobiernos provinciales', 'Organismos públicos', 'Universidades', 'Equipos territoriales']

  const objeto = [
    { title: 'Desarrollo social', desc: 'Programas y herramientas para mejorar capacidades comunitarias e institucionales.', dot: 'bg-magenta' },
    { title: 'Participación ciudadana', desc: 'Dispositivos para escuchar, ordenar demandas y mejorar vínculos con la ciudadanía.', dot: 'bg-naranja' },
    { title: 'Políticas públicas', desc: 'Investigación aplicada, diseño de procesos, tableros y mejora de la gestión.', dot: 'bg-magenta' },
    { title: 'Ambiente y territorio', desc: 'Cuidado ambiental, servicios urbanos y gestión territorial.', dot: 'bg-naranja' },
    { title: 'Ciudades inteligentes', desc: 'Integración de datos, servicios, tecnología y capacidades humanas.', dot: 'bg-[#B8A98F]' }
  ]

  const timeline = [
    { year: '2017', title: 'Habilitación institucional', estado: 'Histórico', desc: 'La IGJ autoriza a funcionar a Fundación Red Social y aprueba su estatuto. Punto de partida formal de la misión.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2018', title: 'Redes de colaboración', estado: 'Histórico', desc: 'Construcción de vínculos con personas, organizaciones y equipos interesados en mejorar lo público.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2019', title: 'Formación y ciudadanía', estado: 'Histórico', desc: 'Primeras líneas de trabajo orientadas a capacidades, participación y acompañamiento institucional.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2020', title: 'Adaptación y continuidad', estado: 'Histórico', desc: 'Aprendizajes sobre digitalización, cercanía, coordinación y respuesta en contextos cambiantes.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2021', title: 'Del aprendizaje al método', estado: 'Histórico', desc: 'Ordenamiento de criterios, herramientas y formas de intervención para construir una forma propia de trabajar.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2022', title: 'Fortalecimiento institucional', estado: 'Histórico', desc: 'Mayor foco en gestión pública, procesos, equipos técnicos e implementación.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2023', title: 'Arquitectura institucional', estado: 'Histórico', desc: 'Una mirada centrada en procesos, datos, roles y capacidad instalada: no piezas sueltas, sino arquitectura.', dot: 'border-[#7C6E5F] bg-[#7C6E5F]', stClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' },
    { year: '2024', title: 'Arquitectura pública integrada', estado: 'Vigente', desc: 'Metodología para conectar áreas, canales, servicios, datos y equipos. No reemplazamos: ordenamos lo existente.', dot: 'border-magenta bg-magenta', stClass: 'bg-magenta/12 text-[#B3115F]' },
    { year: '2025', title: 'Programas y transferencia', estado: 'Vigente', desc: 'Capacitación, protocolos, tableros, documentos técnicos y mejora de servicios, con foco en transferencia.', dot: 'border-magenta bg-magenta', stClass: 'bg-magenta/12 text-[#B3115F]' },
    { year: '2026', title: 'Portal, Academia y Comunidad', estado: 'En desarrollo', desc: 'Plataforma institucional de conocimiento, formación, implementación y participación.', dot: 'border-naranja bg-naranja', stClass: 'bg-naranja/16 text-[#9A5B00]' }
  ]

  const valores = [
    { title: 'Participación', desc: 'Instituciones que escuchan, integran y construyen con la ciudadanía.' },
    { title: 'Evidencia', desc: 'Decisiones basadas en datos, aprendizajes y resultados verificables.' },
    { title: 'Capacidad instalada', desc: 'Dejamos herramientas, método y autonomía, no intervenciones decorativas.' },
    { title: 'Transparencia', desc: 'Confianza con reglas claras, rendición y trazabilidad.' },
    { title: 'Innovación pública', desc: 'La tecnología transforma cuando se integra a procesos, personas y cultura.' },
    { title: 'Cuidado', desc: 'Mejora con sensibilidad, respeto por los equipos y mirada humana.' }
  ]

  const steps = [
    { n: '01', title: 'Diagnóstico', desc: 'Medimos la madurez institucional: gobernanza, procesos, datos, cultura y atención.', dot: 'bg-magenta' },
    { n: '02', title: 'Diseño', desc: 'Definimos el modelo objetivo, reglas, roles y la ruta de mejora priorizada.', dot: 'bg-naranja' },
    { n: '03', title: 'Implementación', desc: 'Ponemos en marcha procesos, tableros y protocolos con los equipos.', dot: 'bg-magenta' },
    { n: '04', title: 'Transferencia', desc: 'Dejamos capacidades, documentación y activos que sobreviven al proyecto.', dot: 'bg-naranja' },
    { n: '05', title: 'Medición', desc: 'Indicadores y tableros para leer desempeño, demanda y experiencia.', dot: 'bg-magenta' },
    { n: '06', title: 'Mejora continua', desc: 'Rutinas de seguimiento que sostienen y profundizan los avances.', dot: 'bg-naranja' }
  ]

  const lineas = [
    { title: 'Desarrollo social y ciudadanía', desc: 'Promovemos capacidades para que las instituciones estén más cerca de las personas y respondan mejor a sus necesidades.', tags: 'Participación · Atención ciudadana · Territorio · Formación de agentes', dot: 'bg-magenta' },
    { title: 'Políticas públicas e innovación', desc: 'Investigamos, diseñamos e implementamos herramientas para mejorar políticas, procesos y decisiones públicas.', tags: 'Arquitectura pública · Gobernanza · Servicios · Tableros · Interoperabilidad', dot: 'bg-naranja' },
    { title: 'Ambiente y ciudades inteligentes', desc: 'Acompañamos el diseño de políticas y herramientas que mejoren la gestión territorial, ambiental y urbana.', tags: 'Servicios urbanos · Datos territoriales · Gestión ambiental · Continuidad', dot: 'bg-[#B8A98F]' },
    { title: 'Formación y transferencia', desc: 'Convertimos conocimiento en capacidades sostenibles para equipos, organismos y comunidades.', tags: 'Academia · Capacitaciones · Certificación · Protocolos · Comunidades de práctica', dot: 'bg-magenta' }
  ]

  const cases = [
    { tag: 'Atención ciudadana', name: 'Transformación Integral de Atención Ciudadana', desc: 'Diagnóstico, rediseño de procesos, canales, tableros y transferencia de capacidades.', dot: 'bg-magenta', tagClass: 'bg-magenta/12 text-[#B3115F]' },
    { tag: 'Territorio', name: 'Programa Territorial de Cercanía Institucional', desc: 'Diseño de dispositivo territorial, circuitos operativos, nodos de atención y articulación de servicios.', dot: 'bg-naranja', tagClass: 'bg-[#FF9E19]/16 text-[#9A5B00]' },
    { tag: 'Servicios', name: 'Mejora Integral de Servicios y Experiencia Ciudadana', desc: 'Fortalecimiento institucional, capacitación, protocolos, medición y rediseño de experiencia.', dot: 'bg-magenta', tagClass: 'bg-magenta/12 text-[#B3115F]' },
    { tag: 'Formación', name: 'Sistema de Capacitación Pública y Transferencia', desc: 'Formación de equipos, diseño pedagógico, contenidos y medición de aprendizaje.', dot: 'bg-naranja', tagClass: 'bg-[#FF9E19]/16 text-[#9A5B00]' },
    { tag: 'Gobernanza', name: 'Modelo de Gobernanza Operativa y Tableros', desc: 'Indicadores, rutinas de seguimiento, tableros ejecutivos y toma de decisiones.', dot: 'bg-[#7C6E5F]', tagClass: 'bg-[#5C4F42]/10 text-[#5C4F42]' }
  ]

  return (
    <div className="bg-papel text-tierra font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FFFAF2]/90 backdrop-blur-md border-b border-arena">
        <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
              <line x1="4" y1="6" x2="16" y2="4" stroke="#ED1686" strokeWidth="1.4" />
              <line x1="16" y1="4" x2="13" y2="17" stroke="#FF9E19" strokeWidth="1.4" />
              <line x1="4" y1="6" x2="13" y2="17" stroke="#ED1686" strokeWidth="1.2" strokeOpacity="0.5" />
              <circle cx="4" cy="6" r="3" fill="#ED1686" />
              <circle cx="16" cy="4" r="2.4" fill="#FF9E19" />
              <circle cx="13" cy="17" r="2.2" fill="#2E2117" />
            </svg>
            <div className="leading-none">
              <div className="font-semibold text-sm">Fundación Red Social</div>
              <div className="font-sans text-[9px] tracking-widest text-[#5C4F42]/50 uppercase mt-0.5">
                Institución habilitada
              </div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#institucional" className="text-sm font-semibold text-[#5C4F42] hover:text-magenta transition-colors">Institucional</a>
            <a href="#metodo" className="text-sm font-semibold text-[#5C4F42] hover:text-magenta transition-colors">Método</a>
            <a href="#lineas" className="text-sm font-semibold text-[#5C4F42] hover:text-magenta transition-colors">Líneas</a>
            <a href="#casos" className="text-sm font-semibold text-[#5C4F42] hover:text-magenta transition-colors">Casos</a>
            <button
              onClick={() => setScreen('prelogin')}
              className="bg-frs-grad text-white font-sans text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer shadow-marca border-none hover:shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Portal Privado
            </button>
          </nav>
          <button
            onClick={() => setScreen('prelogin')}
            className="lg:hidden bg-frs-grad text-white font-sans text-xs font-bold px-5 py-2 rounded-lg cursor-pointer border-none"
          >
            Portal
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-umber text-papel py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(95%_75%_at_82%_-8%,rgba(237,22,134,0.32),transparent_56%),radial-gradient(80%_65%_at_-8%_112%,rgba(255,158,25,0.2),transparent_55%)]"></div>
        <NetworkCanvas />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-naranja uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-naranja animate-pulse" />
              Fundación habilitada · desde 2017
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.98] tracking-tight mb-6">
              Fortalecemos instituciones y ciudadanía.
            </h1>
            <p className="text-lg md:text-xl text-[#FFFAF2]/80 leading-relaxed max-w-2xl mb-10">
              Una organización de la sociedad civil que investiga, diseña, capacita e implementa herramientas para que gobiernos, organismos y comunidades resuelvan mejor los problemas públicos de su tiempo.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#institucional"
                className="bg-frs-grad text-white border-none font-semibold text-sm px-8 py-4 rounded-xl cursor-pointer shadow-marca hover:shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                Conocer la Fundación
              </a>
              <button
                onClick={() => setScreen('prelogin')}
                className="bg-[#FFFAF2]/5 text-papel border border-[#FFFAF2]/20 font-medium text-sm px-8 py-4 rounded-xl cursor-pointer hover:bg-[#FFFAF2]/10 transition-colors flex items-center gap-1.5"
              >
                Ingresar al Portal
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-[#FFFAF2]/14">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-papel leading-none">{s.value}</div>
                <div className="text-xs text-[#FFFAF2]/62 mt-2 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-papel border-b border-arena py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6 flex-wrap">
          <div className="font-sans text-[11px] font-bold tracking-widest text-[#A89A88] uppercase">
            Trabajamos con
          </div>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {partners.map((p, i) => (
              <span key={i} className="text-base font-bold text-[#8C7E6F] tracking-tight">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUCIONAL */}
      <section id="institucional" className="max-w-7xl mx-auto px-6 py-24 md:px-12">
        <div className="max-w-3xl mb-12">
          <div className="font-sans text-xs font-extrabold tracking-widest text-[#B3115F] uppercase mb-4">
            Institucional
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-5">
            Una fundación para fortalecer instituciones y ciudadanía
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#5C4F42]">
            Desde 2017 trabajamos para promover el desarrollo social, la participación ciudadana, la investigación aplicada en políticas públicas, el cuidado ambiental y la innovación institucional. Nuestros programas, diagnósticos y documentos técnicos son formas concretas de cumplir ese objeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {objeto.map((o, i) => (
            <div
              key={i}
              className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)] hover:border-magenta/20 transition-all hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EFE6D6] border border-[#E4D6BE] flex items-center justify-center mb-5">
                <span className={`w-2.5 h-2.5 rounded-full ${o.dot}`} />
              </div>
              <div className="text-base font-bold text-tierra mb-2 leading-tight tracking-tight">
                {o.title}
              </div>
              <div className="text-[13px] leading-relaxed text-[#7C6E5F]">
                {o.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVOLUCION */}
      <section id="historia" className="bg-[#EFE6D6] border-t border-b border-arena py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="font-sans text-xs font-extrabold tracking-widest text-[#B3115F] uppercase mb-4">
              Evolución 2017–2026
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-5">
              De la misión institucional a una plataforma de implementación
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#5C4F42]">
              En estos años pasamos de construir redes y aprendizajes a consolidar método, programas, academia, documentos técnicos y comunidad.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-naranja/40"></div>
            <div className="flex flex-col gap-5">
              {timeline.map((t, i) => (
                <div key={i} className="grid grid-cols-[24px_1fr] gap-6 items-start">
                  <div className={`relative z-10 w-2.5 h-2.5 rounded-full border-[3px] bg-[#EFE6D6] ${t.dot.includes('magenta') ? 'border-magenta' : t.dot.includes('naranja') ? 'border-naranja' : 'border-[#7C6E5F]'} mt-5`} />
                  <div className="flex gap-6 flex-wrap items-baseline bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
                    <div className="font-sans text-sm font-bold text-umber w-16 shrink-0">{t.year}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-[16px] font-bold text-tierra">{t.title}</span>
                        <span className={`inline-flex items-center gap-1.5 font-sans text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${t.stClass}`}>
                          {t.estado}
                        </span>
                      </div>
                      <div className="text-sm leading-relaxed text-[#5C4F42]">{t.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSITO & VALORES */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-umber text-papel rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_90%_at_100%_0%,rgba(237,22,134,0.28),transparent_60%)]"></div>
            <div className="relative">
              <div className="font-sans text-[11px] font-bold tracking-wider text-naranja uppercase mb-4">
                Propósito
              </div>
              <div className="text-lg leading-relaxed font-semibold">
                Fortalecer instituciones, comunidades y equipos para que resuelvan mejor los problemas públicos y sociales de su tiempo.
              </div>
            </div>
          </div>
          <div className="bg-white border border-arena rounded-2xl p-8 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <div className="font-sans text-[11px] font-bold tracking-wider text-magenta uppercase mb-4">
              Misión
            </div>
            <div className="text-sm leading-relaxed text-[#40342A]">
              Diseñar, investigar, capacitar e implementar herramientas de gestión, participación e innovación institucional que mejoren la capacidad de gobiernos, organizaciones y comunidades.
            </div>
          </div>
          <div className="bg-white border border-arena rounded-2xl p-8 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <div className="font-sans text-[11px] font-bold tracking-wider text-[#9A5B00] uppercase mb-4">
              Visión
            </div>
            <div className="text-sm leading-relaxed text-[#40342A]">
              Ser una fundación referente en desarrollo social, participación ciudadana, innovación pública y arquitectura institucional aplicada en Argentina y la región.
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {valores.map((v, i) => (
            <div key={i} className="bg-[#EFE6D6] border border-[#E4D6BE] rounded-2xl p-4">
              <div className="text-sm font-bold text-tierra mb-1 tracking-tight">{v.title}</div>
              <div className="text-[11.5px] leading-relaxed text-[#7C6E5F]">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="bg-[#EFE6D6] border-t border-b border-arena py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <div className="font-sans text-xs font-extrabold tracking-widest text-[#B3115F] uppercase mb-4">
              El método
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-5">
              API Humana, en seis movimientos
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#5C4F42]">
              No reemplazamos lo que existe: lo ordenamos y lo conectamos bajo reglas, roles y métricas comunes. De diagnóstico a mejora continua, con transferencia real en el medio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs font-bold text-magenta">{st.n}</span>
                  <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`} />
                </div>
                <div className="text-lg font-bold text-tierra mb-2 tracking-tight">{st.title}</div>
                <div className="text-sm leading-relaxed text-[#7C6E5F]">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINEAS */}
      <section id="lineas" className="bg-umber text-papel py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_88%_8%,rgba(237,22,134,0.26),transparent_55%)] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
          <div className="max-w-2xl mb-12">
            <div className="font-sans text-xs font-extrabold tracking-widest text-naranja uppercase mb-4">
              Líneas fundacionales
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              Del objeto social a la implementación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lineas.map((a, i) => (
              <div key={i} className="bg-[#FFFAF2]/5 border border-[#FFFAF2]/12 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-11 h-11 rounded-xl bg-[#FFFAF2]/5 border border-[#FFFAF2]/15 flex items-center justify-center">
                      <span className={`w-2.5 h-2.5 rounded-full ${a.dot}`} />
                    </span>
                    <div className="text-lg font-bold tracking-tight">{a.title}</div>
                  </div>
                  <div className="text-sm leading-relaxed text-[#FFFAF2]/70 mb-4">{a.desc}</div>
                </div>
                <div className="font-sans text-[11px] text-[#FFFAF2]/55 leading-relaxed pt-3 border-t border-[#FFFAF2]/10 mt-2">
                  {a.tags}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="max-w-7xl mx-auto px-6 py-24 md:px-12">
        <div className="max-w-3xl mb-12">
          <div className="font-sans text-xs font-extrabold tracking-widest text-[#B3115F] uppercase mb-4">
            Casos de implementación
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-5">
            Donde el método se vuelve capacidad instalada
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#5C4F42]">
            Experiencias en las que la metodología se convierte en procesos, herramientas, formación y resultados que quedan en los equipos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)] flex flex-col justify-between hover:border-magenta/20 transition-colors">
              <div>
                <div className={`inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-4 ${c.tagClass}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                  {c.tag}
                </div>
                <div className="text-lg font-bold text-tierra mb-2 leading-tight tracking-tight">
                  {c.name}
                </div>
                <div className="text-sm leading-relaxed text-[#7C6E5F]">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / CONTACTO */}
      <section className="relative overflow-hidden bg-umber text-papel py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(80%_110%_at_50%_0%,rgba(237,22,134,0.28),transparent_58%)] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <div className="font-sans text-xs font-extrabold tracking-widest text-naranja uppercase mb-4">
            Trabajemos juntos
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.04] tracking-tight mb-6">
            Construyamos capacidades que quedan
          </h2>
          <p className="text-base md:text-lg text-[#FFFAF2]/78 leading-relaxed max-w-2xl mx-auto mb-10">
            Desde 2017 trabajamos para que gobiernos, organizaciones y equipos respondan mejor a los problemas públicos de su tiempo. Empecemos por un diagnóstico de madurez institucional.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setScreen('madurez')}
              className="bg-frs-grad text-white border-none font-semibold text-sm px-8 py-4 rounded-xl cursor-pointer shadow-marca hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Realizar Diagnóstico Gratis
            </button>
            <button
              onClick={() => setScreen('prelogin')}
              className="bg-[#FFFAF2]/5 text-papel border border-[#FFFAF2]/20 font-medium text-sm px-8 py-4 rounded-xl cursor-pointer hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Sumate a la Red
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#241A12] text-papel py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between gap-10 flex-wrap pb-10 border-b border-[#FFFAF2]/10">
            <div className="max-w-xs">
              <div className="inline-flex bg-white rounded-xl p-2.5 mb-4">
                <span className="font-bold text-umber font-serif text-sm tracking-tight">Fundación Red Social</span>
              </div>
              <p className="text-xs text-[#FFFAF2]/60 leading-relaxed mb-4">
                Desde 2017, construimos capacidades sociales, ciudadanas e institucionales que quedan.
              </p>
            </div>
            
            <div className="flex gap-12 flex-wrap">
              <div>
                <div className="font-sans text-[10.5px] font-bold tracking-widest text-naranja uppercase mb-4">Fundación</div>
                <div className="flex flex-col gap-2.5 text-xs text-[#FFFAF2]/72">
                  <a href="#institucional" className="hover:text-[#FFFAF2] transition-colors">Institucional</a>
                  <a href="#historia" className="hover:text-[#FFFAF2] transition-colors">Historia</a>
                </div>
              </div>
              <div>
                <div className="font-sans text-[10.5px] font-bold tracking-widest text-naranja uppercase mb-4">Trabajo</div>
                <div className="flex flex-col gap-2.5 text-xs text-[#FFFAF2]/72">
                  <a href="#metodo" className="hover:text-[#FFFAF2] transition-colors">Método</a>
                  <a href="#casos" className="hover:text-[#FFFAF2] transition-colors">Casos</a>
                </div>
              </div>
              <div>
                <div className="font-sans text-[10.5px] font-bold tracking-widest text-naranja uppercase mb-4">Participar</div>
                <div className="flex flex-col gap-2.5 text-xs text-[#FFFAF2]/72">
                  <button onClick={() => setScreen('prelogin')} className="bg-transparent border-none text-left font-sans text-xs text-[#FFFAF2]/72 hover:text-[#FFFAF2] cursor-pointer p-0">
                    Portal Privado
                  </button>
                  <button onClick={() => setScreen('madurez')} className="bg-transparent border-none text-left font-sans text-xs text-[#FFFAF2]/72 hover:text-[#FFFAF2] cursor-pointer p-0">
                    Evaluar mi Organización
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6 flex justify-between gap-4 flex-wrap font-sans text-xs text-[#FFFAF2]/40">
            <span>© 2026 Fundación Red Social · Habilitada por IGJ desde 2017</span>
            <span>Método API Humana · Argentina</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
