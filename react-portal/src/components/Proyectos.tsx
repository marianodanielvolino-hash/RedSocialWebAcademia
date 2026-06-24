import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function Proyectos() {
  const [activeOrg, setActiveOrg] = useState('Santa Fe')

  const projectPhases = [
    { n: '01', name: 'Diagnóstico', state: 'Completado', pct: '100%' },
    { n: '02', name: 'Diseño', state: 'Completado', pct: '100%' },
    { n: '03', name: 'Implementación', state: 'En curso', pct: '58%' },
    { n: '04', name: 'Transferencia', state: 'Pendiente', pct: '0%' },
    { n: '05', name: 'Medición', state: 'Pendiente', pct: '0%' },
    { n: '06', name: 'Mejora continua', state: 'Pendiente', pct: '0%' }
  ]

  const kanban = [
    { col: 'Por hacer', dot: 'bg-[#C6B6C0]', cards: [{ t: 'Manual de derivación v2', o: 'Lihuen B.' }, { t: 'Capacitación nodo Paraná', o: 'Victoria B.' }] },
    { col: 'En curso', dot: 'bg-magenta', cards: [{ t: 'Tablero de indicadores', o: 'Nicolás M.' }, { t: 'Protocolo omnicanal', o: 'Giuliano D.' }] },
    { col: 'En revisión', dot: 'bg-naranja', cards: [{ t: 'Mapa de procesos · backoffice', o: 'M. Belén S.' }] },
    { col: 'Completado', dot: 'bg-[#28A06B]', cards: [{ t: 'Diagnóstico de madurez', o: 'Mariano V.' }, { t: 'Roadmap fase 1', o: 'Abril M.' }, { t: 'Matriz de roles', o: 'Laura M.' }] }
  ]

  const getStateStyles = (state: string) => {
    switch (state) {
      case 'Completado':
        return { bg: 'bg-[#1F6E4A]/14', text: 'text-[#1F6E4A]', dot: 'bg-[#28A06B]' }
      case 'En curso':
        return { bg: 'bg-magenta/12', text: 'text-[#B3115F]', dot: 'bg-magenta' }
      default:
        return { bg: 'bg-[#5C4F42]/5', text: 'text-[#8C7E6F]', dot: 'bg-[#C6B6C0]' }
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Organisms Filter */}
      <div className="flex items-center gap-2 flex-wrap border-b border-[#EEE3D5] pb-4">
        {[
          { id: 'Santa Fe', label: 'Santa Fe · Atención Ciudadana' },
          { id: 'Entre Ríos', label: 'Entre Ríos · Modernización' },
          { id: 'Entre Ríos con Vos', label: 'Entre Ríos con Vos' }
        ].map((org) => (
          <button
            key={org.id}
            onClick={() => setActiveOrg(org.id)}
            className={`font-sans text-xs px-4 py-2.5 rounded-xl border cursor-pointer transition-colors ${
              activeOrg === org.id
                ? 'bg-umber text-papel border-umber'
                : 'bg-white text-[#5C4F42] border-[#E9DECF] hover:border-magenta/40'
            }`}
          >
            {org.label}
          </button>
        ))}
      </div>

      {/* Stats Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
          <div className="font-sans text-[11px] text-[#8C7E6F] uppercase mb-2">Estado general</div>
          <div className="text-base font-bold text-magenta">En implementación</div>
        </div>
        <div className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
          <div className="font-sans text-[11px] text-[#8C7E6F] uppercase mb-2">Próximo hito</div>
          <div className="text-sm font-bold text-tierra">Tablero v1 · 12 jul</div>
        </div>
        <div className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
          <div className="font-sans text-[11px] text-[#8C7E6F] uppercase mb-2">Avance</div>
          <div className="text-3xl font-bold text-umber">58%</div>
        </div>
        <div className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
          <div className="font-sans text-[11px] text-[#8C7E6F] uppercase mb-2">Riesgos</div>
          <div className="text-sm font-bold text-naranja">1 medio · 0 alto</div>
        </div>
      </div>

      {/* Phase status tracker */}
      <div className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
        <h3 className="text-lg font-bold text-tierra mb-5">Ruta del Proyecto</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {projectPhases.map((p, i) => {
            const style = getStateStyles(p.state)
            return (
              <div
                key={i}
                className="bg-[#EFE6D6]/40 border border-[#E4D6BE] rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-sans text-[11px] font-bold text-white bg-umber w-6 h-6 rounded-lg flex items-center justify-center">
                      {p.n}
                    </span>
                    <span className={`inline-flex items-center gap-1 font-sans text-[9px] font-bold tracking-wider uppercase ${style.bg} ${style.text} px-2 py-0.5 rounded-full`}>
                      <span className={`w-1 h-1 rounded-full ${style.dot}`} />
                      {p.state}
                    </span>
                  </div>
                  <div className="text-[13.5px] font-bold text-tierra leading-tight">{p.name}</div>
                </div>
                <div className="font-sans text-xs text-[#8C7E6F] mt-4 font-semibold">Avance: {p.pct}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Kanban Board */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-tierra">Tableros de tareas</h3>
          <button className="bg-transparent border-none font-sans text-xs font-bold text-[#B3115F] hover:underline cursor-pointer flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" /> Agregar columna
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {kanban.map((col, cIdx) => (
            <div key={cIdx} className="bg-[#EFE6D6]/50 border border-arena rounded-2xl p-4 flex flex-col gap-3 min-h-[300px]">
              <div className="flex items-center justify-between border-b border-[#E4D6BE] pb-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                  <span className="text-[13.5px] font-bold text-[#33281F]">{col.col}</span>
                </div>
                <span className="font-sans text-[10.5px] font-bold text-[#8C7E6F] bg-white border border-[#E0D2BC] w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {col.cards.length}
                </span>
              </div>

              {col.cards.map((card, cardIdx) => (
                <div
                  key={cardIdx}
                  className="bg-white border border-[#E4D8C4] rounded-xl p-4 shadow-[0_4px_10px_rgba(33,4,30,0.02)] hover:border-magenta/20 cursor-grab hover:shadow-sm transition-all"
                >
                  <div className="text-[13.5px] text-tierra font-semibold leading-relaxed mb-3">
                    {card.t}
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#8C7E6F]">
                    <span className="font-medium">Resp: {card.o}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
