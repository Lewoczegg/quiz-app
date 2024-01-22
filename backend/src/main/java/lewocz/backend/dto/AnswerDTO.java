package lewocz.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class AnswerDTO {
    private UUID id;
    private String text;
    private Boolean isCorrect;
}
