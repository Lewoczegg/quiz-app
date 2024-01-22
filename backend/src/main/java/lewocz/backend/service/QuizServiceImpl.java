package lewocz.backend.service;

import jakarta.persistence.EntityNotFoundException;
import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.mapper.QuestionMapper;
import lewocz.backend.model.Question;
import lewocz.backend.repository.QuestionRepository;
import lewocz.backend.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {

    private final QuestionMapper questionMapper;
    private final QuestionRepository questionRepository;
    private final TopicRepository topicRepository;

    @Override
    public List<QuestionDTO> getQuizByTopic(String topicName) {

        if(!topicRepository.existsByName(topicName)) {
            throw new EntityNotFoundException("Topic not found: " + topicName);
        }

        Pageable limit = PageRequest.of(0, 20);
        List<Question> questions = questionRepository.findRandomQuestionsByTopic(topicName, limit);
        return questions.stream()
                .map(questionMapper::questionToQuestionDto)
                .collect(Collectors.toList());
    }
}
