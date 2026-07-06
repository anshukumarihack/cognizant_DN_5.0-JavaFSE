package com.cognizant.handson4;

import jakarta.persistence.EntityManagerFactory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.handson4.model.Employee;
import com.cognizant.handson4.hibernate.HibernateEmployeeDAO;
import com.cognizant.handson4.springdatajpa.EmployeeService;
import com.cognizant.handson4.springdatajpa.EmployeeRepository;

import java.util.List;

@SpringBootApplication
public class App implements CommandLineRunner {

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EmployeeRepository employeeRepository;

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Unwrapping SessionFactory from JPA EntityManagerFactory at runtime
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);

        System.out.println("\n==========================================");
        System.out.println("HANDS ON 4: RUNNING HIBERNATE VS SPRING DATA JPA DEMONSTRATION");
        System.out.println("==========================================\n");

        // 1. Persist using Hibernate approach
        System.out.println("[Step 1] Persisting Employee using Hibernate DAO...");
        HibernateEmployeeDAO hibernateDAO = new HibernateEmployeeDAO(sessionFactory);
        Employee emp1 = new Employee("Alice", "Engineering", 85000.0);
        Integer id1 = hibernateDAO.addEmployee(emp1);
        System.out.println("Hibernate DAO saved employee. Generated ID: " + id1);
        System.out.println("------------------------------------------\n");

        // 2. Persist using Spring Data JPA approach
        System.out.println("[Step 2] Persisting Employee using Spring Data JPA Service...");
        Employee emp2 = new Employee("Bob", "Marketing", 62000.0);
        employeeService.addEmployee(emp2);
        System.out.println("Spring Data JPA Service saved employee Bob (ID is auto-generated).");
        System.out.println("------------------------------------------\n");

        // 3. Retrieve all using Spring Data JPA to show database contents
        System.out.println("[Step 3] Retrieving all employees to verify persistence...");
        List<Employee> employees = employeeRepository.findAll();
        System.out.println("Retrieved " + employees.size() + " employees from database:");
        for (Employee emp : employees) {
            System.out.println("ID: " + emp.getId() + ", Name: " + emp.getName() 
                    + ", Department: " + emp.getDepartment() + ", Salary: " + emp.getSalary());
        }
        System.out.println("==========================================\n");
    }
}
