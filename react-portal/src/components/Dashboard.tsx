import { useStore } from '../store/useStore'
import { FileText, Layers, BarChart3, HelpCircle, ArrowRight } from 'lucide-react'

export default function Dashboard() {
  const { dashView, setDashView, userName, setScreen } = useStore()

  const kpis = [
    { label: 'Cursos activos', value: '2', meta: '+1 esta semana' },
    { label: 'Documentos nuevos', value: '4', meta: 'DT-12 a DT-14' },
    { label: 'Proyectos abiertos', value: '3', meta: '2 en implementación' },
    { label: 'Reportes de madurez', value: '1', meta: 'devolución diagnóstico' }
  ]

  const continueCourses = [
    { title: 'Mejora Integral de Atención Ciudadana', module: 'Módulo 4 · Modelo omnicanal', pct: '62%' },
    { title: 'PMO y coordinación institucional', module: 'Módulo 2 · Rutinas de gestión', pct: '28%' }
  ]

  const quickCards = [
    { tag: 'Biblioteca', color: 'text-[#B3115F]', title: 'Biblioteca técnica', desc: '14 documentos DT curados, fichas y descargas.', action: 'Explorar', icon: FileText, target: 'biblioteca' },
    { tag: 'Proyectos', color: 'text-[#9A5B00]', title: 'Proyectos activos', desc: 'Santa Fe · Entre Ríos · Entre Ríos con Vos.', action: 'Ver tableros', icon: Layers, target: 'proyectos' },
    { tag: 'Diagnósticos', color: 'text-[#B3115F]', title: 'Diagnósticos y reportes', desc: 'Madurez institucional y rutas de mejora.', action: 'Ver resultados', icon: BarChart3, target: 'diagnosticos' },
    { tag: 'Soporte', color: 'text-[#9A5B00]', title: 'Soporte y consultas', desc: 'Pedí una versión ampliada o una reunión.', action: 'Contactar', icon: HelpCircle, target: 'admin' }
  ]

  const activity = [
    { dotColor: 'bg-naranja', text: 'Nuevo documento publicado: DT-14 · Academia Pública Digital / LMS.', time: 'hace 2 h' },
    { dotColor: 'bg-magenta', text: 'Avanzaste al Módulo 4 en Mejora Integral de Atención Ciudadana.', time: 'ayer' },
    { dotColor: 'bg-[#28A06B]', text: 'Hito completado: Diagnóstico · Proyecto Santa Fe.', time: 'hace 2 días' },
    { dotColor: 'bg-[#7C6E5F]', text: 'Minuta cargada en Entre Ríos con Vos.', time: 'hace 3 días' },
    { dotColor: 'bg-magenta', text: 'Reporte de madurez disponible: 74% · Integración en desarrollo.', time: 'hace 4 días' }
  ]

  const projectsMini = [
    { name: 'Santa Fe · Atención Ciudadana', phase: 'Implementación', pct: '58%' },
    { name: 'Entre Ríos · Modernización', phase: 'Diseño', pct: '34%' },
    { name: 'Entre Ríos con Vos', phase: 'Implementación', pct: '71%' }
  ]

  const newDocs = [
    { code: 'DT-12', title: 'Capacitación pública y cambio cultural' },
    { code: 'DT-13', title: 'Continuidad operativa ante crisis' },
    { code: 'DT-14', title: 'Academia Pública Digital / LMS' }
  ]

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-umber rounded-3xl p-8 text-papel">
        <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_90%_0%,rgba(237,22,134,0.32),transparent_55%)] pointer-events-none"></div>
        <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 z-10">
          <div>
            <div className="font-sans text-[11px] font-bold tracking-wider text-naranja uppercase mb-2">
              Centro de control
            </div>
            <h2 className="text-3xl font-semibold tracking-tight mb-2">
              Hola, {userName}.
            </h2>
            <p className="text-[15px] text-[#FFFAF2]/74 max-w-lg leading-relaxed">
              Tenés 2 cursos activos, 4 documentos nuevos y 1 reporte pendiente de revisión.
            </p>
          </div>

          {/* Tab View Toggles */}
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 shrink-0">
            <button
              onClick={() => setDashView('a')}
              className={`border-none rounded-lg px-4 py-2 font-sans text-xs font-semibold cursor-pointer transition-colors ${
                dashView === 'a'
                  ? 'bg-papel text-umber'
                  : 'bg-transparent text-[#FFFAF2]/70 hover:text-white'
              }`}
            >
              Vista A
            </button>
            <button
              onClick={() => setDashView('b')}
              className={`border-none rounded-lg px-4 py-2 font-sans text-xs font-semibold cursor-pointer transition-colors ${
                dashView === 'b'
                  ? 'bg-papel text-umber'
                  : 'bg-transparent text-[#FFFAF2]/70 hover:text-white'
              }`}
            >
              Vista B
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k, i) => (
          <div key={i} className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <div className="font-sans text-[11px] font-bold tracking-wider text-[#8C7E6F] uppercase mb-3">
              {k.label}
            </div>
            <div className="text-3xl font-bold text-umber leading-none">{k.value}</div>
            <div className="text-xs text-magenta mt-2.5 font-medium">{k.meta}</div>
          </div>
        ))}
      </div>

      {/* Conditional Dashboard Views */}
      {dashView === 'a' ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Main content column (3/5 width) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Courses to continue */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-tierra">Continuar formación</h3>
                <button
                  onClick={() => setScreen('academia')}
                  className="bg-transparent border-none font-sans text-xs font-bold text-[#B3115F] hover:underline cursor-pointer flex items-center gap-1"
                >
                  Ver academia <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {continueCourses.map((c, i) => (
                  <div key={i} className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <div className="text-[16px] font-semibold text-tierra mb-1 leading-snug">{c.title}</div>
                        <div className="font-sans text-xs text-[#8C7E6F]">{c.module}</div>
                      </div>
                      <button
                        onClick={() => setScreen('leccion')}
                        className="bg-frs-grad text-white border-none font-sans text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer hover:shadow-md transition-shadow shrink-0"
                      >
                        Continuar
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-[#F0E7DA] rounded-full overflow-hidden">
                        <div
                          style={{ width: c.pct }}
                          className="h-full bg-frs-grad rounded-full"
                        ></div>
                      </div>
                      <div className="font-sans text-xs text-[#5C4F42] font-semibold">{c.pct}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-bold text-tierra mb-4">Accesos rápidos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickCards.map((q, i) => {
                  const Icon = q.icon
                  return (
                    <button
                      key={i}
                      onClick={() => setScreen(q.target as any)}
                      className="text-left bg-white border border-arena rounded-2xl p-5 cursor-pointer shadow-[0_6px_18px_rgba(33,4,30,0.04)] hover:border-magenta/30 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className={`font-sans text-[10px] font-bold tracking-wider uppercase ${q.color}`}>
                            {q.tag}
                          </span>
                          <Icon className="w-5 h-5 text-[#C6B6C0]" />
                        </div>
                        <div className="text-[15.5px] font-bold text-[#33281F] mb-1">{q.title}</div>
                        <div className="text-[13px] text-[#7C6E5F] leading-relaxed">{q.desc}</div>
                      </div>
                      <div className="font-sans text-xs font-bold text-[#B3115F] mt-4 flex items-center gap-1">
                        {q.action} <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right sidebar column (2/5 width) */}
          <div className="lg:col-span-2 bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <h3 className="text-lg font-bold text-tierra mb-4">Actividad reciente</h3>
            <div className="flex flex-col">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-[#F2EADD] last:border-none last:pb-0">
                  <span className={`w-2.5 h-2.5 rounded-full ${a.dotColor} mt-1.5 shrink-0`} />
                  <div>
                    <div className="text-[13.5px] leading-relaxed text-[#33281F]">{a.text}</div>
                    <div className="font-sans text-[11px] text-[#A89A88] mt-1">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Projects List (2/3 width) */}
          <div className="lg:col-span-2 bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-tierra">Proyectos activos</h3>
                <button
                  onClick={() => setScreen('proyectos')}
                  className="bg-transparent border-none font-sans text-xs font-bold text-[#B3115F] hover:underline cursor-pointer flex items-center gap-1"
                >
                  Ver tableros <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {projectsMini.map((p, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5 text-sm font-semibold">
                      <span>{p.name}</span>
                      <span className="font-sans text-[11px] text-[#5C4F42]">{p.phase} · {p.pct}</span>
                    </div>
                    <div className="h-2 bg-[#F0E7DA] rounded-full overflow-hidden">
                      <div
                        style={{ width: p.pct }}
                        className="h-full bg-frs-grad rounded-full"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F2EADD] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setScreen('leccion')}
                className="text-left bg-[#EFE6D6] border border-[#E4D6BE] rounded-2xl p-4 cursor-pointer hover:bg-[#EFE6D6]/60 transition-colors"
              >
                <div className="text-[14.5px] font-bold text-tierra mb-1">Continuar formación</div>
                <div className="text-[12.5px] text-[#7C6E5F]">Mejora Integral · Módulo 4</div>
              </button>
              <button
                onClick={() => setScreen('diagnosticos')}
                className="text-left bg-[#EFE6D6] border border-[#E4D6BE] rounded-2xl p-4 cursor-pointer hover:bg-[#EFE6D6]/60 transition-colors"
              >
                <div className="text-[14.5px] font-bold text-tierra mb-1">Reporte pendiente</div>
                <div className="text-[12.5px] text-[#7C6E5F]">Devolución de diagnóstico</div>
              </button>
            </div>
          </div>

          {/* Right widgets stack */}
          <div className="flex flex-col gap-6">
            {/* Maturity score summary */}
            <div className="bg-umber text-papel rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_100%_0%,rgba(237,22,134,0.3),transparent_60%)] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="font-sans text-[10.5px] font-bold tracking-wider text-naranja uppercase mb-4">
                  Madurez institucional
                </div>
                <div className="text-5xl font-bold tracking-tight leading-none mb-2">74%</div>
                <div className="text-sm text-[#FFFAF2]/70">Integración en desarrollo</div>
              </div>
            </div>

            {/* New Documents List */}
            <div className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
              <h3 className="text-[15px] font-bold text-tierra mb-3">Documentos nuevos</h3>
              <div className="flex flex-col">
                {newDocs.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-[#F2EADD] last:border-none last:pb-0">
                    <span className="font-sans text-xs font-bold text-[#B3115F] bg-[#ED1686]/10 px-2 py-0.5 rounded">
                      {d.code}
                    </span>
                    <span className="text-sm text-tierra truncate">{d.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
