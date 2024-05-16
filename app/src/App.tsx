import classNames from "./App.module.css";
import { TopPage } from "./components/TopPage/index";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TopPage />
    </QueryClientProvider>
  );
};
