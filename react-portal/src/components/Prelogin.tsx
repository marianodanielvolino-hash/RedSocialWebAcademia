import { useStore } from '../store/useStore'
import NetworkCanvas from './NetworkCanvas'
import { Shield, Sparkles } from 'lucide-react'

export default function Prelogin() {
  const { setScreen, resetSurvey } = useStore()

  const preBlocks = [
    { tag: '01 · Academia', color: 'text-magenta', title: 'Academia Red Social', desc: 'Cursos, módulos, videos, quizzes, certificados y seguimiento de avance.' },
    { tag: '02 · Biblioteca', color: 'text-naranja', title: 'Biblioteca técnica', desc: 'Documentos DT, guías, protocolos, glosarios, plantillas y versiones ampliadas.' },
    { tag: '03 · Proyectos', color: 'text-magenta', title: 'Proyectos activos', desc: 'Entregables, minutas, tableros, responsables, hitos y documentación por organismo.' },
    { tag: '04 · Diagnósticos', color: 'text-naranja', title: 'Diagnósticos', desc: 'Resultados de madurez, recomendaciones, reportes descargables y rutas de mejora.' }
  ]

  return (
    <div className="relative min-h-screen bg-umber text-papel overflow-hidden font-sans flex flex-col justify-between">
      {/* Background gradients and simulation canvas */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_80%_at_82%_-12%,rgba(237,22,134,0.28),transparent_58%),radial-gradient(100%_70%_at_-5%_112%,rgba(255,158,25,0.18),transparent_55%)]"></div>
      <NetworkCanvas />

      <div className="relative max-w-7xl mx-auto w-full px-6 py-8 md:px-12 flex-1 flex flex-col justify-between z-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
              <line x1="4" y1="6" x2="16" y2="4" stroke="#ED1686" strokeWidth="1.4" />
              <line x1="16" y1="4" x2="13" y2="17" stroke="#FF9E19" strokeWidth="1.4" />
              <line x1="4" y1="6" x2="13" y2="17" stroke="#ED1686" strokeWidth="1.2" strokeOpacity="0.5" />
              <circle cx="4" cy="6" r="3" fill="#ED1686" />
              <circle cx="16" cy="4" r="2.4" fill="#FF9E19" />
              <circle cx="13" cy="17" r="2.2" fill="#F7F1E7" />
            </svg>
            <div className="leading-none">
              <div className="font-semibold tracking-wide text-[15px]">Fundación Red Social</div>
              <div className="font-sans text-[10.5px] tracking-[0.18em] text-[#FFFAF2]/50 uppercase mt-0.5">Portal privado</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#FFFAF2]/55 uppercase border border-[#FFFAF2]/16 px-4 py-2 rounded-full">
            <Shield className="w-3.5 h-3.5" />
            Acceso reservado
          </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-3xl mt-20 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-naranja uppercase mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            API Humana · Transferencia institucional
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[0.98] tracking-tight mb-6">
            Portal Red Social
          </h1>
          <p className="text-lg md:text-xl text-[#FFFAF2]/78 leading-relaxed max-w-2xl mb-10">
            El espacio privado donde la mejora institucional se vuelve trabajo concreto. Cursos, documentos técnicos, diagnósticos, proyectos activos y activos de gobernanza para organismos, equipos implementadores y participantes de programas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={resetSurvey}
              className="bg-frs-grad text-white border-none font-semibold text-[15px] px-7 py-4 rounded-xl cursor-pointer shadow-marca transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Evaluar mi organización
            </button>
            <button
              onClick={() => setScreen('login')}
              className="bg-[#FFFAF2]/5 text-papel border border-[#FFFAF2]/20 font-medium text-[15px] px-7 py-4 rounded-xl cursor-pointer hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Ya tengo acceso al portal
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {preBlocks.map((b, i) => (
            <div
              key={i}
              className="bg-[#FFFAF2]/5 border border-[#FFFAF2]/10 rounded-2xl p-6 backdrop-blur-md transition-transform hover:-translate-y-1"
            >
              <div className={`text-[11px] font-extrabold tracking-wider ${b.color} uppercase mb-4`}>
                {b.tag}
              </div>
              <div className="text-lg font-semibold mb-2">{b.title}</div>
              <div className="text-[13.5px] leading-relaxed text-[#FFFAF2]/60">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Footer info text */}
        <div className="mt-12 text-xs leading-normal text-[#FFFAF2]/40 max-w-2xl">
          Acceso reservado a organismos implementadores, participantes de programas, aliados institucionales y equipo técnico autorizado.
        </div>
      </div>
    </div>
  )
}
