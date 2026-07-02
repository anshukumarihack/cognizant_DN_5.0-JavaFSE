# Spring Data JPA - Quick Example (Hands-on 1)

This project demonstrates the fundamentals of **Spring Data JPA** using **Spring Boot** and **MySQL**. It covers the creation of an entity, repository, service layer, database connectivity, and retrieval of data from a MySQL database.

---

## 📌 Objective

The objective of this hands-on is to understand:

- Spring Boot project structure
- Spring Data JPA configuration
- Hibernate ORM integration
- Entity mapping using JPA annotations
- Repository pattern using `JpaRepository`
- Service layer implementation
- Database connectivity with MySQL
- Fetching records from a database

---

## 🛠️ Technologies Used

- Java 17+
- Spring Boot 3.5.x
- Spring Data JPA
- Hibernate ORM
- MySQL Server
- Maven
- VS Code

---

## 📁 Project Structure

```
orm-learn
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── cognizant
│   │   │           └── ormlearn
│   │   │               ├── model
│   │   │               │   └── Country.java
│   │   │               │
│   │   │               ├── repository
│   │   │               │   └── CountryRepository.java
│   │   │               │
│   │   │               ├── service
│   │   │               │   └── CountryService.java
│   │   │               │
│   │   │               └── OrmLearnApplication.java
│   │   │
│   │   └── resources
│   │       └── application.properties
│   │
│   └── test
│
├── pom.xml
└── README.md
```

---

## ⚙️ Database Setup

Create the database:

```sql
CREATE DATABASE ormlearn;
USE ormlearn;
```

Create the table:

```sql
CREATE TABLE country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50)
);
```

Insert sample data:

```sql
INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
```

Verify the data:

```sql
SELECT * FROM country;
```

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd Spring_data/orm-learn
```

Build the project:

```bash
mvn clean install
```

Run the application:

```bash
mvn spring-boot:run
```

---

## 📷 Expected Output

```
Inside main

Start

Hibernate:
select c1_0.code, c1_0.name
from country c1_0

Countries=[
Country [code=IN, name=India],
Country [code=US, name=United States of America]
]

End
```

---

## SCREENSHOTS

<img width="841" height="382" alt="image" src="https://github.com/user-attachments/assets/2ae65c81-38bc-490f-adb0-2c4bb4be8af3" />

<img width="756" height="142" alt="image" src="https://github.com/user-attachments/assets/4e43a129-72df-4677-8038-3263bef71576" />

<img width="417" height="396" alt="Screenshot 2026-07-02 143352" src="https://github.com/user-attachments/assets/6e351022-37c4-4007-a892-6534fc506346" />

---

## 📚 Key Concepts Covered

- Spring Boot Application
- Spring Data JPA
- Hibernate ORM
- Entity Mapping
- Repository Pattern
- Dependency Injection
- Service Layer
- Transaction Management
- MySQL Database Connectivity
- Logging using SLF4J

---

## 📝 Learning Outcomes

After completing this hands-on, you will be able to:

- Configure a Spring Boot project with Maven.
- Connect a Spring Boot application to MySQL.
- Create JPA entities using annotations.
- Implement repositories using `JpaRepository`.
- Build a service layer using Spring.
- Retrieve data from a database using Spring Data JPA.
- Understand the basic architecture of a Spring Boot application.

---

## ✅ Status

**Completed Successfully ✔️**

- Spring Boot Project Created
- MySQL Database Connected
- Country Entity Created
- Repository Implemented
- Service Layer Implemented
- Data Retrieved Successfully Using Spring Data JPA

---

**Part of the Cognizant DN 5.0 - Java Full Stack Engineer Learning Program**
