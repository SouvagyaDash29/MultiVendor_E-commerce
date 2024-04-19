package com.example.backend.Payload;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserDto {
    private Long userId;
    private String name;
    private String email;
    private String password;
    private String address;
    private String gender;
    private String phone;
    private Date date;
}
