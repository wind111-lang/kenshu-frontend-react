export const usePostTask = async () => {
  const response = await fetch("http://localhost:8000/api/tasks", {
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
