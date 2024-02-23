import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import { axiosInstance } from "../services/api-client";

export interface Topic {
  id: string;
  name: string;
  imageUrl: string;
}

const useTopics = () => {
  const [cookies] = useCookies(["jwt"]);
  const token = cookies.jwt;

  const getTopics = (): Promise<Topic[]> =>
    axiosInstance
      .get("/topic/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: "topics",
    queryFn: getTopics,
    staleTime: 1000 * 60 * 60,
  });
};

export default useTopics;
