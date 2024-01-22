package lewocz.backend.mapper;

import lewocz.backend.dto.AnswerDTO;
import lewocz.backend.model.Answer;
import org.mapstruct.Mapper;

@Mapper
public interface AnswerMapper {
    Answer answerDtoToAnswer(AnswerDTO answerDTO);
    AnswerDTO answerToAnswerDto(Answer answer);
}
