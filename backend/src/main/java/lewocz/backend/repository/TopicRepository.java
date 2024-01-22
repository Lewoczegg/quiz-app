package lewocz.backend.repository;

import lewocz.backend.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TopicRepository extends JpaRepository<Topic, UUID> {
    boolean existsByName(String name);
}
