package com.cognizant.handson4.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.HibernateException;
import com.cognizant.handson4.model.Employee;

public class HibernateEmployeeDAO {

    private SessionFactory factory;

    public HibernateEmployeeDAO(SessionFactory factory) {
        this.factory = factory;
    }

    /* Method to CREATE an employee in the database using traditional Hibernate API */
    public Integer addEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeID = null;

        try {
            tx = session.beginTransaction();
            // In modern Hibernate, save() can return the generated ID or serializable ID
            employeeID = (Integer) session.save(employee);
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) {
                tx.rollback();
            }
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employeeID;
    }
}
