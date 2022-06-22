package com.hoseong.react.model;

import org.apache.ibatis.type.Alias;

@Alias("User")
public class User {
	private String name;
	private String nickName;
	private String phone;
	private String place;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(String name, String nickName, String phone, String place) {
		super();
		this.name = name;
		this.nickName = nickName;
		this.phone = phone;
		this.place = place;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	@Override
	public String toString() {
		return "User [name=" + name + ", nickName=" + nickName + ", phone=" + phone + ", place=" + place + "]";
	}

}
