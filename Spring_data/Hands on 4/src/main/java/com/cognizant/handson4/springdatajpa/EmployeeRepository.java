package com.cognizant.handson4.springdatajpa;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cognizant.handson4.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
