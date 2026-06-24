import { useStore } from './store/useStore'
import Prelogin from './components/Prelogin'
import Login from './components/Login'
import Survey from './components/Survey'
import SurveyResults from './components/SurveyResults'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Academia from './components/Academia'
import Leccion from './components/Leccion'
import Biblioteca from './components/Biblioteca'
import Proyectos from './components/Proyectos'
import Diagnosticos from './components/Diagnosticos'
import Admin from './components/Admin'

export default function App() {
  const { screen } = useStore()

  // Pre-login Screens
  if (screen === 'prelogin') return <Prelogin />
  if (screen === 'login') return <Login />
  if (screen === 'madurez') return <Survey />
  if (screen === 'resultado') return <SurveyResults />

  // Logged-in App Screens
  const renderAppContent = () => {
    switch (screen) {
      case 'dashboard':
        return <Dashboard />
      case 'academia':
        return <Academia />
      case 'leccion':
        return <Leccion />
      case 'biblioteca':
        return <Biblioteca />
      case 'proyectos':
        return <Proyectos />
      case 'diagnosticos':
        return <Diagnosticos />
      case 'admin':
        return <Admin />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex min-h-screen bg-papel text-tierra font-sans">
      {/* Portal Navigation Sidebar */}
      <Sidebar />

      {/* Main Panel Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Portal Action Header */}
        <Header />

        {/* Dynamic Scrollable Panel Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {renderAppContent()}
        </main>
      </div>
    </div>
  )
}
