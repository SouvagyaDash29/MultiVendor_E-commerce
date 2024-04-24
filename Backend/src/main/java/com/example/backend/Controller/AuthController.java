package com.example.backend.Controller;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Payload.JwtRequest;
import com.example.backend.Payload.JwtResponse;
import com.example.backend.Payload.UserDto;
import com.example.backend.Security.JwtHelper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000/")
public class AuthController {

    @Autowired
    private AuthenticationManager manager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private ModelMapper model;
    @Autowired
    private JwtHelper helper;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request){
        this.authenticateUser(request.getUsername(), request.getPassword());
       UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
        String token = this.helper.generateToken(userDetails);
        JwtResponse response = new JwtResponse();
        response.setToken(token);
        response.setUser(this.model.map(userDetails, UserDto.class));
        return new ResponseEntity<JwtResponse>(response, HttpStatus.ACCEPTED);
    }

    private void authenticateUser(String Username, String Password){

        try{
            manager.authenticate(new UsernamePasswordAuthenticationToken(Username,Password));
        } catch (BadCredentialsException e){
            throw new ResourceNotFoundException("Invalid username or password");
        } catch (DisabledException e){
            throw new ResourceNotFoundException("User is not active");
        }
    }
}
