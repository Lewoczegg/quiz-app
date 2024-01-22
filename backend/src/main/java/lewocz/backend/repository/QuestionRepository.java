package lewocz.backend.repository;

import lewocz.backend.model.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface QuestionRepository extends JpaRepository<Question, UUID> {
    @Query("SELECT q FROM Question q WHERE q.topic.name = :topicName ORDER BY RAND()")
    List<Question> findRandomQuestionsByTopic(@Param("topicName") String topicName, Pageable pageable);
}
