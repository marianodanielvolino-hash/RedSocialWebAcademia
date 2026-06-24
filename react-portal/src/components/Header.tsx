import { useStore } from '../store/useStore'
import { Search, Bell } from 'lucide-react'

export default function Header() {
  const { screen } = useStore()

  const titles: Record<string, [string, string]> = {
    dashboard: ['Inicio', 'PORTAL / 00'],
    academia: ['Academia Red Social', 'PORTAL / 01'],
    leccion: ['Lección', 'PORTAL / 01 / CURSO'],
    biblioteca: ['Biblioteca técnica', 'PORTAL / 02'],
    proyectos: ['Proyectos activos', 'PORTAL / 03'],
    diagnosticos: ['Diagnósticos y reportes', 'PORTAL / 04'],
    admin: ['Gestión de plataforma', 'PORTAL / GESTIÓN · EQUIPO FUNDACIÓN'],
  }

  const [title, code] = titles[screen] || titles.dashboard

  return (
    <div className="flex items-center justify-between px-8 py-5 bg-[#FFFAF2]/86 backdrop-blur-md border-b border-[#EEE3D5] sticky top-0 z-20">
      <div>
        <div className="font-sans text-[10.5px] font-bold tracking-wider text-[#A89A88] uppercase">
          {code}
        </div>
        <div className="text-xl font-semibold tracking-tight text-tierra mt-0.5">
          {title}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Mock Search Bar */}
        <div className="flex items-center gap-2 bg-white border border-[#E9DECF] rounded-xl px-3 py-2 w-60 text-[#A89A88] cursor-text hover:border-magenta/40 transition-colors">
          <Search className="w-4 h-4 text-[#C6B6C0]" />
          <span className="text-xs select-none">Buscar en el portal…</span>
        </div>

        {/* Notification Bell */}
        <button className="relative w-10 h-10 rounded-xl border border-[#E9DECF] bg-white cursor-pointer text-[#5C4F42] hover:bg-[#EFE6D6] flex items-center justify-center transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-magenta rounded-full" />
        </button>
      </div>
    </div>
  )
}
