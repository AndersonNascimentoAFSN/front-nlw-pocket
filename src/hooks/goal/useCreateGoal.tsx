import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createGoal, type CreateGoalRequest } from "../../http"

export function useCreateGoal() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ title, desiredWeeklyFrequency }: CreateGoalRequest) => createGoal({
      title: title,
      desiredWeeklyFrequency: desiredWeeklyFrequency
    }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pending-goals']
      })
      queryClient.invalidateQueries({
        queryKey: ['summary']
      })
    }
  })
}