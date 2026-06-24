import { useState } from 'react'
import { useStore } from '../store/useStore'
import { ArrowLeft, Play, CheckCircle2, FileDown, Check } from 'lucide-react'

export default function Leccion() {
  const { setScreen } = useStore()
  const [selectedQuizOpt, setSelectedQuizOpt] = useState<string | null>(null)
  const [quizAnswered, setQuizAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const lessons = [
    { n: '1.1', title: 'Marco de atención ciudadana', st: 'done' },
    { n: '1.2', title: 'Gobernanza del servicio', st: 'done' },
    { n: '2.1', title: 'Mapa de canales', st: 'done' },
    { n: '3.1', title: 'Diseño del journey', st: 'done' },
    { n: '4.1', title: 'Diseño del modelo omnicanal', st: 'current' },
    { n: '4.2', title: 'Reglas de derivación responsable', st: 'next' },
    { n: '5.1', title: 'Tablero de indicadores', st: 'next' },
    { n: '6.1', title: 'Cierre y certificación', st: 'locked' }
  ]

  const quizOptions = [
    { k: 'A', t: 'Reemplazar todos los canales existentes por un único canal digital.' },
    { k: 'B', t: 'Ordenar y conectar los canales existentes bajo reglas y criterios comunes.' },
    { k: 'C', t: 'Atender exclusivamente por turnos presenciales programados.' },
    { k: 'D', t: 'Derivar toda consulta directamente al backoffice.' }
  ]

  const handleQuizSubmit = () => {
    if (!selectedQuizOpt) {
      alert('Por favor selecciona una opción.')
      return
    }
    setQuizAnswered(true)
    if (selectedQuizOpt === 'B') {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  const getMarkStyles = (st: string) => {
    switch (st) {
      case 'done':
        return { border: 'border-[#28A06B]', bg: 'bg-[#28A06B]' }
      case 'current':
        return { border: 'border-magenta', bg: 'bg-magenta' }
      case 'locked':
        return { border: 'border-[#D8C9B4]', bg: 'bg-transparent' }
      default:
        return { border: 'border-[#C6B6C0]', bg: 'bg-transparent' }
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <button
        onClick={() => setScreen('academia')}
        className="self-start bg-transparent border-none text-[#B3115F] font-semibold text-xs cursor-pointer flex items-center gap-1.5 hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a Academia
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Lesson Index */}
        <div className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)] sticky top-24">
          <div className="text-[15px] font-bold text-tierra mb-1 leading-snug">
            Mejora Integral de Atención Ciudadana
          </div>
          <div className="font-sans text-xs text-[#8C7E6F] mb-4">6 módulos · 8 h · Avanzado</div>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-1.5 bg-[#F0E7DA] rounded-full overflow-hidden">
              <div style={{ width: '62%' }} className="h-full bg-frs-grad rounded-full"></div>
            </div>
            <span className="font-sans text-xs font-semibold text-[#5C4F42]">62%</span>
          </div>

          <div className="flex flex-col gap-1">
            {lessons.map((l, idx) => {
              const isActive = l.st === 'current'
              const mark = getMarkStyles(l.st)
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${
                    isActive ? 'bg-magenta/12' : 'hover:bg-[#EFE6D6]/30'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 ${mark.border} ${mark.bg} flex-shrink-0 flex items-center justify-center`}
                  >
                    {l.st === 'done' && <Check className="w-2 h-2 text-white stroke-[3px]" />}
                  </span>
                  <span className="font-sans text-xs text-[#A89A88] w-6 shrink-0">{l.n}</span>
                  <span
                    className={`text-[13px] leading-tight ${
                      l.st === 'locked'
                        ? 'text-[#B8A98F]'
                        : isActive
                        ? 'text-tierra font-bold'
                        : 'text-[#40342A]'
                    }`}
                  >
                    {l.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Mock Video Player */}
          <div className="relative bg-umber rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_50%,rgba(237,22,134,0.28),transparent_60%)] pointer-events-none"></div>
            <div className="relative flex flex-col items-center gap-4 z-10">
              <button className="w-16 h-16 rounded-full bg-frs-grad border-none cursor-pointer flex items-center justify-center shadow-marca hover:scale-105 active:scale-95 transition-transform">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </button>
              <div className="font-sans text-xs tracking-widest text-[#FFFAF2]/60 uppercase font-semibold">
                Lección 4.1 · 14:20 min
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <h2 className="text-xl font-bold text-tierra">Diseño del modelo omnicanal</h2>
              <button className="bg-[#28A06B]/12 text-[#1F6E4A] border border-[#28A06B]/30 font-sans text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer flex items-center gap-1.5 hover:bg-[#28A06B]/20 transition-colors">
                <CheckCircle2 className="w-4 h-4" /> Marcar completado
              </button>
            </div>
            <p className="text-sm leading-relaxed text-[#5C4F42] mb-6">
              Cómo ordenar presencialidad, teléfono, web, bot, turnos, formularios y backoffice bajo un mismo modelo de servicio. El objetivo no es reemplazar canales, sino integrarlos bajo reglas, roles y métricas comunes para una atención trazable.
            </p>

            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-[#EFE6D6] border border-[#E4D6BE] rounded-xl px-4 py-2.5 cursor-pointer hover:border-magenta/30 transition-colors">
                <span className="font-sans text-[10px] font-bold text-[#B3115F] bg-[#ED1686]/12 px-1.5 py-0.5 rounded">
                  PDF
                </span>
                <span className="text-[13px] text-[#40342A] font-semibold">Modelo omnicanal · plantilla</span>
                <FileDown className="w-3.5 h-3.5 text-[#8C7E6F]" />
              </div>
              <div className="flex items-center gap-2 bg-[#EFE6D6] border border-[#E4D6BE] rounded-xl px-4 py-2.5 cursor-pointer hover:border-magenta/30 transition-colors">
                <span className="font-sans text-[10px] font-bold text-[#9A5B00] bg-[#FF9E19]/16 px-1.5 py-0.5 rounded">
                  XLS
                </span>
                <span className="text-[13px] text-[#40342A] font-semibold">Matriz de derivación</span>
                <FileDown className="w-3.5 h-3.5 text-[#8C7E6F]" />
              </div>
            </div>
          </div>

          {/* Interactive Quiz Component */}
          <div className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <div className="font-sans text-[11px] font-bold tracking-widest text-[#B3115F] uppercase mb-2">
              Quiz · Pregunta 1 de 3
            </div>
            <h3 className="text-base font-bold text-tierra mb-5 leading-normal">
              ¿Qué significa diseñar un modelo omnicanal según el método API Humana?
            </h3>

            <div className="flex flex-col gap-2.5">
              {quizOptions.map((q) => {
                const isSelected = selectedQuizOpt === q.k
                return (
                  <div
                    key={q.k}
                    onClick={() => {
                      if (!quizAnswered) {
                        setSelectedQuizOpt(q.k)
                      }
                    }}
                    className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-magenta bg-magenta/5 scale-[1.01]'
                        : 'border-[#E9DECF] hover:border-magenta/30'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-[#EFE6D6] border border-[#E4D6BE] flex items-center justify-center font-sans text-xs font-bold text-[#5C4F42] shrink-0">
                      {q.k}
                    </span>
                    <span className="text-sm text-[#40342A] leading-relaxed">{q.t}</span>
                  </div>
                )
              })}
            </div>

            {!quizAnswered ? (
              <button
                onClick={handleQuizSubmit}
                className="mt-5 bg-frs-grad text-white border-none font-sans text-sm font-bold px-6 py-3 rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-shadow"
              >
                Responder
              </button>
            ) : (
              <div className="mt-5 p-4 rounded-xl border leading-relaxed text-sm">
                {isCorrect ? (
                  <div className="text-[#1F6E4A] bg-[#28A06B]/12 border-[#28A06B]/30 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> ¡Correcto! Esa es la opción recomendada.
                  </div>
                ) : (
                  <div className="text-red-700 bg-red-50 border-red-200 flex flex-col gap-1.5">
                    <div className="font-bold flex items-center gap-2">
                      <span>Incorrecto.</span>
                    </div>
                    <p className="text-xs text-red-600">
                      La respuesta correcta era la B. El método API Humana busca ordenar y conectar los canales existentes bajo reglas comunes, no reemplazarlos ni centralizar todo en bot.
                    </p>
                    <button
                      onClick={() => {
                        setQuizAnswered(false)
                        setSelectedQuizOpt(null)
                        setIsCorrect(null)
                      }}
                      className="mt-2 text-xs font-bold text-magenta bg-transparent border-none cursor-pointer self-start hover:underline"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
