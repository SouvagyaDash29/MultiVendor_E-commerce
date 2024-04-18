package com.example.backend.Controller;


import com.example.backend.Model.Employee;
import com.example.backend.Payload.ProductDto;
import com.example.backend.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/employee")

@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
private EmployeeService employeeService;
    @PostMapping(path = "/save")
    public ResponseEntity<Employee>add(@RequestBody Employee employee)
    {
        Employee employee1 = employeeService.addEmployee(employee);
     //   return new ResponseEntity<>(employee1, HttpStatus.CREATED) ;
    return ResponseEntity.ok(employee1);
    }
    }

