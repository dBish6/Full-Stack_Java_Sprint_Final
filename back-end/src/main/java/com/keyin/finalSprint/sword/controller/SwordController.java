package com.keyin.finalSprint.sword.controller;

import com.keyin.finalSprint.sword.exceptions.SwordNotFoundException;
import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
import com.keyin.finalSprint.sword.service.SwordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class SwordController {

    @Autowired
    SwordRepository swordRepo;

    @Autowired
    SwordService SS;

    @GetMapping("/swords")
    public List<Sword> getAllSwords(){
        return swordRepo.findAll();
    }

    @GetMapping("/sword/{id}")
    public Sword getSwordById(@PathVariable String id){
        return SS.serveSword(id);
    }

    @PostMapping("/sword")
    public void addSword(@RequestBody Sword sword){
        swordRepo.save(sword);
    }

    @PutMapping("/sword/{id}")
    public void editSword(@RequestBody Sword swordReplacement, @PathVariable String id){
        SS.replaceSword(swordReplacement,id);
    }

    @DeleteMapping("/sword/{id}")
    public void deleteSword(@PathVariable String id){
        swordRepo.deleteById(Long.parseLong(id));
    }
}
