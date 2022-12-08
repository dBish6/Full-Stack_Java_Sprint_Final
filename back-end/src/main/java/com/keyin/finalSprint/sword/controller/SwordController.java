package com.keyin.finalSprint.sword.controller;

import com.keyin.finalSprint.sword.exceptions.SwordNotFoundException;
import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
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

    @GetMapping("/swords")
    public List<Sword> getAllSwords(){
        return swordRepo.findAll();
    }

    @GetMapping("/sword/{id}")
    public Sword getSwordById(@PathVariable String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordFound;
        if(swordReturned.isPresent()){
            swordFound = swordReturned.get();
            return swordFound;
        } else {
            throw new SwordNotFoundException();
        }
    }

    @PostMapping("/sword")
    public void addSword(@RequestBody Sword sword){
        swordRepo.save(sword);
    }

    @PutMapping("/sword/{id}")
    public void editSword(@RequestBody Sword swordUpdate, @PathVariable String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordToUpdate;
        if(swordReturned.isPresent()){
            swordToUpdate = swordReturned.get();
            swordToUpdate = new Sword(swordUpdate.getName(),
                    swordUpdate.getType(),swordUpdate.getLength(),
                    swordUpdate.getMass(),swordUpdate.getPrice(),
                    swordUpdate.getDescription(),swordUpdate.getImage_url());
            swordRepo.save(swordUpdate);
        } else {
            throw new SwordNotFoundException();
        }
    }

    @DeleteMapping("/sword/{id}")
    public void deleteSword(@PathVariable String id){
        swordRepo.deleteById(Long.parseLong(id));
    }
}
