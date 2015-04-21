package com.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Sample controller for going to the home page with a message
 */
@Controller
public class HomeController {
	@RequestMapping("/")
	public String home(Model model) {		
		return "home";
	}

}
