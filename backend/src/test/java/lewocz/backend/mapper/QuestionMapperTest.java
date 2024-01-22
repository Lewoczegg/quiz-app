package lewocz.backend.mapper;

import lewocz.backend.dto.AnswerDTO;
import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.model.Answer;
import lewocz.backend.model.Question;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class QuestionMapperTest {

    private final QuestionMapper questionMapper = Mappers.getMapper(QuestionMapper.class);

    @Test
    void questionDtoToQuestion() {
        QuestionDTO questionDTO = QuestionDTO.builder()
                .text("Question 1")
                .answers(List.of(
                        AnswerDTO.builder()
                                .text("Answer 1")
                                .isCorrect(false)
                                .build(),
                        AnswerDTO.builder()
                                .text("Answer 2")
                                .isCorrect(true)
                                .build(),
                        AnswerDTO.builder()
                                .text("Answer 3")
                                .isCorrect(true)
                                .build(),
                        AnswerDTO.builder()
                                .text("Answer 4")
                                .isCorrect(false)
                                .build())
                )
                .build();

        Question question = questionMapper.questionDtoToQuestion(questionDTO);

        assertNotNull(question);
        assertEquals(questionDTO.getText(), question.getText());
        assertEquals(questionDTO.getAnswers().size(), question.getAnswers().size());
    }

    @Test
    void questionToQuestionDto() {
        Question question = Question.builder()
                .text("Question 1")
                .answers(List.of(
                        Answer.builder()
                                .text("Answer 1")
                                .isCorrect(false)
                                .build(),
                        Answer.builder()
                                .text("Answer 2")
                                .isCorrect(true)
                                .build(),
                        Answer.builder()
                                .text("Answer 3")
                                .isCorrect(true)
                                .build(),
                        Answer.builder()
                                .text("Answer 4")
                                .isCorrect(false)
                                .build())
                )
                .build();

        QuestionDTO questionDTO = questionMapper.questionToQuestionDto(question);

        assertNotNull(questionDTO);
        assertEquals(question.getText(), questionDTO.getText());
        assertEquals(question.getAnswers().size(), questionDTO.getAnswers().size());
    }
}