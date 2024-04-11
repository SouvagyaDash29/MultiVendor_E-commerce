package com.example.backend.Service.Impl;



import com.example.backend.Model.Employee;
import com.example.backend.Repositary.EmployeeRepo;
import com.example.backend.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee addEmployee(Employee employee) {
        Employee save = employeeRepo.save(employee);
        return save;
    }

//    @Autowired
//    private EmployeeRepo passwordEncoder;


//    public String addEmployee(EmployeeDto employeeDto){
//
//        Employee employee = new Employee(
//
//                employeeDto.getEmployeeid(),
//                employeeDto.getEmployeename(),
//                employeeDto.getEmail(),
//                (employeeDto.getPassword())
//        );
//        employeeRepo.save(employee);
//
//        return employee.getEmployeename();
//    }
    }
