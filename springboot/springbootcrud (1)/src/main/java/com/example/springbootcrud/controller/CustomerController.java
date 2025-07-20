package com.example.springbootcrud.controller;

import com.example.springbootcrud.entity.Customer;
import com.example.springbootcrud.entity.CustomerDTO;
import com.example.springbootcrud.exception.DepositeAmountShouldbeMoreException;
import com.example.springbootcrud.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService service;

    @PostMapping("/saveData")
    public ResponseEntity<CustomerDTO> saveData(@RequestBody CustomerDTO dto) {
        CustomerDTO saved = service.save(dto);
        HttpHeaders headers = new HttpHeaders();
        headers.add("header-info", "Customer added to backend");
        return new ResponseEntity<>(saved, headers, HttpStatus.CREATED);
    }

    @GetMapping("/getUsersPage")
    public ResponseEntity<Page<Customer>> getPaginated(@RequestParam int page,
                                                       @RequestParam int size,
                                                       @RequestParam(defaultValue = "name") String sortBy) {

        return ResponseEntity.ok(service.getPaginated(page, size, sortBy));
    }

    @GetMapping("/getData/{ac}")
    public Customer getById(@PathVariable int ac) {
        return service.getById(ac);
    }

    @GetMapping("/getDataN/{name}")
    public Customer getByName(@PathVariable String name) {
        return service.getByName(name);
    }

    @DeleteMapping("/getDelete/{ac}")
    public void delete(@PathVariable int ac) {
        service.delete(ac);
    }

    @PutMapping("/deposit/{ac}/{amt}")
    public Customer deposit(@PathVariable int ac, @PathVariable double amt) throws DepositeAmountShouldbeMoreException {
        return service.deposit(ac, amt);
    }
}
