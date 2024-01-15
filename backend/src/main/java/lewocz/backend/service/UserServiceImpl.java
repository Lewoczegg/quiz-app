package lewocz.backend.service;

import lewocz.backend.dto.SignUpRequest;
import lewocz.backend.model.User;
import lewocz.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void signUp(SignUpRequest signUpRequest) throws Exception {
        String email = signUpRequest.getEmail();
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            throw new Exception(String.format("User with the email address '%s' already exists.", email));
        }

        String hashedPassword = passwordEncoder.encode(signUpRequest.getPassword());
        User user = User.builder()
                .username(signUpRequest.getName())
                .email(email)
                .password(hashedPassword)
                .build();
        userRepository.save(user);
    }
}
