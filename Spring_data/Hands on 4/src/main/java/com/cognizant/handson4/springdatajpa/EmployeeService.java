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
    @SuppressWarnings("null")
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
