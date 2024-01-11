package lewocz.backend;

import lewocz.backend.dto.UserDTO;
import lewocz.backend.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		User user = User.builder().email("lalla").build();
		UserDTO userDTO = UserDTO.builder().username("alal").build();
	}
}
