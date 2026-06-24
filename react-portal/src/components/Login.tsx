import { useStore } from '../store/useStore'
import { ArrowLeft } from 'lucide-react'

export default function Login() {
  const { setScreen, doLogin } = useStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    doLogin()
  }

  return (
    <div className="relative min-h-screen bg-umber text-papel overflow-hidden font-sans flex items-center justify-center p-6">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_70%_at_50%_-10%,rgba(237,22,134,0.22),transparent_60%)]"></div>

      <button
        onClick={() => setScreen('prelogin')}
        className="absolute top-8 left-8 bg-transparent border-none text-[#FFFAF2]/55 font-medium text-xs tracking-wider cursor-pointer flex items-center gap-2 hover:text-papel transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver
      </button>

      <div className="relative w-[420px] max-w-full bg-papel text-tierra rounded-3xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-3 mb-8">
          <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
            <line x1="4" y1="6" x2="16" y2="4" stroke="#ED1686" strokeWidth="1.4" />
            <line x1="16" y1="4" x2="13" y2="17" stroke="#FF9E19" strokeWidth="1.4" />
            <line x1="4" y1="6" x2="13" y2="17" stroke="#ED1686" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="4" cy="6" r="3" fill="#ED1686" />
            <circle cx="16" cy="4" r="2.4" fill="#FF9E19" />
            <circle cx="13" cy="17" r="2.2" fill="#2E2117" />
          </svg>
          <div className="font-sans text-[11px] tracking-[0.16em] text-[#8C7E6F] uppercase font-bold">
            Portal Red Social
          </div>
        </div>

        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight mb-2">
          Ingresá a tu espacio
        </h2>
        <p className="text-sm text-[#7C6E5F] leading-relaxed mb-6">
          Acceso a formación, biblioteca técnica, proyectos y diagnósticos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#8C7E6F] mb-1.5">
              Email institucional
            </label>
            <input
              type="email"
              required
              placeholder="nombre@organismo.gob.ar"
              className="w-full bg-white border border-[#E0D2BC] rounded-xl px-4 py-3 font-sans text-sm text-tierra focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#8C7E6F] mb-1.5">
              Contraseña
            </label>
            <input
              type="password"
              required
              placeholder="••••••••••"
              className="w-full bg-white border border-[#E0D2BC] rounded-xl px-4 py-3 font-sans text-sm text-tierra focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors"
            />
          </div>

          <div className="text-right -mt-1">
            <a className="text-xs text-[#B3115F] hover:underline cursor-pointer">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-frs-grad text-white border-none font-semibold text-[15px] py-4 rounded-xl cursor-pointer shadow-marca transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Ingresar
          </button>
        </form>

        <button className="w-full bg-transparent text-tierra border border-[#E0D2BC] font-medium text-sm py-3.5 rounded-xl cursor-pointer mt-3 hover:bg-[#EFE6D6] transition-colors">
          Solicitar acceso institucional
        </button>

        <div className="mt-8 pt-5 border-t border-[#EEE5D9] text-[11px] leading-relaxed text-[#A89A88]">
          Acceso reservado a organismos implementadores, participantes de programas, aliados institucionales y equipo técnico autorizado.
        </div>
      </div>
    </div>
  )
}
