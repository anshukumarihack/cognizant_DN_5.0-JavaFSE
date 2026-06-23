SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN
    (
        SELECT LoanID,
               CustomerID,
               DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE
                          AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan_rec.CustomerID
            || ' Loan '
            || loan_rec.LoanID
            || ' is due on '
            || loan_rec.DueDate
        );
    END LOOP;
END;
/