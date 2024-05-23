import { useMutation, useQueryClient } from "@tanstack/react-query";

const BASE_URL = "http://localhost:8000/api";

const updateTitle = ({
  id, 
  title,
}:{
  id: string;
  title : string;
}) => 
  fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    })
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
