package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

// Use fully-qualified name to avoid import resolution issues in some classpath setups

public class App {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        com.library.service.BookService bookService =
            context.getBean("bookService", com.library.service.BookService.class);

        bookService.showBook();

        ((ClassPathXmlApplicationContext) context).close();
    }
}