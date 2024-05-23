import { useQueryClient, useMutation } from "@tanstack/react-query";

const BASE_URL = "http://localhost:8000/api";

const TaskDoneTime = async (id: string) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      finishedAt: new Date().toISOString(),
    }),
  });
};

export const useDoneTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["TaskDoneTime"],
    mutationFn: TaskDoneTime,
    onSuccess: () => {
      queryClient.refetchQueries(["tasks"]);
    },
  });
  return mutation;
};
