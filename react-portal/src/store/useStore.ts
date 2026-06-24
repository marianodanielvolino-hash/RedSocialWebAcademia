import { create } from 'zustand'

export type ScreenType = 
  | 'prelogin' 
  | 'login' 
  | 'madurez' 
  | 'resultado' 
  | 'dashboard' 
  | 'academia' 
  | 'leccion' 
  | 'biblioteca' 
  | 'proyectos' 
  | 'diagnosticos' 
  | 'admin'

interface AppState {
  screen: ScreenType
  dashView: 'a' | 'b'
  userName: string
  answers: Record<number, number>
  setScreen: (screen: ScreenType) => void
  setDashView: (view: 'a' | 'b') => void
  setAnswer: (index: number, val: number) => void
  resetSurvey: () => void
  doLogin: () => void
  doLogout: () => void
}

export const useStore = create<AppState>((set) => ({
  screen: 'prelogin',
  dashView: 'a',
  userName: 'Mariano',
  answers: {},
  setScreen: (screen) => {
    set({ screen })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  setDashView: (dashView) => set({ dashView }),
  setAnswer: (index, val) => 
    set((state) => ({ 
      answers: { ...state.answers, [index]: val } 
    })),
  resetSurvey: () => set({ answers: {}, screen: 'madurez' }),
  doLogin: () => set({ screen: 'dashboard' }),
  doLogout: () => set({ screen: 'login' }),
}))
