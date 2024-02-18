package lewocz.backend.service;

import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.dto.QuizScoreDTO;

import java.util.List;

public interface QuizService {
    List<QuestionDTO> getQuizByTopic(String topicName);
    List<QuizScoreDTO> getQuizScoresByUser(String username);

    QuizScoreDTO saveQuizScore(QuizScoreDTO quizScoreDTO);
}
