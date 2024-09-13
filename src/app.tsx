import { Dialog } from './components/ui/dialog'
import { CreateGoal, EmptyGoals } from './components'

export function App() {
  return (
    <Dialog>
      <EmptyGoals />
      <CreateGoal />
    </Dialog>
  )
}

