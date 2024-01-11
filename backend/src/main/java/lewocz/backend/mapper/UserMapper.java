package lewocz.backend.mapper;

import lewocz.backend.dto.UserDTO;
import lewocz.backend.model.User;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {
    User userDtoToUser(UserDTO userDTO);
    UserDTO userToUserDto(User user);
}
