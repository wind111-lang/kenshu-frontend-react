import { useQueryClient, useMutation } from '@tanstack/react-query';

const TaskDoneTime = async (id: string) => {
    await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            finishedAt: new Date().toISOString(),
        })
    })
};

export const doneTask = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ["TaskDoneTime"],
        mutationFn: TaskDoneTime,
        onSuccess: () => {
            queryClient.refetchQueries(["tasks"])
        },
    });
    return mutation
};
