import { useState } from 'react'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('Usuarios')

  const adminStats = [
    { label: 'Usuarios', value: '128' },
    { label: 'Cursos publicados', value: '12' },
    { label: 'Documentos DT', value: '14' },
    { label: 'Organismos', value: '6' }
  ]

  const adminUsers = [
    { name: 'Mariano D. Volino', org: 'Fundación Red Social', role: 'Administrador', state: 'Activo' },
    { name: 'Laura E. Melgarejo', org: 'Gob. Santa Fe', role: 'Editor', state: 'Activo' },
    { name: 'Giuliano Donnes', org: 'Gob. Entre Ríos', role: 'Implementador', state: 'Activo' },
    { name: 'Victoria A. Bohl', org: 'Entre Ríos con Vos', role: 'Capacitador', state: 'Activo' },
    { name: 'Nicolás A. Moauro', org: 'Gob. Santa Fe', role: 'Lectura', state: 'Pendiente' },
    { name: 'Débora Irigo', org: 'Nodos territoriales', role: 'Implementador', state: 'Pendiente' }
  ]

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0])
      .join('')
      .toUpperCase()
  }

  const getBadgeStyle = (state: string) => {
    return state === 'Activo'
      ? 'bg-[#1F6E4A]/12 text-[#1F6E4A]'
      : 'bg-[#FF9E19]/16 text-[#9A5B00]'
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Stats Widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((s, i) => (
          <div key={i} className="bg-white border border-arena rounded-2xl p-5 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
            <div className="font-sans text-[11px] text-[#8C7E6F] uppercase mb-1">{s.label}</div>
            <div className="text-3xl font-bold text-umber">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white border border-arena rounded-2xl p-6 shadow-[0_6px_18px_rgba(33,4,30,0.04)]">
        <div className="flex items-center gap-2 flex-wrap border-b border-[#EEE3D5] pb-3 mb-6">
          {['Usuarios', 'Cursos', 'Pagos', 'Reportes LMS', 'Biblioteca', 'Proyectos', 'Diagnósticos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-none rounded-lg px-4 py-2 font-sans text-xs font-semibold cursor-pointer transition-colors ${
                activeTab === tab
                  ? 'bg-umber text-papel'
                  : 'bg-transparent text-[#5C4F42] hover:bg-[#EFE6D6]/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic content (Mocked table for Users) */}
        {activeTab === 'Usuarios' ? (
          <div>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <h3 className="text-base font-bold text-tierra">Usuarios autorizados</h3>
              <button
                onClick={() => alert('Abriendo modal para invitar usuario...')}
                className="bg-frs-grad text-white border-none font-sans text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer hover:shadow-md transition-shadow"
              >
                + Invitar usuario
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#EEE3D5] text-[11px] font-bold text-[#8C7E6F] uppercase tracking-wider">
                    <th className="pb-3 pl-2">Usuario</th>
                    <th className="pb-3">Organismo</th>
                    <th className="pb-3">Rol</th>
                    <th className="pb-3">Estado</th>
                    <th className="pb-3 pr-2 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {adminUsers.map((u, i) => (
                    <tr key={i} className="border-b border-[#F2EADD] last:border-none hover:bg-[#FFFAF2]/50 transition-colors">
                      <td className="py-3.5 pl-2 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-magenta flex items-center justify-center font-bold text-xs text-white shrink-0 select-none">
                          {getInitials(u.name)}
                        </div>
                        <span className="text-[13.5px] font-semibold text-tierra">{u.name}</span>
                      </td>
                      <td className="py-3.5 text-[13.5px] text-tierra">{u.org}</td>
                      <td className="py-3.5 text-[13.5px] text-[#5C4F42]">{u.role}</td>
                      <td className="py-3.5">
                        <span className={`inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full ${getBadgeStyle(u.state)}`}>
                          {u.state}
                        </span>
                      </td>
                      <td className="py-3.5 pr-2 text-right">
                        <button
                          onClick={() => alert(`Editando permisos de ${u.name}`)}
                          className="bg-transparent border-none text-[#B3115F] font-sans text-xs font-bold cursor-pointer hover:underline"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="py-10 text-center text-sm text-[#8C7E6F]">
            Panel de {activeTab} en desarrollo. Vista simulada para demostración.
          </div>
        )}
      </div>
    </div>
  )
}
