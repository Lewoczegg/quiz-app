package lewocz.backend.controller;

import jakarta.validation.Valid;
import lewocz.backend.dto.LoginRequest;
import lewocz.backend.dto.LoginResponse;
import lewocz.backend.helper.JwtHelper;
import lewocz.backend.model.Topic;
import lewocz.backend.service.TopicService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topic")
@RequiredArgsConstructor
public class TopicController {
    private final TopicService topicService;

    @GetMapping("/")
    public ResponseEntity<List<Topic>> getAllTopics() {
        List<Topic> topics = topicService.getAllTopics();

        return ResponseEntity.ok(topics);
    }
}
