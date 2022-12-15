package com.keyin.finalSprint.user.controller;


import com.keyin.finalSprint.user.model.User;
import com.keyin.finalSprint.user.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/api/")
public class UserController {
    @Autowired
    UserRepository userRepo;

    @GetMapping("/users")
    public void listUsers(User user) {
        List<User> listUsers = userRepo.findAll();

    }

    @PostMapping("/login")
    public void addNote(@RequestBody User user, HttpServletRequest request) {
        List<String> sessions = (List<String>) request.getSession().getAttribute("SESSION");
        if(sessions == null) {
            sessions = new ArrayList<>();
            request.getSession().setAttribute("SESSION", user.getId());
        } else {
            sessions.add(Long.toString(user.getId()));
            request.getSession().setAttribute("SESSION", user.getId());

        }

    }
    @PostMapping("/logout")
    public void destroySession(HttpServletRequest request) {
        request.getSession().invalidate();

    }

    @PostMapping("/register")
    public User processRegister(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

       return userRepo.save(user);

    }

}

