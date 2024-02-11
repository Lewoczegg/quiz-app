import { create } from "zustand";

interface Quiz {
  topicName: string;
  selectedAnswers: Map<string, string>;
}

interface QuizStore {
  quiz: Quiz;
  setQuizTopic: (topic: string) => void;
  setSelectedAnswer: (questionId: string, answerId: string) => void;
  setQuizRestarted: () => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  quiz: {
    topicName: "",
    selectedAnswers: new Map(),
  },
  setQuizTopic: (topic) =>
    set({ quiz: { topicName: topic, selectedAnswers: new Map() } }),
  setSelectedAnswer: (questionId, answerId) =>
    set((state) => {
      state.quiz.selectedAnswers.set(questionId, answerId);
      return { quiz: { ...state.quiz } };
    }),
  setQuizRestarted: () =>
    set((state) => ({ quiz: { ...state.quiz, selectedAnswers: new Map() } })),
}));

export default useQuizStore;
