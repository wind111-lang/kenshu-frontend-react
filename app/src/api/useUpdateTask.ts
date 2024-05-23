import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./const";

const updateTitle = ({ id, title }: { id: string; title: string }) =>
  fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["updateTitle"],
    mutationFn: updateTitle,
    onSuccess: () => {
      queryClient.refetchQueries(["tasks"]);
    },
  });

  return mutation;
};
