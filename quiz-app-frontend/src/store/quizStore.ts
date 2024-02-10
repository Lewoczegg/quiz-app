import { create } from "zustand";

interface Quiz {
  topicName: string;
}

interface QuizStore {
  quiz: Quiz;
  setQuizTopic: (topic: string) => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  quiz: {
    topicName: "",
  },
  setQuizTopic: (topic) => set({ quiz: { topicName: topic } }),
}));

export default useQuizStore;
