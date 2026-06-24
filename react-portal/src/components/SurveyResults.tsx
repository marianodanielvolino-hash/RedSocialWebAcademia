import { useStore } from '../store/useStore'
import { DIMS_DEF } from './Survey'
import { jsPDF } from 'jspdf'
import { Download, RefreshCw, Send, ArrowRight } from 'lucide-react'

export default function SurveyResults() {
  const { answers, resetSurvey, setScreen } = useStore()

  // Calculations
  let totalPoints = 0
  let answeredCount = 0
  DIMS_DEF.forEach((d) => {
    totalPoints += d.qs.length * 4 // Max points is 20 * 4 = 80
  })

  let userPoints = 0
  Object.keys(answers).forEach((k) => {
    const val = answers[Number(k)]
    if (val !== undefined) {
      answeredCount++
      userPoints += val
    }
  })

  const totalPct = Math.round((userPoints / 80) * 100)

  // Dimensions score breakdown
  const dimScores = DIMS_DEF.map((d, di) => {
    let s = 0
    for (let k = 0; k < 4; k++) {
      s += answers[di * 4 + k] || 0
    }
    const pct = Math.round((s / 16) * 100)
    return { name: d.name, pct }
  })

  // Sort dimensions to identify priorities
  const sortedDims = [...dimScores].sort((a, b) => a.pct - b.pct)
  const criticas = sortedDims.slice(0, 2)
  const focos = criticas.map((c) => `Fortalecer ${c.name.charAt(0).toLowerCase()}${c.name.slice(1)}.`)

  const getLevelInfo = (p: number) => {
    if (p <= 25) {
      return {
        n: '1',
        name: 'Inicial',
        desc: 'La organización tiene capacidades dispersas, procesos poco documentados y bajo uso de información para decidir.',
        ruta: 'Ruta Base de Madurez Institucional',
        accion: 'Conviene ordenar prioridades, responsables, procesos básicos y criterios comunes antes de avanzar a soluciones complejas.'
      }
    }
    if (p <= 50) {
      return {
        n: '2',
        name: 'En organización',
        desc: 'Existen avances parciales, pero todavía falta integrar procesos, roles, datos y rutinas de seguimiento.',
        ruta: 'Ruta Base de Madurez Institucional',
        accion: 'La organización está en condiciones de iniciar una ruta de fortalecimiento institucional.'
      }
    }
    if (p <= 75) {
      return {
        n: '3',
        name: 'En integración',
        desc: 'Hay prácticas, herramientas y equipos activos, pero falta mejorar integración, trazabilidad y medición.',
        ruta: 'Ruta de Implementación y Transferencia',
        accion: 'Corresponde avanzar hacia programas específicos, tableros, protocolos y transferencia de capacidades.'
      }
    }
    return {
      n: '4',
      name: 'Avanzado',
      desc: 'Capacidades consolidadas y uso de información para decidir: lista para innovación, escalamiento o alianzas.',
      ruta: 'Ruta de Innovación Institucional Avanzada',
      accion: 'Corresponde explorar alianzas, programas avanzados, producción técnica o implementación territorial.'
    }
  }

  const level = getLevelInfo(totalPct)

  const handleDownloadPDF = () => {
    const doc = new jsPDF()

    // Title
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(46, 33, 23) // #2E2117
    doc.text('Fundacion Red Social', 20, 25)

    doc.setFontSize(14)
    doc.setTextColor(237, 22, 134) // #ED1686
    doc.text('Reporte de Diagnostico de Madurez Institucional', 20, 32)

    doc.setLineWidth(0.5)
    doc.setDrawColor(228, 216, 196) // #E4D8C4
    doc.line(20, 38, 190, 38)

    // Result section
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.setTextColor(46, 33, 23)
    doc.text(`Puntaje de Madurez: ${totalPct}%`, 20, 48)
    doc.text(`Nivel ${level.n}: ${level.name}`, 20, 55)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(92, 79, 66) // #5C4F42
    const descLines = doc.splitTextToSize(level.desc, 170)
    doc.text(descLines, 20, 62)

    // Ruta
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(46, 33, 23)
    doc.text('Ruta Sugerida:', 20, 85)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.text(level.ruta, 20, 92)
    const actionLines = doc.splitTextToSize(level.accion, 170)
    doc.text(actionLines, 20, 98)

    // Desglose
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.text('Desglose por Dimensiones:', 20, 120)

    let y = 130
    dimScores.forEach((d, idx) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(46, 33, 23)
      doc.text(`${idx + 1}. ${d.name}`, 20, y)

      doc.setFont('helvetica', 'normal')
      doc.text(`${d.pct}%`, 180, y)

      // Draw horizontal bar
      doc.setFillColor(240, 231, 218) // Background gray
      doc.rect(20, y + 2, 160, 3, 'F')
      doc.setFillColor(237, 22, 134) // Fill color pink
      doc.rect(20, y + 2, Math.round(160 * (d.pct / 100)), 3, 'F')

      y += 14
    })

    // Focos prioritarios
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(46, 33, 23)
    doc.text('Focos Prioritarios de Mejora:', 20, 210)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10.5)
    focos.forEach((f, idx) => {
      doc.text(`* ${f}`, 20, 218 + (idx * 6))
    })

    doc.save('Diagnostico_Madurez_RedSocial.pdf')
  }

  return (
    <div className="relative min-h-screen bg-umber text-papel overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(110%_70%_at_80%_-10%,rgba(237,22,134,0.24),transparent_58%)]"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-8 z-10 flex flex-col gap-6">
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
              Resultado de madurez
            </div>
          </div>
          <button
            onClick={resetSurvey}
            className="bg-transparent border-none text-[#FFFAF2]/55 font-medium text-xs tracking-wider cursor-pointer flex items-center gap-1.5 hover:text-papel transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Rehacer encuesta
          </button>
        </header>

        {/* Main Box */}
        <div className="bg-papel text-tierra rounded-3xl p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left side */}
            <div>
              <div className="text-[11.5px] font-extrabold tracking-widest text-[#B3115F] uppercase mb-4">
                Tu resultado
              </div>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-7xl font-bold tracking-tight text-umber leading-none">
                  {totalPct}
                </span>
                <span className="text-3xl font-bold text-umber">%</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4 mt-2">
                Nivel {level.n} · {level.name}
              </h2>
              <p className="text-[15px] leading-relaxed text-[#5C4F42]">
                {level.desc}
              </p>
            </div>

            {/* Right side recommended card */}
            <div className="bg-umber text-papel rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_90%_at_100%_0%,rgba(237,22,134,0.3),transparent_60%)]"></div>
              <div className="relative flex flex-col justify-between h-full z-10">
                <div>
                  <div className="font-sans text-[10.5px] tracking-wider text-naranja uppercase font-extrabold mb-3">
                    Ruta recomendada
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 leading-tight">
                    {level.ruta}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[#FFFAF2]/72 mb-6">
                    {level.accion}
                  </p>
                </div>
                <button
                  onClick={() => setScreen('dashboard')}
                  className="w-full bg-frs-grad text-white border-none font-semibold text-[15px] py-4 rounded-xl cursor-pointer shadow-marca flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
                >
                  Inscribirme al portal
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#EEE3D5] my-10"></div>

          {/* Scores details and focus points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Dimensions */}
            <div>
              <h3 className="text-lg font-bold mb-5">Dimensiones evaluadas</h3>
              <div className="flex flex-col gap-5">
                {dimScores.map((d, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5 text-sm font-medium">
                      <span>{d.name}</span>
                      <span className="font-bold text-xs text-[#5C4F42]">{d.pct}%</span>
                    </div>
                    <div className="h-2 bg-[#F0E7DA] rounded-full overflow-hidden">
                      <div
                        style={{ width: `${d.pct}%` }}
                        className="h-full bg-frs-grad rounded-full"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focos y Reporte */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold mb-5">Focos prioritarios</h3>
                <div className="flex flex-col gap-3">
                  {focos.map((f, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="w-2 h-2 rounded-full bg-magenta mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-[#40342A]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-6 border-t border-[#F2EADD] flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="flex-1 bg-white border border-[#E0D2BC] text-tierra font-semibold text-sm py-3.5 px-4 rounded-xl cursor-pointer hover:bg-[#EFE6D6] flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4 text-magenta" />
                  Descargar reporte PDF
                </button>
                <button
                  type="button"
                  onClick={() => alert('Te hemos enviado una copia a tu casilla de correo.')}
                  className="flex-1 bg-transparent text-[#B3115F] font-semibold text-sm py-3.5 px-4 rounded-xl cursor-pointer hover:bg-[#EFE6D6] flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Enviar por email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
