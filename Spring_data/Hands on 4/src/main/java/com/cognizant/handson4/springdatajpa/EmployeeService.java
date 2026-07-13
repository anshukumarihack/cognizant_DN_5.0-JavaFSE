package com.cognizant.handson4.springdatajpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cognizant.handson4.model.Employee;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Transactional
    public void addEmployee(@org.springframework.lang.NonNull Employee employee) {
        employeeRepository.save(employee);
    }
}
