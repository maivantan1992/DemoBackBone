package com.sample.service;

import java.util.List;

import com.sample.entity.Employee;

public interface EmployeeService {
	Employee save(Employee newEmployee);
	Employee findOne(Long id);
	List<Employee> findAll();
	boolean update(Employee modifyEmployee);
	boolean delete(Long id);
}
