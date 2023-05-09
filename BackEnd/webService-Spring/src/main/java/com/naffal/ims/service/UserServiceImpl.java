package com.naffal.ims.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.naffal.ims.exception.ResourceNotFoundException;
import com.naffal.ims.model.User;
import com.naffal.ims.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public ResponseEntity<User> updateUser(Long id, User userDetails) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		user.setUserName(userDetails.getUserName());
		user.setUserRole(userDetails.getUserRole());
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	@Override
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@Override
	public ResponseEntity<User> getUserById(Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		return ResponseEntity.ok(user);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> deleteAll() {
		userRepository.deleteAll();
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted all users", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> deleteUser(Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}