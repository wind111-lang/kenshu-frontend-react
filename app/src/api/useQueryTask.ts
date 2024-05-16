import { useQuery } from "@tanstack/react-query";

const getTask = async () => {
  const result = await fetch("http://localhost:8000/api/tasks").then(
    (response) => response.json()
  );

  return result;
};

export const useQueryTask = () => {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: getTask,
    suspense: true,
  });

  return query;
};
