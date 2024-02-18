package lewocz.backend.mapper;

import jakarta.persistence.EntityNotFoundException;
import lewocz.backend.dto.QuizScoreDTO;
import lewocz.backend.model.QuizScore;
import lewocz.backend.model.Topic;
import lewocz.backend.model.User;
import lewocz.backend.repository.TopicRepository;
import lewocz.backend.repository.UserRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class QuizScoreMapper {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TopicRepository topicRepository;

    @Mapping(source = "user.username", target = "userName")
    @Mapping(source = "topic.name", target = "topicName")
    public abstract QuizScoreDTO quizScoreToQuizScoreDto(QuizScore quizScore);

    @Mapping( target = "user", expression = "java(getUserByUsername(quizScoreDTO.getUserName()))")
    @Mapping(target = "topic", expression = "java(getTopicByName(quizScoreDTO.getTopicName()))")
    public abstract QuizScore quizScoreDtoToQuizScore(QuizScoreDTO quizScoreDTO);

    public User getUserByUsername(String userName) {
        return userRepository.findByUsername(userName)
                .orElseThrow(() -> new EntityNotFoundException("User not found with name: " + userName));
    }

    public Topic getTopicByName(String topicName) {
        return topicRepository.findByName(topicName)
                .orElseThrow(() -> new EntityNotFoundException("Topic not found with name: " + topicName));
    }
}
