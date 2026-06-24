import { useStore, ScreenType } from '../store/useStore'
import { Home, GraduationCap, FolderOpen, Layers, BarChart3, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
  const { screen, setScreen, userName, doLogout } = useStore()

  const activeMap: Record<string, string> = {
    dashboard: 'dashboard',
    academia: 'academia',
    leccion: 'academia',
    biblioteca: 'biblioteca',
    proyectos: 'proyectos',
    diagnosticos: 'diagnosticos',
    admin: 'admin',
  }

  const activeId = activeMap[screen] || 'dashboard'

  const mainNavItems = [
    { id: 'dashboard' as ScreenType, label: 'Inicio', icon: Home },
    { id: 'academia' as ScreenType, label: 'Academia', icon: GraduationCap },
    { id: 'biblioteca' as ScreenType, label: 'Biblioteca técnica', icon: FolderOpen },
    { id: 'proyectos' as ScreenType, label: 'Proyectos', icon: Layers },
    { id: 'diagnosticos' as ScreenType, label: 'Diagnósticos', icon: BarChart3 },
  ]

  const adminNavItems = [
    { id: 'admin' as ScreenType, label: 'Gestión de plataforma', icon: Settings },
  ]

  return (
    <aside className="w-64 flex-shrink-0 bg-umber text-papel flex flex-col justify-between sticky top-0 h-screen border-r border-[#FFFAF2]/5">
      <div>
        {/* Brand Header */}
        <div className="p-6 flex items-center gap-3 border-b border-[#FFFAF2]/8">
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
            <line x1="4" y1="6" x2="16" y2="4" stroke="#ED1686" strokeWidth="1.4" />
            <line x1="16" y1="4" x2="13" y2="17" stroke="#FF9E19" strokeWidth="1.4" />
            <line x1="4" y1="6" x2="13" y2="17" stroke="#ED1686" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="4" cy="6" r="3" fill="#ED1686" />
            <circle cx="16" cy="4" r="2.4" fill="#FF9E19" />
            <circle cx="13" cy="17" r="2.2" fill="#F7F1E7" />
          </svg>
          <div className="leading-none">
            <div className="font-semibold text-sm">Red Social</div>
            <div className="font-sans text-[9.5px] tracking-wider text-[#FFFAF2]/45 uppercase mt-0.5">
              Portal · v1.0
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="p-4 flex flex-col gap-1 overflow-y-auto">
          <div className="font-sans text-[9.5px] font-bold tracking-widest text-[#FFFAF2]/40 px-3 py-2 uppercase">
            Tu espacio
          </div>
          {mainNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeId === item.id

            return (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`flex items-center gap-3 w-full text-left border-none rounded-xl px-3 py-2.5 cursor-pointer font-sans text-sm font-semibold relative transition-colors ${
                  isActive
                    ? 'bg-magenta/16 text-papel'
                    : 'bg-transparent text-[#FFFAF2]/62 hover:bg-[#FFFAF2]/5'
                }`}
              >
                {isActive && (
                  <span className="w-1 h-[18px] rounded-full bg-magenta absolute left-0 top-[11px]" />
                )}
                <Icon className={`w-4 h-4 ${isActive ? 'text-naranja' : 'text-[#FFFAF2]/40'}`} />
                {item.label}
              </button>
            )
          })}

          <div className="mt-6 mx-1 pt-4 border-t border-[#FFFAF2]/8">
            <div className="font-sans text-[9.5px] font-bold tracking-widest text-[#FFFAF2]/40 px-2 py-1 uppercase">
              Gestión de plataforma
            </div>
            <div className="font-sans text-[9.5px] text-[#FFFAF2]/32 px-2 pb-2 leading-relaxed">
              Equipo Fundación · acceso por rol
            </div>
          </div>

          {adminNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeId === item.id

            return (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`flex items-center gap-3 w-full text-left border-none rounded-xl px-3 py-2.5 cursor-pointer font-sans text-sm font-semibold relative transition-colors ${
                  isActive
                    ? 'bg-magenta/16 text-papel'
                    : 'bg-transparent text-[#FFFAF2]/62 hover:bg-[#FFFAF2]/5'
                }`}
              >
                {isActive && (
                  <span className="w-1 h-[18px] rounded-full bg-magenta absolute left-0 top-[11px]" />
                )}
                <Icon className={`w-4 h-4 ${isActive ? 'text-naranja' : 'text-[#FFFAF2]/40'}`} />
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* User Session Footer */}
      <div className="p-4 border-t border-[#FFFAF2]/8 bg-[#21160F]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-magenta flex items-center justify-center font-bold text-sm text-white select-none">
            {userName ? userName[0].toUpperCase() : 'M'}
          </div>
          <div className="flex-1 leading-tight overflow-hidden">
            <div className="text-sm font-bold truncate">{userName} Volino</div>
            <div className="font-sans text-[10px] text-[#FFFAF2]/45 truncate">
              Líder de proyecto
            </div>
          </div>
          <button
            onClick={doLogout}
            title="Salir"
            className="bg-transparent border-none text-[#FFFAF2]/50 hover:text-white cursor-pointer transition-colors p-1.5 rounded-lg hover:bg-[#FFFAF2]/5"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
