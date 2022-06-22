package com.hoseong.react.user.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.hoseong.react.model.User;

@Mapper
public interface UserMapper {

	ArrayList<User> selectUser();

	int insertUser(User user);

	int deleteUser(String name);

	int updateUser(User user);

}
