package lewocz.backend.repository;

import lewocz.backend.model.QuizScore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface QuizScoreRepository extends JpaRepository<QuizScore, UUID> {
    List<QuizScore> findAllByUserUsername(String username);
}
