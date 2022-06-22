package com.hoseong.react.user.controller;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hoseong.react.model.User;
import com.hoseong.react.user.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService uService;
	
	// bean등록된 비밀번호암호화 클래스
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// 유저조회
	@GetMapping("/api/user")
	public ArrayList<User> selectUser(){
		return uService.selectUser();
	}
	
	// 유저추가
	@PostMapping("/api/user/create")
	public String insertUser(@RequestBody User user) throws Exception {
		//System.out.println(user);
//		throw new Exception();
		if(uService.insertUser(user) == 1) {
			return "success";
		} else {
			return "DB insert fail";
		}
	}
	
	// 유저삭제
	@PostMapping("/api/user/delete")
	public String deleteUser(@RequestBody Map<String, String> list) {
		if(uService.deleteUser(list.get("name")) == 1) {
			return "success";
		} else {
			return "DB delete fail";
		}
	}
	
	// 유저업데이트
	@PostMapping("/api/user/update")
	public String updateUser(@RequestBody User user) {
//		System.out.println(user);
		if(uService.updateUser(user) == 1) {
			return "success";
		} else {
			return "DB update fail";
		}
	}
	
}
