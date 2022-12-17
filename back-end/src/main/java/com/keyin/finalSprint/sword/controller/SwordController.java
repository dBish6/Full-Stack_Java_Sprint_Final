package com.keyin.finalSprint.sword.controller;

import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
import com.keyin.finalSprint.sword.service.SwordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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
        return SS.serveSwordByID(id);
    }

    @GetMapping("/sword/type/{type}")
    public List<Sword> getSwordByType(@PathVariable String type){
        return SS.serveSwordByType(type);
    }

    @GetMapping("/swords/search")
    public List<Sword> swordSearch(@RequestParam(name = "name") String param){
        return swordRepo.query(param);
    }

    @PostMapping("/sword")
    public Sword addSword(@RequestBody Sword sword){
        return swordRepo.save(sword);
    }

    @PutMapping("/sword/{id}")
    public Sword replaceSword(@RequestBody Sword swordReplacement, @PathVariable String id){
        return  SS.replaceSword(swordReplacement,id);
    }

    @PatchMapping("/sword/{id}")
    public Sword editSword(@RequestBody Sword swordUpdate, @PathVariable String id){
        return SS.editSword(swordUpdate,id);
    }

    @DeleteMapping("/sword/{id}")
    public void deleteSword(@PathVariable String id){
        swordRepo.deleteById(Long.parseLong(id));
    }
}
