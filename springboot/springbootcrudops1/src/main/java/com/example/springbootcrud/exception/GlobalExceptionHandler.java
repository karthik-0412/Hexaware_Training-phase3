package com.example.springbootcrud.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomerAlreadyExistsException.class)
    
    
    
    public ResponseEntity<ApiError> handleAlreadyExists(
    		
    		
            CustomerAlreadyExistsException ex, HttpServletRequest req) {
    	
    	
    	
        return buildError(ex, req, HttpStatus.CONFLICT);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    @ExceptionHandler(CustomerNotFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(
            CustomerNotFoundException ex, HttpServletRequest req) {
    	
    	
    	
        return buildError(ex, req, HttpStatus.NOT_FOUND);
    }
    
    
    
    
    
    
    
    
    
    

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiError> handleRuntime(
            RuntimeException ex, HttpServletRequest req) {
        return buildError(ex, req, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private ResponseEntity<ApiError> buildError(Exception ex, HttpServletRequest req, HttpStatus status) {
        ApiError err = new ApiError();
        err.setStatus(status.value());
        err.setError(status.getReasonPhrase());
        err.setMessage(ex.getMessage());
        err.setPath(req.getRequestURI());
        return new ResponseEntity<>(err, status);
    }
}
