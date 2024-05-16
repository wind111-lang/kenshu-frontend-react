import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateTitle = ({
  id, 
  title,
}:{
  id: string;
  title : string;
}) => 
  fetch(`http://localhost:8000/api/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    })
});


export const updateTask = () => {
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
