import { useStore } from '../store/useStore'

interface Course {
  title: string
  desc: string
  level: string
  dur: string
  mode: string
  state: 'En curso' | 'Disponible' | 'Completado' | 'Nuevo'
  pct: string
}

export default function Academia() {
  const { setScreen } = useStore()

  const courses: Course[] = [
    { title: 'Mejora Integral de Atención Ciudadana', desc: 'Gobernanza, modelo omnicanal, protocolos, medición y mejora de la experiencia ciudadana.', level: 'Avanzado', dur: '8 h', mode: 'Online', state: 'En curso', pct: '62%' },
    { title: 'PMO y coordinación institucional', desc: 'Rutinas, roles, tableros, seguimiento y toma de decisiones para proyectos complejos.', level: 'Avanzado', dur: '5 h', mode: 'Online', state: 'En curso', pct: '28%' },
    { title: 'Modelo omnicanal integrado', desc: 'Ordenamiento de presencialidad, teléfono, web, bot, turnos, formularios y backoffice.', level: 'Intermedio', dur: '4 h', mode: 'Online', state: 'Disponible', pct: '0%' },
    { title: 'Protocolos y base de conocimiento', desc: 'Guías de atención, derivación, accesibilidad, respuestas frecuentes y estándares de calidad.', level: 'Básico', dur: '3 h', mode: 'Online', state: 'Completado', pct: '100%' },
    { title: 'Indicadores, tableros y calidad', desc: 'Sistema de métricas para medir tiempos, satisfacción, resolución, demanda y desempeño.', level: 'Intermedio', dur: '5 h', mode: 'Online', state: 'Disponible', pct: '0%' },
    { title: 'Comunicación y cambio cultural', desc: 'Mensajes, adopción, liderazgo operativo y acompañamiento para sostener nuevas prácticas.', level: 'Intermedio', dur: '4 h', mode: 'Mixto', state: 'Nuevo', pct: '0%' }
  ]

  const getStateStyles = (state: string) => {
    switch (state) {
      case 'Disponible':
      case 'Nuevo':
        return { bg: 'bg-[#FF9E19]/16', text: 'text-[#9A5B00]', dot: 'bg-naranja' }
      case 'En curso':
        return { bg: 'bg-magenta/12', text: 'text-[#B3115F]', dot: 'bg-magenta' }
      case 'Completado':
        return { bg: 'bg-[#1F6E4A]/14', text: 'text-[#1F6E4A]', dot: 'bg-[#28A06B]' }
      default:
        return { bg: 'bg-[#5C4F42]/10', text: 'text-[#5C4F42]', dot: 'bg-[#7C6E5F]' }
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight mb-2 text-tierra">Academia Red Social</h2>
          <p className="text-[14.5px] text-[#7C6E5F] leading-relaxed">
            Trayectos de formación para agentes y equipos: cada curso se organiza en módulos, lecciones, materiales, quizzes y certificado.
          </p>
        </div>
        <div className="font-sans text-xs font-semibold text-[#8C7E6F] bg-white border border-arena rounded-lg px-4 py-2.5 shadow-[0_4px_10px_rgba(33,4,30,0.02)]">
          6 cursos · 3 niveles
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => {
          const style = getStateStyles(c.state)
          return (
            <div
              key={i}
              className="flex flex-col bg-white border border-arena rounded-2xl overflow-hidden shadow-[0_6px_18px_rgba(33,4,30,0.04)]"
            >
              {/* Header Box */}
              <div className="relative h-24 bg-gradient-to-br from-[#2E0A2A] to-umber overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_85%_0%,rgba(237,22,134,0.4),transparent_60%)] pointer-events-none"></div>
                <div className={`absolute top-3 left-3.5 inline-flex items-center gap-1.5 font-sans text-[10.5px] font-bold tracking-wider uppercase ${style.bg} ${style.text} px-3 py-1 rounded-full backdrop-blur-sm`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {c.state}
                </div>
                <div className="absolute bottom-3 right-3.5 font-sans text-xs text-[#FFFAF2]/70 font-semibold">
                  {c.pct}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1.5 font-sans text-[10.5px] text-[#A89A88] tracking-wider uppercase mb-2">
                    <span>{c.level}</span>
                    <span>·</span>
                    <span>{c.dur}</span>
                    <span>·</span>
                    <span>{c.mode}</span>
                  </div>
                  <h3 className="text-lg font-bold text-tierra mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#7C6E5F] leading-relaxed mb-4">
                    {c.desc}
                  </p>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div className="h-1.5 bg-[#F0E7DA] rounded-full overflow-hidden mb-4">
                    <div
                      style={{ width: c.pct }}
                      className="h-full bg-frs-grad rounded-full"
                    ></div>
                  </div>

                  <button
                    onClick={() => setScreen('leccion')}
                    className="w-full bg-frs-grad text-white border-none font-sans text-sm font-bold py-3 rounded-xl cursor-pointer hover:shadow-md transition-shadow"
                  >
                    {c.state === 'Completado' ? 'Repasar curso' : 'Continuar curso'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
