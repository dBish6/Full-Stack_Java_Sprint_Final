package com.keyin.finalSprint.user.controller;

import com.keyin.finalSprint.user.model.User;
import com.keyin.finalSprint.user.repository.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class UserController {
    @Autowired
    UserRepository userRepo;

    @GetMapping("/users")
    public List<User> getAllUser() {
        return  userRepo.findAll();
    }

    @PostMapping("/user")
    public void createUser(@RequestBody User user) {
        userRepo.save(user);
    }

    @PutMapping("/user/{id}")
    public void updateUser(@PathVariable String id, @RequestBody User user, HttpServletResponse response) {
        Optional<User> returnValue = userRepo.findById(Long.parseLong(id));
        User userToUpdate;

        if (returnValue.isPresent()) {
            userToUpdate = returnValue.get();

            userToUpdate.setUsername(user.getUsername());

            userRepo.save(userToUpdate);
        } else {
            try {
                response.sendError(404, "User with id: " + user.getId() + " not found.");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

}
