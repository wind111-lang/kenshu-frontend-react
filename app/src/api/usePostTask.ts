import { BASE_URL } from "./const";

export const usePostTask = async () => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      createdAt: new Date().toISOString(),
      finishedAt: null,
    }),
  });
  return response;
};
