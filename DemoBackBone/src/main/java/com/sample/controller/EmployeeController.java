package com.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sample.entity.Employee;
import com.sample.service.EmployeeService;

@Controller
@RequestMapping("employee")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@RequestMapping(value = "", method = {RequestMethod.POST})
	@ResponseBody
	public Employee add(@RequestBody Employee employee) {
		return employeeService.save(employee);	
	}
	
	@RequestMapping(value = "")
	@ResponseBody
	public List<Employee> list() {
		return employeeService.findAll();
	}
	
	@RequestMapping(value="/{id}")
	@ResponseBody
	public Employee getById(@PathVariable("id") Long id){
		return employeeService.findOne(id);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public boolean update(@RequestBody Employee employee){
		return employeeService.update(employee);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public boolean delete(@PathVariable("id") Long id) {
		return employeeService.delete(id);
	}
}
