package lewocz.backend.dto;

import lewocz.backend.model.Topic;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuizScoreDTO {
    private UserDTO user;
    private Topic topic;
    private int score;
}
