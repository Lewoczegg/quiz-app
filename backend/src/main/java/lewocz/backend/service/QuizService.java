package lewocz.backend.service;

import lewocz.backend.dto.QuestionDTO;

import java.util.List;

public interface QuizService {
    List<QuestionDTO> getQuizByTopic(String topicName);
}
