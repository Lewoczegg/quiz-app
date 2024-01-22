package lewocz.backend.controller;

import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping("topic/{topicName}")
    public ResponseEntity<List<QuestionDTO>> getQuizByTopic(@PathVariable String topicName) {
        List<QuestionDTO> quiz = quizService.getQuizByTopic(topicName);
        return ResponseEntity.ok(quiz);
    }
}
