package com.naffal.ims;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Exclude auto configuration for faster startup of the application
// Following auto configuration done by Spring boot:
// DispatcherServletAutoConfiguration, DataSourceAutoConfiguration, JacksonAutoConfiguration, ErrorMvcAutoConfiguration 
// @SpringBootApplication (exclude={JacksonAutoConfiguration.class, JmxAutoConfiguration.class})  

//If you added @SpringBootApplication annotation to the class, 
//you do not need to add the @EnableAutoConfiguration, @ComponentScan and @SpringBootConfiguration annotation. 
//The @SpringBootApplication annotation includes all other annotations.

@SpringBootApplication
public class ImsApplication {
	private static final Logger logger = LoggerFactory.getLogger(ImsApplication.class);

	// REST architecture emphasized by Roy Thomas Fielding
	// REST is an architecture unlike SOAP which is a protocol
	public static void main(String[] args) {
		logger.debug("Main method called");

		// logger test
		logger.info("this is a info message");
		logger.warn("this is a warn message");
		logger.error("this is a error message");

		SpringApplication.run(ImsApplication.class, args);
	}

	public void run(String... arg0) throws Exception {
		// Runner is not fired, need to check later.
		// Ref : https://www.tutorialspoint.com/spring_boot/spring_boot_runners.htm
		logger.debug("Runner called");
	}
	
	
	// only /health is enables by default. Other actuator end points are disabled due to security concerns.
	// refer the link to enable the rest. 
	// https://www.baeldung.com/spring-boot-actuators

}
