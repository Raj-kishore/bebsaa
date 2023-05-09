package com.naffal.ims.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import org.springframework.hateoas.Link;

@Entity
@Table(name = "Users", uniqueConstraints={@UniqueConstraint(columnNames={"user_name"})})
//@ApiModel(description="All details about the item") //visible in swagger http://localhost:9000/v2/api-docs  
public class User { // POJO class

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id", unique = true)
	private long userId;

	@Column(name = "user_name")
	@Size(min = 2, message = "{validation.name.size.too_short}")
	@Size(max = 20, message = "{validation.name.size.too_long}")
	// @ApiModelProperty(notes="name should have 2 to 20 characters") //
	// http://localhost:9000/v2/api-docs
	private String userName;


	@Column(name = "email", unique = true)
	private String email;

	@Column(name = "address")
	private String address;

	@Column(name = "phone_no")
	private Long phoneNo;

	@Column(name = "password")
	private String password;

	@Column(name = "user_role")
	private Long userRole; // buyer, seller, admin : 0,1,2

	public User() { // no-arg constructor

	}

	public User(long userId,
			@Size(min = 2, message = "{validation.name.size.too_short}") @Size(max = 20, message = "{validation.name.size.too_long}") String userName,
			String password,
			Long phoneNo,
			String address,
			String email, 
			Long userRole) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.phoneNo = phoneNo;
		this.address = address;
		this.userRole = userRole;
	}

	public User(String username, Long phoneNo, String password) {
		this.userName = username;
		this.phoneNo = phoneNo;
		this.password = password;
	}




	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserName() {
		return userName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Long getUserRole() {
		return userRole;
	}

	public void setUserRole(Long userRole) {
		this.userRole = userRole;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userRole=" + userRole + "]";
	}

}
