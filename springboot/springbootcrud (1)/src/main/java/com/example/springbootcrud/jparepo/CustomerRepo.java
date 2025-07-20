package com.example.springbootcrud.jparepo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springbootcrud.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    Customer findByName(String name);
    Customer findByActno(int actno);
}
