package com.naffal.ims.exception;

import java.util.Date;

//Generic exception class for all RESTful services

public class ExceptionResponse {
	
	private Date timeStamp; 
	private String message; 
	private String detail;
	
	public ExceptionResponse(Date date, String message, String detail) {
		super();
		this.timeStamp = date;
		this.message = message;
		this.detail = detail;
	} 
	
}
