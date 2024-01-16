package lewocz.backend.controller;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AuthControllerTest {
    static final String SIGNUP_URL = "/api/auth/signup";
    static final String LOGIN_URL = "/api/auth/login";

    @Autowired
    private MockMvc mockMvc;

    // Test signup endpoint
    @Transactional
    @Test
    public void shouldSignUpUser() throws Exception {
        String request = """
                {
                    "name": "test",
                    "email": "test@test.com",
                    "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isCreated());
    }

    @Transactional
    @Test
    public void shouldReturnDuplicate_onExistingEmail() throws Exception {
//    signup user
        String request = """
                {
                  "name": "SabdraTest",
                  "email": "sandratest@gmail.com",
                  "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isCreated());

        //    signup another user with duplicate email
        String requestWithSameEmail = """
                {
                  "name": "AnnaTest",
                  "email": "sandratest@gmail.com",
                  "password": "654321"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestWithSameEmail))
                .andExpect(status().isConflict());
    }

    @Transactional
    @Test
    public void shouldReturnDuplicate_onExistingUsername() throws Exception {
        String request = """
                {
                  "name": "AnnaTest",
                  "email": "sandratest@gmail.com",
                  "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isCreated());

        //    signup another user with duplicate email
        String requestWithSameUsername = """
                {
                  "name": "AnnaTest",
                  "email": "annatest@gmail.com",
                  "password": "654321"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestWithSameUsername))
                .andExpect(status().isConflict());
    }

    @Transactional
    @Test
    public void shouldReturnBadRequest_WhenSignUpRequestIsNotInvalid() throws Exception {
        String request = """
                {
                  "name": "",
                  "email": "sandratest@gmail.com",
                  "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isBadRequest());
    }

    // Test login endpoint
    @Transactional
    @Test
    public void shouldReturnJWTToken_WhenUserIsRegistered() throws Exception {
        String request = """
                {
                    "name": "test",
                    "email": "test@test.com",
                    "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isCreated());

        String loginRequest = """
                {
                    "email": "test@test.com",
                    "password": "123456"
                }
                """;

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post(LOGIN_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(loginRequest))
                .andExpect(status().isOk())
                .andReturn();

        String response = result.getResponse().getContentAsString();

        assertThat(response).isNotNull();
        assertThat(response).contains("token");
    }

    @Transactional
    @Test
    public void shouldReturnBadCredentials() throws Exception {
        String request = """
                {
                    "name": "test",
                    "email": "test@test.com",
                    "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(SIGNUP_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isCreated());

        String loginWithWrongPassword = """
                {
                    "email": "test@test.com",
                    "password": "123456789"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(LOGIN_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(loginWithWrongPassword))
                .andExpect(status().isUnauthorized());
    }

    @Transactional
    @Test
    public void shouldReturnUnauthorized_WhenUserIsNotRegistered() throws Exception {
        String request = """
                {
                    "name": "test",
                    "email": "test@test.com",
                    "password": "123456"
                }
                """;

        mockMvc.perform(MockMvcRequestBuilders.post(LOGIN_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isUnauthorized());
    }
}