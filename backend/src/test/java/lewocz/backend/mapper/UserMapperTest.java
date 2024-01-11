package lewocz.backend.mapper;

import lewocz.backend.dto.UserDTO;
import lewocz.backend.model.User;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;

import static org.junit.jupiter.api.Assertions.*;

class UserMapperTest {

    private final UserMapper userMapper = Mappers.getMapper(UserMapper.class);
    @Test
    void userDtoToUser() {
        UserDTO userDTO = UserDTO.builder()
                .username("testuser")
                .email("testuser@example.com")
                .build();

        User user = userMapper.userDtoToUser(userDTO);

        assertNotNull(user);
        assertEquals(userDTO.getUsername(), user.getUsername());
        assertEquals(userDTO.getEmail(), user.getEmail());
    }

    @Test
    void userToUserDto() {
        User user = User.builder()
                .username("testuser")
                .password("password")
                .email("testuser@example.com")
                .build();

        UserDTO userDTO = userMapper.userToUserDto(user);

        assertNotNull(userDTO);
        assertEquals(user.getUsername(), userDTO.getUsername());
        assertEquals(user.getEmail(), userDTO.getEmail());
    }
}