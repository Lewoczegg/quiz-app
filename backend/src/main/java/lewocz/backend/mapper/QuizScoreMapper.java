package lewocz.backend.mapper;

import lewocz.backend.dto.QuizScoreDTO;
import lewocz.backend.model.QuizScore;
import org.mapstruct.Mapper;

@Mapper
public interface QuizScoreMapper {
    QuizScore quizScoreDtoToQuizScore(QuizScoreDTO quizScoreDTO);
    QuizScoreDTO quizScoreToQuizScoreDto(QuizScore quizScore);
}
