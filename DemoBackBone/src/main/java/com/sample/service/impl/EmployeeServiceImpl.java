package com.sample.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.entity.Employee;
import com.sample.repo.EmployeeRepo;
import com.sample.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepo employeeRepo;
	
	@Override
	public Employee save(Employee newEmployee) {
		return employeeRepo.save(newEmployee);
	}

	@Override
	public Employee findOne(Long id) {
		return employeeRepo.findOne(id);
	}

	@Override
	public List<Employee> findAll() {
		return employeeRepo.findAll();
	}

	@Override
	public boolean update(Employee modifyEmployee) {
		if(modifyEmployee != null && employeeRepo.exists(modifyEmployee.getId())){
			employeeRepo.save(modifyEmployee);
			return true;
		}
		return false;
	}

	@Override
	public boolean delete(Long id) {
		if (employeeRepo.exists(id)) {
			employeeRepo.delete(id);
			return true;
		}
		return false;
	}

}
