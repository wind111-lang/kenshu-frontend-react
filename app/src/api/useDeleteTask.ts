import { useQueryClient, useMutation } from "@tanstack/react-query";
import { BASE_URL } from "./const";

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
