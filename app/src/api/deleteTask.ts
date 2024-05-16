import { useQueryClient, useMutation} from '@tanstack/react-query';

const TaskDelete = async (id: string) => {
    await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "DELETE",
    })
}

export const deleteTask = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ["TaskDelete"],
        mutationFn: TaskDelete,
        onSuccess: () => {
            queryClient.refetchQueries(["tasks"])
        },
    })
    return mutation
}
