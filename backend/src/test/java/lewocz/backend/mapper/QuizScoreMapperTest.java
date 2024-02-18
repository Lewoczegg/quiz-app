package lewocz.backend.mapper;

import lewocz.backend.dto.QuizScoreDTO;
import lewocz.backend.dto.UserDTO;
import lewocz.backend.model.QuizScore;
import lewocz.backend.model.Topic;
import lewocz.backend.model.User;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuizScoreMapperTest {

    @Autowired
    QuizScoreMapper quizScoreMapper;

    @Test
    void quizScoreDtoToQuizScore() {
        QuizScoreDTO quizScoreDTO = QuizScoreDTO.builder()
                .userName("lewocz")
                .topicName("React")
                .score(10)
                .build();

        QuizScore quizScore = quizScoreMapper.quizScoreDtoToQuizScore(quizScoreDTO);

        assertEquals(quizScoreDTO.getUserName(), quizScore.getUser().getUsername());
        assertEquals(quizScoreDTO.getTopicName(), quizScore.getTopic().getName());
        assertEquals(quizScoreDTO.getScore(), quizScore.getScore());
    }

    @Test
    void quizScoreToQuizScoreDto() {
        QuizScore quizScore = QuizScore.builder()
                .id(UUID.randomUUID())
                .user(User.builder().username("lewocz").build())
                .topic(Topic.builder().name("React").build())
                .score(10)
                .build();

        QuizScoreDTO quizScoreDTO = quizScoreMapper.quizScoreToQuizScoreDto(quizScore);

        assertEquals(quizScore.getUser().getUsername(), quizScoreDTO.getUserName());
        assertEquals(quizScore.getTopic().getName(), quizScoreDTO.getTopicName());
        assertEquals(quizScore.getScore(), quizScoreDTO.getScore());
    }
}