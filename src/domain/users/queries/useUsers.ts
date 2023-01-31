import { useInfiniteQuery } from "react-query";
import { apiClient, QueryKey } from "../../../api";
import { User } from "../users.model";

export default function useUsers() {
  return useInfiniteQuery(
    QueryKey.useUsers,
    async ({ pageParam = 1 }) => {
      return await apiClient.getList<User>("https://reqres.in/api/users", {
        per_page: 10,
        page: pageParam,
      });
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => {
        if (lastPage?.page < lastPage?.total_pages) {
          return lastPage?.page + 1;
        }
      },
    }
  );
}
