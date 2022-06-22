package com.hoseong.react.user.dao;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hoseong.react.model.User;
import com.hoseong.react.user.mapper.UserMapper;

@Repository
public class UserDAO {
	
	@Autowired
	private UserMapper uMapper;

	public ArrayList<User> selectUser() {
		return uMapper.selectUser();
	}

	public int insertUser(User user) {
		return uMapper.insertUser(user);
	}

	public int deleteUser(String name) {
		return uMapper.deleteUser(name);
	}

	public int updateUser(User user) {
		return uMapper.updateUser(user);
	}

}
