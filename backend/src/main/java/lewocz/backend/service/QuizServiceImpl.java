package lewocz.backend.service;

import jakarta.persistence.EntityNotFoundException;
import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.dto.QuizScoreDTO;
import lewocz.backend.mapper.QuestionMapper;
import lewocz.backend.mapper.QuizScoreMapper;
import lewocz.backend.model.Question;
import lewocz.backend.repository.QuestionRepository;
import lewocz.backend.repository.QuizScoreRepository;
import lewocz.backend.repository.TopicRepository;
import lewocz.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {


    private final QuestionRepository questionRepository;
    private final TopicRepository topicRepository;
    private final QuizScoreRepository quizScoreRepository;
    private final UserRepository userRepository;

    private final QuestionMapper questionMapper;
    private final QuizScoreMapper quizScoreMapper;

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

    @Override
    public List<QuizScoreDTO> getQuizScoresByUser(String username) {
        if (!userRepository.existsByUsername(username)) {
            throw new EntityNotFoundException("User not found: " + username);
        }

        List<QuizScoreDTO> quizScores = quizScoreRepository.findAllByUserUsername(username)
                .stream()
                .map(quizScoreMapper::quizScoreToQuizScoreDto)
                .collect(Collectors.toList());

        return quizScores;
    }

    @Override
    public QuizScoreDTO saveQuizScore(QuizScoreDTO quizScoreDTO) {
        if (quizScoreDTO.getScore() < 0 || quizScoreDTO.getScore() > 100) {
            throw new IllegalArgumentException("Invalid score: " + quizScoreDTO.getScore());
        }

        if (!topicRepository.existsByName(quizScoreDTO.getTopicName())) {
            throw new EntityNotFoundException("Topic not found: " + quizScoreDTO.getTopicName());
        }

        if (!userRepository.existsByUsername(quizScoreDTO.getUserName())) {
            throw new EntityNotFoundException("User not found: " + quizScoreDTO.getUserName());
        }

        quizScoreRepository.save(quizScoreMapper.quizScoreDtoToQuizScore(quizScoreDTO));

        return quizScoreDTO;
    }
}
