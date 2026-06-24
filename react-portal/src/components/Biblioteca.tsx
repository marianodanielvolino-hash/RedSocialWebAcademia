import { useState } from 'react'
import { Download, BookOpen } from 'lucide-react'

interface Document {
  code: string
  title: string
  cat: string
  state: 'Publicado' | 'Actualizado' | 'En revisión' | 'Nuevo'
  date: string
  sum: string
}

export default function Biblioteca() {
  const [selectedCat, setSelectedCat] = useState('Todos')

  const dtDocs: Document[] = [
    { code: 'DT-01', title: 'Arquitectura Pública Integrada', cat: 'Arquitectura', state: 'Publicado', date: '2025', sum: 'Marco base para ordenar sistemas, áreas, roles y decisiones institucionales.' },
    { code: 'DT-02', title: 'Gobernanza y Cultura de Ejecución', cat: 'Gobernanza', state: 'Publicado', date: '2025', sum: 'Guía para pasar de decisiones dispersas a rutinas operativas sostenibles.' },
    { code: 'DT-03', title: 'Interoperabilidad Institucional', cat: 'Datos', state: 'Actualizado', date: '2026', sum: 'Criterios para conectar procesos y datos sin reemplazar todo el ecosistema.' },
    { code: 'DT-04', title: 'Sistema de Métricas Públicas', cat: 'Datos', state: 'Publicado', date: '2025', sum: 'Indicadores, tableros y reglas de lectura para gestión orientada a resultados.' },
    { code: 'DT-05', title: 'Atención Ciudadana como Sistema', cat: 'Atención', state: 'Publicado', date: '2025', sum: 'Modelo para integrar canales, protocolos, experiencia y trazabilidad.' },
    { code: 'DT-06', title: 'Gobernanza y Continuidad Institucional', cat: 'Gobernanza', state: 'Publicado', date: '2025', sum: 'Cómo dejar capacidades, activos transferidos y rutinas que sobreviven al proyecto.' },
    { code: 'DT-07', title: 'Diseño de Servicios y Journey Ciudadano', cat: 'Servicios', state: 'Actualizado', date: '2026', sum: 'Herramientas para mapear experiencia, dolores, momentos críticos y oportunidades.' },
    { code: 'DT-08', title: 'Protocolos Omnicanales y Derivación', cat: 'Atención', state: 'Publicado', date: '2025', sum: 'Estándares para coordinar atención presencial, telefónica, digital, bot y backoffice.' },
    { code: 'DT-09', title: 'Base de Conocimiento para Atención', cat: 'Atención', state: 'En revisión', date: '2026', sum: 'Modelo para curar contenidos, versionar respuestas y sostener criterios comunes.' },
    { code: 'DT-10', title: 'Tableros de Gestión, Calidad y Experiencia', cat: 'Datos', state: 'Publicado', date: '2025', sum: 'Matriz mínima de indicadores para seguimiento ejecutivo y mejora operativa continua.' },
    { code: 'DT-11', title: 'Nodos Territoriales y Presencia del Estado', cat: 'Territorio', state: 'Publicado', date: '2025', sum: 'Diseño de circuitos, cobertura, roles y activos para dispositivos territoriales.' },
    { code: 'DT-12', title: 'Capacitación Pública y Cambio Cultural', cat: 'Formación', state: 'Nuevo', date: '2026', sum: 'Cómo convertir formación en mejora observable de prácticas, criterios y desempeño.' },
    { code: 'DT-13', title: 'Continuidad Operativa ante Crisis', cat: 'Gobernanza', state: 'Nuevo', date: '2026', sum: 'Modelo de respuesta institucional ante emergencias, contingencias y saturación de demanda.' },
    { code: 'DT-14', title: 'Academia Pública Digital / LMS', cat: 'Formación', state: 'Nuevo', date: '2026', sum: 'Arquitectura funcional para cursos, materiales, usuarios, evaluación y reportes.' }
  ]

  const categories = ['Todos', 'Arquitectura', 'Gobernanza', 'Datos', 'Atención', 'Servicios', 'Territorio', 'Formación']

  const getStateStyles = (state: string) => {
    switch (state) {
      case 'Nuevo':
        return { bg: 'bg-[#FF9E19]/16', text: 'text-[#9A5B00]', dot: 'bg-naranja' }
      case 'Actualizado':
        return { bg: 'bg-magenta/12', text: 'text-[#B3115F]', dot: 'bg-magenta' }
      case 'En revisión':
        return { bg: 'bg-[#5C4F42]/6', text: 'text-[#8C7E6F]', dot: 'bg-[#B8A98F]' }
      default:
        return { bg: 'bg-[#5C4F42]/7', text: 'text-[#5C4F42]', dot: 'bg-[#7C6E5F]' }
    }
  }

  const filteredDocs = selectedCat === 'Todos' 
    ? dtDocs 
    : dtDocs.filter(d => d.cat === selectedCat)

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight mb-2 text-tierra">Biblioteca técnica</h2>
          <p className="text-[14.5px] text-[#7C6E5F] leading-relaxed">
            Documentos técnicos curados: cada ficha tiene código, categoría, estado, resumen y acciones. No es una simple carpeta de PDFs, es la base de la autoridad institucional.
          </p>
        </div>
        <div className="font-sans text-xs font-semibold text-[#8C7E6F] bg-white border border-arena rounded-lg px-4 py-2.5 shadow-[0_4px_10px_rgba(33,4,30,0.02)]">
          {dtDocs.length} documentos DT
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 flex-wrap pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`font-sans text-xs px-4 py-2 rounded-full border cursor-pointer transition-colors ${
              selectedCat === cat
                ? 'bg-umber text-papel border-umber'
                : 'bg-white text-[#5C4F42] border-[#E9DECF] hover:border-magenta/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Documents List */}
      <div className="flex flex-col gap-3">
        {filteredDocs.map((d, i) => {
          const style = getStateStyles(d.state)
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-arena rounded-2xl p-5 shadow-[0_4px_12px_rgba(33,4,30,0.03)] hover:border-magenta/20 transition-colors"
            >
              {/* Document Code */}
              <div className="font-sans text-sm font-bold text-umber w-16 shrink-0">
                {d.code}
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                  <span className="text-[15.5px] font-semibold text-tierra">{d.title}</span>
                  <span className={`inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-wider uppercase ${style.bg} ${style.text} px-2.5 py-0.5 rounded-full`}>
                    <span className={`w-1 h-1 rounded-full ${style.dot}`} />
                    {d.state}
                  </span>
                </div>
                <div className="text-[13px] text-[#7C6E5F] leading-relaxed">{d.sum}</div>
              </div>

              {/* Meta & Actions */}
              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <div className="font-sans text-xs text-[#A89A88]">
                  {d.cat} · {d.date}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert(`Visualizando ficha de ${d.code} - ${d.title}`)}
                    className="bg-[#EFE6D6] border border-[#E4D6BE] text-[#5C4F42] font-sans text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#EFE6D6]/60 transition-colors flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Ficha
                  </button>
                  <button
                    onClick={() => alert(`Descargando documento ${d.code}...`)}
                    className="bg-magenta/10 border border-magenta/20 text-[#B3115F] font-sans text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-magenta/15 transition-colors flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Descargar
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
