import { useStore } from '../store/useStore'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export const DIMS_DEF = [
  {
    name: 'Propósito y gobernanza',
    qs: [
      '¿La organización tiene prioridades institucionales claramente definidas?',
      '¿Existen responsables claros para cada proceso o línea de trabajo?',
      '¿Se toman decisiones con información compartida entre áreas?',
      '¿Hay reuniones o rutinas periódicas de seguimiento?'
    ]
  },
  {
    name: 'Procesos y servicios',
    qs: [
      '¿Los principales procesos están documentados?',
      '¿Los equipos saben cómo derivar, escalar o resolver casos?',
      '¿Existen criterios comunes para la atención o prestación de servicios?',
      '¿Se revisan periódicamente los procesos para mejorarlos?'
    ]
  },
  {
    name: 'Datos e indicadores',
    qs: [
      '¿La organización cuenta con indicadores de gestión?',
      '¿Los datos se usan para tomar decisiones?',
      '¿Existen tableros o reportes periódicos?',
      '¿Se mide satisfacción, calidad o experiencia?'
    ]
  },
  {
    name: 'Capacidades y cultura de ejecución',
    qs: [
      '¿Los equipos reciben capacitación vinculada a sus funciones?',
      '¿Existe una cultura de seguimiento de compromisos?',
      '¿Los equipos cuentan con herramientas para trabajar mejor?',
      '¿La organización sostiene los cambios una vez implementados?'
    ]
  },
  {
    name: 'Tecnología, canales y acceso',
    qs: [
      '¿La organización tiene canales claros de atención o comunicación?',
      '¿Las herramientas digitales están integradas con los procesos?',
      '¿Los usuarios acceden fácilmente a la información o servicios?',
      '¿La tecnología ayuda efectivamente a mejorar la gestión?'
    ]
  }
]

export default function Survey() {
  const { setScreen, answers, setAnswer } = useStore()

  // Calculate stats
  let totalQuestions = 0
  let answeredCount = 0
  DIMS_DEF.forEach((d) => {
    totalQuestions += d.qs.length
  })

  Object.keys(answers).forEach((k) => {
    if (answers[Number(k)] !== undefined) {
      answeredCount++
    }
  })

  const answeredPct = Math.round((answeredCount / totalQuestions) * 100)
  const isFinished = answeredCount === totalQuestions

  return (
    <div className="relative min-h-screen bg-umber text-papel overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(110%_70%_at_80%_-10%,rgba(237,22,134,0.22),transparent_58%)]"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-8 z-10 flex flex-col gap-6">
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
            <div className="font-sans text-xs font-semibold tracking-wider text-[#FFFAF2]/60 uppercase">
              Encuesta de Madurez
            </div>
          </div>
          <button
            onClick={() => setScreen('prelogin')}
            className="background-transparent border-none text-[#FFFAF2]/55 font-medium text-xs tracking-wider cursor-pointer flex items-center gap-1.5 hover:text-papel transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Salir
          </button>
        </header>

        {/* Survey Box */}
        <div className="bg-papel text-tierra rounded-3xl p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
          <div className="text-[11.5px] font-extrabold tracking-widest text-[#B3115F] uppercase mb-3">
            Encuesta de Madurez Institucional
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-[1.08] tracking-tight mb-3">
            ¿En qué nivel de madurez está tu organización?
          </h1>
          <p className="text-[15px] leading-relaxed text-[#5C4F42] max-w-2xl mb-8">
            Veinte preguntas en cinco dimensiones. Es la puerta de entrada al portal: define tu nivel, tus focos prioritarios y la ruta formativa recomendada.
          </p>

          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-2 bg-[#F0E7DA] rounded-full overflow-hidden">
              <div
                style={{ width: `${answeredPct}%` }}
                className="h-full bg-frs-grad rounded-full transition-all duration-300"
              ></div>
            </div>
            <div className="font-sans text-xs text-[#5C4F42] font-bold whitespace-nowrap">
              {answeredCount} / {totalQuestions} ({answeredPct}%)
            </div>
          </div>

          {/* Scale Legend */}
          <div className="flex gap-2 flex-wrap items-center bg-[#EFE6D6] border border-[#E4D6BE] rounded-xl px-4 py-3 mb-8">
            <span className="font-sans text-[11px] font-bold text-[#8C7E6F] mr-1.5 uppercase">Escala:</span>
            {[
              { val: 0, label: 'No existe' },
              { val: 1, label: 'Informal' },
              { val: 2, label: 'Parcial' },
              { val: 3, label: 'Se utiliza' },
              { val: 4, label: 'Se mide y mejora' }
            ].map((s, idx) => (
              <span key={s.val} className="font-sans text-[11px] text-[#5C4F42] flex items-center gap-1.5">
                <strong>{s.val}</strong> {s.label}
                {idx < 4 && <span className="text-[#D8C9B4] mx-1">·</span>}
              </span>
            ))}
          </div>

          {/* Questions List */}
          <div className="flex flex-col gap-10">
            {DIMS_DEF.map((g, gIdx) => (
              <div key={gIdx} className="border-t border-[#EEE5D9] pt-6 first:border-none first:pt-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-sans text-xs font-semibold text-white bg-umber w-8 h-8 rounded-lg flex items-center justify-center">
                    {String(gIdx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xl font-semibold tracking-tight">{g.name}</span>
                </div>

                <div className="flex flex-col gap-5">
                  {g.qs.map((q, qIdx) => {
                    const qId = gIdx * 4 + qIdx
                    const selectedVal = answers[qId]

                    return (
                      <div
                        key={qIdx}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F2EADD] pb-4 last:border-none"
                      >
                        <span className="text-[14.5px] text-[#40342A] leading-relaxed flex-1">
                          {q}
                        </span>
                        <div className="flex gap-2">
                          {[0, 1, 2, 3, 4].map((v) => {
                            const isSelected = selectedVal === v
                            return (
                              <button
                                key={v}
                                type="button"
                                onClick={() => setAnswer(qId, v)}
                                className={`w-10 h-10 rounded-lg border font-sans text-sm font-bold cursor-pointer transition-all ${
                                  isSelected
                                    ? 'bg-magenta text-white border-magenta shadow-md scale-105'
                                    : 'bg-[#EFE6D6] text-[#8C7E6F] border-[#E0D2BC] hover:border-[#B3115F] hover:text-[#B3115F]'
                                }`}
                              >
                                {v}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Survey Actions */}
          <div className="mt-10 pt-6 border-t border-[#E4D8C4] flex items-center justify-between gap-4 flex-wrap">
            <div className="font-sans text-xs text-[#A89A88]">
              {isFinished ? (
                <span className="text-[#1F6E4A] font-bold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> ¡Completado! Listo para ver resultados.
                </span>
              ) : (
                'Responde las 20 preguntas para ver tu resultado.'
              )}
            </div>
            <button
              onClick={() => {
                if (isFinished) {
                  setScreen('resultado')
                } else {
                  alert('Por favor responde todas las preguntas para ver tu resultado.')
                }
              }}
              disabled={!isFinished}
              className={`font-sans text-[15px] font-bold px-8 py-4 rounded-xl cursor-pointer shadow-md transition-all ${
                isFinished
                  ? 'bg-frs-grad text-white border-none hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-[#E4D8C4] text-[#8C7E6F] border-none cursor-not-allowed opacity-60'
              }`}
            >
              Ver mi resultado &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
