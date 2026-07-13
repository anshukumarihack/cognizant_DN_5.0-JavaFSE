# Creating Microservices for Account and Loan

This project contains two independent Spring Boot microservices representing a bank's account and loan domains:
1. **Account Microservice**: Handled by the `account` project. Exposes endpoints on port `8080` (default).
2. **Loan Microservice**: Handled by the `loan` project. Exposes endpoints on port `8081` (custom).

---

## 1. Project Layout
Under the `Microservices` directory, we have:
- **`account/`**: The Maven project for the Account Service.
- **`loan/`**: The Maven project for the Loan Service.

---

## 2. Technical Walkthrough & SME Concepts

### A. Account Microservice Specification
- **Base Package**: `com.cognizant.account`
- **Port**: `8080` (Default Port)
- **Controller Class**: `AccountController`
- **GET Endpoint**: `/accounts/{number}`
- **Sample JSON Response**:
  ```json
  {
    "number": "00987987973432",
    "type": "savings",
    "balance": 234343.0
  }
  ```

### B. Loan Microservice Specification
- **Base Package**: `com.cognizant.loan`
- **Port**: `8081` (Configured in `application.properties` to avoid bind address exceptions)
- **Controller Class**: `LoanController`
- **GET Endpoint**: `/loans/{number}`
- **Sample JSON Response**:
  ```json
  {
    "number": "H00987987972342",
    "type": "car",
    "loan": 400000.0,
    "emi": 3258.0,
    "tenure": 18
  }
  ```

### C. Port Bind Conflict and Resolution
When multiple microservices run on the same machine, they cannot listen on the same TCP port. 
- By default, Spring Boot web applications run on port `8080`.
- If the **Account Service** is already running, launching the **Loan Service** on port `8080` fails with the error:
  `java.net.BindException: Address already in use: bind`
- **Resolution**: We resolve the conflict by adding the `server.port` configuration property to `loan/src/main/resources/application.properties`:
  ```properties
  server.port=8081
  ```

---

## 3. How to Run and Test

### Run Account Microservice (Port 8080)
From the workspace root, run:
```powershell
mvn spring-boot:run -pl "Microservices/account"
```

### Run Loan Microservice (Port 8081)
In a separate terminal window, run:
```powershell
mvn spring-boot:run -pl "Microservices/loan"
```

### Test Endpoints via Browser/CURL
You can access both microservices concurrently:
- **Account Service**: `http://localhost:8080/accounts/00987987973432`
- **Loan Service**: `http://localhost:8081/loans/H00987987972342`
