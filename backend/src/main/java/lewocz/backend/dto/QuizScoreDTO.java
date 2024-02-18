package lewocz.backend.dto;

import lewocz.backend.model.Topic;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuizScoreDTO {
    private String userName;
    private String topicName;
    private int score;
}
