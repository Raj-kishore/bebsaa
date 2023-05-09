package com.naffal.ims.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.naffal.ims.model.User;

public interface UserService {

	User createUser(User user);

	ResponseEntity<User> updateUser(Long id, User user);

	List<User> getUsers();
	
	ResponseEntity<User> getUserById(Long id);
	
	ResponseEntity<Map<String, Boolean>> deleteUser(Long id);
	
	ResponseEntity<Map<String, Boolean>> deleteAll();

}
