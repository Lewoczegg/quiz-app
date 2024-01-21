package lewocz.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lewocz.backend.model.Topic;
import lewocz.backend.service.TopicService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@ExtendWith(MockitoExtension.class)
class TopicControllerTest {

    static final String TOPIC_URL = "/api/topic/";

    private MockMvc mockMvc;

    @Mock
    private TopicService topicService;

    @InjectMocks
    private TopicController topicController;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(topicController).build();
    }

    @Test
    public void getAllTopics_ShouldReturnTopics() throws Exception {
        // Given
        List<Topic> topics = Arrays.asList(Topic.builder().name("Topic1").build(), Topic.builder().name("Topic2").build());
        given(topicService.getAllTopics()).willReturn(topics);

        // When & Then
        mockMvc.perform(get(TOPIC_URL))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(topics.size())))
                .andExpect(jsonPath("$[0].name", is(topics.get(0).getName())))
                .andExpect(jsonPath("$[1].name", is(topics.get(1).getName())));
    }

}