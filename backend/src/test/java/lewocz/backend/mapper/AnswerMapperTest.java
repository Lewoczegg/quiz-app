package lewocz.backend.mapper;

import lewocz.backend.dto.AnswerDTO;
import lewocz.backend.model.Answer;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import static org.junit.jupiter.api.Assertions.*;

class AnswerMapperTest {

    private final AnswerMapper answerMapper = Mappers.getMapper(AnswerMapper.class);

    @Test
    void answerDtoToAnswer() {
        AnswerDTO answerDTO = AnswerDTO.builder()
                .text("Answer 1")
                .isCorrect(true)
                .build();

        Answer answer = answerMapper.answerDtoToAnswer(answerDTO);

        assertNotNull(answer);
        assertEquals(answerDTO.getText(), answer.getText());
        assertEquals(answerDTO.getIsCorrect(), answer.getIsCorrect());
    }

    @Test
    void answerToAnswerDto() {
        Answer answer = Answer.builder()
                .text("Answer 1")
                .isCorrect(true)
                .build();

        AnswerDTO answerDTO = answerMapper.answerToAnswerDto(answer);

        assertNotNull(answerDTO);
        assertEquals(answer.getText(), answerDTO.getText());
        assertEquals(answer.getIsCorrect(), answerDTO.getIsCorrect());
    }
}