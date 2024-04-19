package com.example.backend.Payload;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;

import java.util.Date;
@Data
public class UserDto {

    private Long userId;

    private String Name;

    private String email;

    private String password;

    private String address;

    private String gender;

    private String phone;

    private Date date;


}