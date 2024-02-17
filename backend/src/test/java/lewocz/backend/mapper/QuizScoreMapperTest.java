package lewocz.backend.mapper;

import lewocz.backend.dto.QuizScoreDTO;
import lewocz.backend.dto.UserDTO;
import lewocz.backend.model.QuizScore;
import lewocz.backend.model.Topic;
import lewocz.backend.model.User;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class QuizScoreMapperTest {

    private final QuizScoreMapper quizScoreMapper = Mappers.getMapper(QuizScoreMapper.class);

    @Test
    void quizScoreDtoToQuizScore() {
        UserDTO userDTO = UserDTO.builder()
                .username("testuser")
                .email("testuser@example.com")
                .build();

        Topic topic = Topic.builder()
                .id(UUID.randomUUID())
                .name("Math")
                .imageUrl("math_image_url")
                .build();

        QuizScoreDTO quizScoreDTO = QuizScoreDTO.builder()
                .user(userDTO)
                .topic(topic)
                .score(90)
                .build();

        QuizScore quizScore = quizScoreMapper.quizScoreDtoToQuizScore(quizScoreDTO);

        assertNotNull(quizScore);
        assertEquals(userDTO.getUsername(), quizScore.getUser().getUsername());
        assertEquals(userDTO.getEmail(), quizScore.getUser().getEmail());
        assertEquals(topic.getName(), quizScore.getTopic().getName());
        assertEquals(topic.getImageUrl(), quizScore.getTopic().getImageUrl());
        assertEquals(quizScoreDTO.getScore(), quizScore.getScore());
    }

    @Test
    void quizScoreToQuizScoreDto() {
        User user = User.builder()
                .id(UUID.randomUUID())
                .username("testuser")
                .password("password")
                .email("testuser@example.com")
                .build();

        Topic topic = Topic.builder()
                .id(UUID.randomUUID())
                .name("Math")
                .imageUrl("math_image_url")
                .build();

        QuizScore quizScore = QuizScore.builder()
                .id(UUID.randomUUID())
                .user(user)
                .topic(topic)
                .score(90)
                .build();

        QuizScoreDTO quizScoreDTO = quizScoreMapper.quizScoreToQuizScoreDto(quizScore);

        assertNotNull(quizScoreDTO);
        assertEquals(user.getUsername(), quizScoreDTO.getUser().getUsername());
        assertEquals(user.getEmail(), quizScoreDTO.getUser().getEmail());
        assertEquals(topic.getName(), quizScoreDTO.getTopic().getName());
        assertEquals(topic.getImageUrl(), quizScoreDTO.getTopic().getImageUrl());
        assertEquals(quizScore.getScore(), quizScoreDTO.getScore());
    }
}