import { Dialog } from './components/ui/dialog'
import { CreateGoal, EmptyGoals, Summary } from './components'

import { useGetSummary } from './hooks'
import { useGetPendingGoals } from './hooks/get-pending-goals/useGetPendingGoals'

export function App() {
  const {
    data: summary,
    // isLoading: isLoadingSummary
  } = useGetSummary()

  const {
    data: pendingGoals,
    // isLoading: isLoadingPendingGoals
  } = useGetPendingGoals()

  return (
    <Dialog>
      {summary && summary?.total > 0
        ? <Summary summary={summary} pendingGoals={pendingGoals} />
        : <EmptyGoals />
      }
      <CreateGoal />
    </Dialog>
  )
}

