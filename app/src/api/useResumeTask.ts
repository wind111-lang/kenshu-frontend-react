import { useQueryClient, useMutation } from "@tanstack/react-query";

const BASE_URL = "http://localhost:8000/api";

const setTaskResume = async (id: string) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      finishedAt: null,
    }),
  });
};

export const useResumeTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["setTaskResume"],
    mutationFn: setTaskResume,
    onSuccess: () => {
      queryClient.refetchQueries(["tasks"]);
    },
  });
  return mutation;
};
