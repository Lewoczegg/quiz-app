package lewocz.backend.mapper;

import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.model.Question;
import org.mapstruct.Mapper;

@Mapper
public interface QuestionMapper {
    QuestionDTO questionToQuestionDto(Question question);
    Question questionDtoToQuestion(QuestionDTO questionDTO);
}
