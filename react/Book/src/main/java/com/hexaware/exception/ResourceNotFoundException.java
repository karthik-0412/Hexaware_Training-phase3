package com.hexaware.exception;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends  Exception{

	public ResourceNotFoundException(String message) {
		super(message);
	}

}
