package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    public String getCode() {
        LOGGER.debug("Inside getCode() getter method. Code: {}", code);
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode() setter method. Setting code: {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName() getter method. Name: {}", name);
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName() setter method. Setting name: {}", name);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
