import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";

import { User } from "../types/global";

const useUsers = () => {
  const api = new ApiClient<User>("/users");

  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: api.getAllData,
  });
};

export default useUsers;
