package lewocz.backend.service;

import lewocz.backend.model.Topic;
import lewocz.backend.repository.TopicRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TopicServiceImpl implements TopicService {

    private final TopicRepository topicRepository;
    @Override
    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }
}
