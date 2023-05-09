package com.naffal.ims.controller;

import java.util.HashMap;
import javax.validation.Valid;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*; //linkto() method


import com.naffal.ims.model.User;
import com.naffal.ims.response.MessageResponse;
import com.naffal.ims.service.UserServiceImpl;

//Open API; http://localhost:9002/swagger-ui/index.html#/
@CrossOrigin(origins = "http://localhost:5000") 
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserServiceImpl userServiceImpl;
	
	//Pending things for this app
	
	//hateos implemenation pending - hateos basically meta data in apis 
	// https://www.javatpoint.com/restful-web-services-hateoas
	//internationalization
    //	https://www.javatpoint.com/restful-web-services-internationalization
	// Content negotiation implementation
	// https://www.javatpoint.com/restful-web-services-content-negotiation
	// Actuator implementaiton 
	// https://www.javatpoint.com/restful-web-services-spring-boot-actuator
	
	@GetMapping("/all")
	public MessageResponse allAccess() {
		return new MessageResponse("Server is up.....");
	}

	@GetMapping("/greeting")
	@PreAuthorize("isAuthenticated()")
	public MessageResponse userAccess() {

		return new MessageResponse("Congratulations! You are an authenticated user.");
	}

	// get all users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		
//	    List<Item> allItems = itemServiceImpl.getItems();
//
//	    for (Item item : allItems) {
//	        Long itemId = item.getId();
//	        Link selfLink = linkTo(ItemController.class).slash(itemId).withSelfRel();
//	        item.add(selfLink);
//	        if (itemServiceImpl.getItemById(itemId).size() > 0) {
//	            Link ordersLink = linkTo(methodOn(CustomerController.class)
//	              .getOrdersForCustomer(customerId)).withRel("allOrders");
//	            customer.add(ordersLink);
//	        }
//	    }
//
//	    Link link = linkTo(CustomerController.class).withSelfRel();
//	    CollectionModel<Customer> result = CollectionModel.of(allCustomers, link);
//	    return result;
		return userServiceImpl.getUsers();
	}

	// create user rest api
	@PostMapping("/users")
	public User createUser(@Valid @RequestBody User user) {
		return userServiceImpl.createUser(user);
	}

	// get user by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		return userServiceImpl.getUserById(id);
	}

	// update user rest api
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		return userServiceImpl.updateUser(id, userDetails);
	}

	// delete all users rest api
	@DeleteMapping("/users")
	public ResponseEntity<Map<String, Boolean>> deleteAllUsers() {
		return userServiceImpl.deleteAll();
	}

	// delete user rest api
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		return userServiceImpl.deleteUser(id);
	}

}
