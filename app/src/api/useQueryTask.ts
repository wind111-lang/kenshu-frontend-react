import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./const";

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
