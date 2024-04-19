package com.example.backend.Service;

import com.example.backend.Payload.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getById(Long userId);

    void deleteUser(Long userId);

    List<UserDto> findAllUsers();

    UserDto updateUser(Long userId, UserDto userDto);
}
