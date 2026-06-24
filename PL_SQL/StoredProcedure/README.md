# Bank Management System - PL/SQL Stored Procedures

## Overview

This project demonstrates the implementation of Stored Procedures in Oracle PL/SQL for common banking operations.

### Technologies Used

- Oracle Database 21c XE
- Oracle SQL Developer Extension for VS Code
- SQL
- PL/SQL

---

# Exercise 3: Stored Procedures

## Scenario 1: Process Monthly Interest

### Objective

Apply a monthly interest rate of 1% to all savings accounts.

### Stored Procedure

`ProcessMonthlyInterest`

### Output

After executing the procedure, the balances of all savings accounts were updated successfully.

<img width="652" height="137" alt="image" src="https://github.com/user-attachments/assets/9bd97cd4-fdc9-4138-855e-2db8a0ee92e0" />


---

## Scenario 2: Employee Bonus Update

### Objective

Update employee salaries by applying a bonus percentage to employees belonging to a specified department.

### Stored Procedure

`UpdateEmployeeBonus`

### Example

Applied a 10% bonus to employees in the IT department.

### Output

Employee salaries were updated successfully.

<img width="942" height="132" alt="image" src="https://github.com/user-attachments/assets/bd80c695-ec09-46b2-a4e6-e0d5ba7317e1" />


---

## Scenario 3: Fund Transfer Between Accounts

### Objective

Transfer funds from one account to another after verifying sufficient balance in the source account.

### Stored Procedure

`TransferFunds`

### Example

Transferred 2000 from Account 201 to Account 202.

### Output

The transfer was completed successfully and account balances were updated.

<img width="668" height="122" alt="image" src="https://github.com/user-attachments/assets/760ebd67-ed53-45cb-a272-36ee20a9b465" />


---

# Learning Outcomes

- Created and executed stored procedures.
- Used procedure parameters.
- Implemented account balance updates using PL/SQL.
- Applied bonus calculations based on department and percentage.
- Performed secure fund transfers between accounts.
- Managed transactions using COMMIT.
- Verified database operations through SQL queries.
- Gained practical experience with Oracle PL/SQL programming.
