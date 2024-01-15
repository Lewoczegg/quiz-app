package lewocz.backend.service;

import lewocz.backend.dto.SignUpRequest;

public interface UserService {
    void signUp(SignUpRequest signUpRequest) throws Exception;
}
