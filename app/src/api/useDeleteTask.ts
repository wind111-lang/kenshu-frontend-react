import { useQueryClient, useMutation } from "@tanstack/react-query";

const BASE_URL = "http://localhost:8000/api";

const TaskDelete = async (id: string) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["TaskDelete"],
    mutationFn: TaskDelete,
    onSuccess: () => {
      queryClient.refetchQueries(["tasks"]);
    },
  });
  return mutation;
};
