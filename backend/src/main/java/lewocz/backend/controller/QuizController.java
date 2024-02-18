package lewocz.backend.controller;

import lewocz.backend.dto.QuestionDTO;
import lewocz.backend.dto.QuizScoreDTO;
import lewocz.backend.model.QuizScore;
import lewocz.backend.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {

    private final QuizService quizService;

    @GetMapping("{topicName}")
    public ResponseEntity<List<QuestionDTO>> getQuizByTopic(@PathVariable String topicName) {
        List<QuestionDTO> quiz = quizService.getQuizByTopic(topicName);
        return ResponseEntity.ok(quiz);
    }

    @GetMapping("/score/{username}")
    public ResponseEntity<List<QuizScoreDTO>> getScoreByUsername(@PathVariable String username) {
        List<QuizScoreDTO> scores = quizService.getQuizScoresByUser(username);
        return ResponseEntity.ok(scores);
    }

    @PostMapping("/score")
    public ResponseEntity<QuizScoreDTO> saveScore(@RequestBody QuizScoreDTO quizScoreDTO) {
        QuizScoreDTO score = quizService.saveQuizScore(quizScoreDTO);
        return ResponseEntity.ok(score);
    }
}
