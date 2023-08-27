import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";

import { Todo, Query } from "../types/global";

const useTodo = (query: Query) => {
  const api = new ApiClient<Todo>("/todos");

  return useQuery<Todo[], Error>({
    queryKey: ["todo", query.selectedUserId],
    queryFn: () => {
      return api.getAllData({
        params: {
          userId: query.selectedUserId,
        },
      });
    },
  });
};

export default useTodo;
