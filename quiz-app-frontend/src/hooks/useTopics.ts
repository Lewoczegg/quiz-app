import { useEffect, useState } from "react";
import { getTopics } from "../services/quizService";
import { useCookies } from "react-cookie";

export interface Topic {
  id: string;
  name: string;
  imageUrl: string;
}

const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [cookies] = useCookies(["jwt"]);
  const token = cookies.jwt;

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await getTopics(token);
        setTopics(response.data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, [token]);

  return topics;
};

export default useTopics;
