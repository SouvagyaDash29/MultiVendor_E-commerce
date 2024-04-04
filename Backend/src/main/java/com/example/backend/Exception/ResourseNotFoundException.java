package com.example.backend.Exception;

public class ResourseNotFoundException extends RuntimeException{
    public ResourseNotFoundException() {
        super();
    }
    public ResourseNotFoundException(String message) {
        super(message);
    }


}
