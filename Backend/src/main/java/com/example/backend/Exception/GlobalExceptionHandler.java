package com.example.backend.Exception;


import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public String HandelResourseNotFoundException(ResourceNotFoundException ex){

        return ex.getMessage();
    }
}
