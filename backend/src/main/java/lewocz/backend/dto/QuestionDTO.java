package lewocz.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class QuestionDTO {
    private UUID id;
    private String text;
    private List<AnswerDTO> answers;
}
