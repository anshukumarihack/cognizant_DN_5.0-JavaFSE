package com.cognizant.springlearn.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.info("Start getCountry(String code) service method execution for code: {}", code);
        
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        @SuppressWarnings("unchecked")
        List<Country> countries = context.getBean("countryList", List.class);
        
        Country foundCountry = countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> {
                    LOGGER.error("Country not found exception thrown for code: {}", code);
                    return new CountryNotFoundException("Country not found for code: " + code);
                });
        
        LOGGER.info("End getCountry(String code) service method execution. Found: {}", foundCountry);
        return foundCountry;
    }
}
