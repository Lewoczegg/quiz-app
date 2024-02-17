package lewocz.backend.repository;

import lewocz.backend.model.QuizScore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface QuizScoreRepository extends JpaRepository<QuizScore, UUID> {
}
