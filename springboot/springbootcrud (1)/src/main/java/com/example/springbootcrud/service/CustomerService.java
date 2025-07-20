package com.example.springbootcrud.service;

import com.example.springbootcrud.entity.Customer;
import com.example.springbootcrud.entity.CustomerDTO;
import com.example.springbootcrud.exception.CustomerAlreadyExistsException;
import com.example.springbootcrud.exception.CustomerNotFoundException;
import com.example.springbootcrud.exception.DepositeAmountShouldbeMoreException;
import com.example.springbootcrud.jparepo.CustomerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    private Customer dtoToCustomer(CustomerDTO dto) {
        return mapper.map(dto, Customer.class);
    }

    private CustomerDTO customerToDto(Customer c) {
        return mapper.map(c, CustomerDTO.class);
    }

    public CustomerDTO save(CustomerDTO dto) {
        Customer entity = dtoToCustomer(dto);

        if (repo.existsById(entity.getActno())) {
            throw new CustomerAlreadyExistsException(
                    "Customer with account number " + entity.getActno() + " already exists");
        }

        return customerToDto(repo.save(entity));
    }

    public Page<Customer> getPaginated(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return repo.findAll(pageable);
    }

    public Customer getById(int actno) {
        return repo.findById(actno)
                   .orElseThrow(() -> new CustomerNotFoundException("Customer " + actno + " not found"));
    }

    public Customer getByName(String name) {
        Customer c = repo.findByName(name);
        if (c == null) {
            throw new CustomerNotFoundException("Customer '" + name + "' not found");
        }
        return c;
    }

    public void delete(int actno) {
        Customer c = getById(actno);
        if(c== null) {
       	 throw new CustomerNotFoundException("Customer '" + actno + "' not found");
       }
        repo.delete(c);
    }

    public Customer deposit(int actno, double amt) throws DepositeAmountShouldbeMoreException {
    	if(amt<100) {
    		throw new DepositeAmountShouldbeMoreException("Minimum deposite amount should 100");
    	}
    		
        Customer c = getById(actno);
        if(c== null) {
        	 throw new CustomerNotFoundException("Customer '" + actno + "' not found");
        }
        c.setBalance(c.getBalance() + amt);
        return repo.save(c);
    }
}
