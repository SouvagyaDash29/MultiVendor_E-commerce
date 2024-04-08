package com.example.backend.Repositary;


import com.example.backend.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

//@EnableJpaRepositories
//@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {


//    String encode(String password);
}
