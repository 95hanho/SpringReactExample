package com.hoseong.react.user.service;

import java.util.ArrayList;

import com.hoseong.react.model.User;

public interface UserService {

	ArrayList<User> selectUser();

	int insertUser(User user);

	int deleteUser(String name);

	int updateUser(User user);

}
