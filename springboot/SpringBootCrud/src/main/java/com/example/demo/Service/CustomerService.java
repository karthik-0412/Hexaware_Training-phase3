package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.JpaRepo.CustomerRepo;
import com.example.demo.entity.Customer;

@Service
public class CustomerService {
	@Autowired
	CustomerRepo Respo;
	public  Customer dsaveD(Customer c )
	 {
	    Customer  c1=	Respo.save(c);
	    return c1;
		
	 }
}
