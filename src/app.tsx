import { Plus } from 'lucide-react'

import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 ">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="lets start illustration" />

      <p
        className="text-zinc-300 leading-relaxed max-w-80 text-center"
      >
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora mesmo?
      </p>

      <button
        type="button"
        className='flex gap-4 items-center bg-violet-500 px-4 py-2.5 rounded-lg text-violet-50 text-sm font-medium tracking-tight houver:bg-violet-600'
      >
        <Plus className='size-4 text-violet-50' />
        Cadastrar meta
      </button>
    </div>
  )
}

