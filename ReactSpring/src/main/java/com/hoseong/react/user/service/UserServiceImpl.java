package com.hoseong.react.user.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hoseong.react.model.User;
import com.hoseong.react.user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO uDAO;

	@Override
	public ArrayList<User> selectUser() {
		return uDAO.selectUser();
	}

	@Override
	public int insertUser(User user) {
		return uDAO.insertUser(user);
	}

	@Override
	public int deleteUser(String name) {
		return uDAO.deleteUser(name);
	}

	@Override
	public int updateUser(User user) {
		return uDAO.updateUser(user);
	}
	
	
}
