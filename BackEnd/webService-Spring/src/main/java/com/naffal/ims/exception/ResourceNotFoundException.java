package com.naffal.ims.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



//disabling the @ResponseStatus annotation, it will respond with 500 code [as default], 
@ResponseStatus(value = HttpStatus.NOT_FOUND) //it must throw an appropriate 404 code
public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String message) {
		super(message);
	   // logger.debug ("Error Message Caught >> {} ",message);
	}
}
