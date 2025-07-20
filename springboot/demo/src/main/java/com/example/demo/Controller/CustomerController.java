package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.CustomerService;
import com.example.demo.entity.Customer;

@RestController
public class CustomerController {
    @Autowired
    CustomerService service;

    @PostMapping("/saveData")
    public Customer saveData1(@RequestBody Customer c) {
        Customer c1 = service.dsaveD(c);
        return c1;
    }

}
