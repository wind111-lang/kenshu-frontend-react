import { useQueryClient, useMutation } from '@tanstack/react-query';

const setTaskResume = async (id: string) => {
    await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            finishedAt: null,
        })
    })
};

export const resumeTask = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ["setTaskResume"],
        mutationFn: setTaskResume,
        onSuccess: () => {
         queryClient.refetchQueries(["tasks"])
        },
    });
    return mutation
};

