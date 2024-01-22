package lewocz.backend.controller;

import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.exception.NotFoundException;
import lewocz.backend.service.QuizService;
import lewocz.backend.service.TopicService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class QuizControllerTest {
    static final String QUIZ_URL = "/api/quiz/topic/{topicName}";

    private MockMvc mockMvc;

    @Mock
    private QuizService quizService;

    @InjectMocks
    private QuizController quizController;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(quizController)
                .setControllerAdvice(new RestExceptionHandler())
                .build();
    }

    @Test
    public void getQuizByTopic_ShouldReturnQuiz() throws Exception {
        // Given
        List<QuestionDTO> quiz = Arrays.asList(
                QuestionDTO.builder().text("Question1").build(),
                QuestionDTO.builder().text("Question2").build());
        given(quizService.getQuizByTopic("Topic1")).willReturn(quiz);

        // When & Then
        mockMvc.perform(get(QUIZ_URL, "Topic1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(quiz.size())))
                .andExpect(jsonPath("$[0].text", is(quiz.get(0).getText())))
                .andExpect(jsonPath("$[1].text", is(quiz.get(1).getText())));
    }

    @Test
    public void shouldReturnNotFound_onNonExistingTopic() throws Exception {
        String nonExistingTopic = "NonExistingTopic";

        // Simulate the behavior of throwing a NotFoundException for a non-existing topic
        given(quizService.getQuizByTopic(nonExistingTopic)).willThrow(new NotFoundException("Topic not found"));

        // Perform the request and expect a NotFound (404) status
        mockMvc.perform(get(QUIZ_URL, nonExistingTopic))
                .andExpect(status().isNotFound());
    }
}