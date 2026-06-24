CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01);

    COMMIT;

END;
/