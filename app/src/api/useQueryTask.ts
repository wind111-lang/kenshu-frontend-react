import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:8000/api";

const getTask = async () => {
  const result = await fetch(`${BASE_URL}/tasks`).then((response) =>
    response.json()
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
