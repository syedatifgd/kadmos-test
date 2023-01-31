import { useQuery } from "react-query";
import { apiClient, QueryKey } from "../../../api";
import { User } from "../users.model";

type Params = {
  userId?: string;
};

export default function useUserDetails({ userId }: Params) {
  return useQuery(
    [QueryKey.useUserDetails, userId],
    async () => {
      return await apiClient.get<User>(`https://reqres.in/api/users/${userId}`);
    },
    { enabled: !!userId }
  );
}
