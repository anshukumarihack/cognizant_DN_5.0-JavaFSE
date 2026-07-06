package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("Starting Spring Boot context...");
        SpringApplication.run(SpringLearnApplication.class, args);
        
        displayCountry();
    }

    public static void displayCountry() {
        LOGGER.info("Initializing ClassPathXmlApplicationContext...");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        LOGGER.info("Retrieving country bean from context...");
        Country country = context.getBean("country", Country.class);
        
        LOGGER.debug("Country : {}", country.toString());
        
        // Close context to prevent resource leaks
        if (context instanceof ClassPathXmlApplicationContext) {
            ((ClassPathXmlApplicationContext) context).close();
        }
    }
}
