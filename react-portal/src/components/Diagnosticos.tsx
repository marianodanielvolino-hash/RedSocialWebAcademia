import { useStore } from '../store/useStore'
import { DIMS_DEF } from './Survey'
import { jsPDF } from 'jspdf'
import { Download, RefreshCw, FileText } from 'lucide-react'

export default function Diagnosticos() {
  const { answers, resetSurvey } = useStore()

  // Default values or user survey values
  const hasAnswers = Object.keys(answers).length >= 20
  
  // Calculate mock or real score
  const totalPct = hasAnswers 
    ? Math.round((Object.values(answers).reduce((acc, v) => acc + v, 0) / 80) * 100)
    : 74

  const diagDims = DIMS_DEF.map((d, di) => {
    let s = 0
    if (hasAnswers) {
      for (let k = 0; k < 4; k++) {
        s += answers[di * 4 + k] || 0
      }
    } else {
      // Mock values matching Portal Red Social.dc.html
      const mockScores = [68, 72, 61, 70, 80]
      return { name: d.name, pct: mockScores[di] }
    }
    const pct = Math.round((s / 16) * 100)
    return { name: d.name, pct }
  })

  const getLevelInfo = (p: number) => {
    if (p <= 25) {
      return { n: '1', name: 'Inicial', desc: 'La organización tiene capacidades dispersas, procesos poco documentados y bajo uso de información.', ruta: 'Ruta Base de Madurez', accion: 'Conviene ordenar prioridades, responsables y procesos básicos.' }
    }
    if (p <= 50) {
      return { n: '2', name: 'En organización', desc: 'Existen avances parciales, pero falta integrar procesos, roles, datos y rutinas.', ruta: 'Ruta Base de Madurez', accion: 'La organización está en condiciones de iniciar rutinas de fortalecimiento.' }
    }
    if (p <= 75) {
      return { n: '3', name: 'En integración', desc: 'Hay prácticas y herramientas activas, pero falta mejorar integración, trazabilidad y medición.', ruta: 'Ruta de Implementación y Transferencia', accion: 'Corresponde avanzar hacia programas específicos, tableros y protocolos.' }
    }
    return { n: '4', name: 'Avanzado', desc: 'Capacidades consolidadas y uso de información para decidir: lista para innovación o alianzas.', ruta: 'Ruta de Innovación Avanzada', accion: 'Corresponde explorar alianzas, programas avanzados y transferencia.' }
  }

  const level = getLevelInfo(totalPct)

  const handleDownloadPDF = () => {
    const doc = new jsPDF()

    // Title
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(46, 33, 23)
    doc.text('Fundacion Red Social', 20, 25)

    doc.setFontSize(14)
    doc.setTextColor(237, 22, 134)
    doc.text('Reporte de Diagnostico de Madurez Institucional', 20, 32)

    doc.setLineWidth(0.5)
    doc.setDrawColor(228, 216, 196)
    doc.line(20, 38, 190, 38)

    // Result
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.text(`Puntaje de Madurez: ${totalPct}%`, 20, 48)
    doc.text(`Nivel ${level.n}: ${level.name}`, 20, 55)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(92, 79, 66)
    const descLines = doc.splitTextToSize(level.desc, 170)
    doc.text(descLines, 20, 62)

    // Dimensions
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(46, 33, 23)
    doc.text('Desglose por Dimensiones:', 20, 85)

    let y = 95
    diagDims.forEach((d, idx) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.text(`${idx + 1}. ${d.name}`, 20, y)

      doc.setFont('helvetica', 'normal')
      doc.text(`${d.pct}%`, 180, y)

      doc.setFillColor(240, 231, 218)
      doc.rect(20, y + 2, 160, 3, 'F')
      doc.setFillColor(237, 22, 134)
      doc.rect(20, y + 2, Math.round(160 * (d.pct / 100)), 3, 'F')

      y += 14
    })

    doc.save('Reporte_Madurez_Portal.pdf')
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-bold text-tierra">Diagnóstico de Madurez Institucional</h2>
            <p className="text-sm text-[#7C6E5F] leading-relaxed mt-1">
              Resultados calculados basados en las encuestas de madurez de la organización.
            </p>
          </div>
          <button
            onClick={resetSurvey}
            className="bg-[#EFE6D6] border border-[#E4D6BE] text-tierra font-sans text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer hover:bg-[#EFE6D6]/60 transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Volver a diagnosticar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Circular/Text Score Widget */}
          <div className="bg-[#EFE6D6]/40 border border-[#E4D6BE] rounded-2xl p-6 text-center">
            <div className="font-sans text-[11px] font-bold text-[#8C7E6F] uppercase mb-2">Puntaje Global</div>
            <div className="text-6xl font-bold text-umber leading-none mb-2">{totalPct}%</div>
            <div className="font-bold text-sm text-magenta">Nivel {level.n} · {level.name}</div>
          </div>

          {/* Level Details */}
          <div className="md:col-span-2 flex flex-col justify-between h-full py-2">
            <p className="text-sm text-[#5C4F42] leading-relaxed mb-4">
              {level.desc}
            </p>
            <div className="bg-[#FFFAF2] border border-[#E9DECF] rounded-xl p-4">
              <div className="font-sans text-[10px] font-bold text-naranja uppercase mb-1">Ruta Sugerida</div>
              <div className="font-bold text-sm text-tierra mb-1">{level.ruta}</div>
              <div className="text-xs text-[#7C6E5F] leading-relaxed">{level.accion}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* Left Dimensions bars */}
        <div className="lg:col-span-3 bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
          <h3 className="text-lg font-bold text-tierra mb-5">Detalle por dimensiones</h3>
          <div className="flex flex-col gap-5">
            {diagDims.map((d, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1 text-sm font-medium">
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

        {/* Right download reports panel */}
        <div className="lg:col-span-2 bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)] flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-bold text-tierra mb-4">Reportes de diagnóstico</h3>
            <p className="text-xs text-[#7C6E5F] leading-relaxed mb-5">
              Generá y descargá el informe técnico completo en formato PDF para presentar a directivos y coordinadores de proyecto.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 border border-[#E9DECF] rounded-xl p-3.5 bg-[#FFFAF2]/50">
                <FileText className="w-8 h-8 text-magenta shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-[13.5px] font-bold text-tierra truncate">Reporte de madurez consolidado</div>
                  <div className="text-[10px] text-[#A89A88] mt-0.5">PDF · Generación en tiempo real</div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            className="mt-6 w-full bg-frs-grad text-white border-none font-sans text-sm font-bold py-3.5 rounded-xl cursor-pointer shadow-marca flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
          >
            <Download className="w-4 h-4" />
            Descargar Reporte Completo (PDF)
          </button>
        </div>
      </div>
    </div>
  )
}
