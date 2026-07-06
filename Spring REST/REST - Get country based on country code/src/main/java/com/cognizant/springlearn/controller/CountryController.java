package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping({"/countries/{code}", "/country/{code}"})
    public Country getCountry(@PathVariable("code") String code) {
        LOGGER.info("Start getCountry() controller method execution for code: {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("End getCountry() controller method execution. Country: {}", country);
        return country;
    }
}
