package com.keyin.finalSprint.sword.service;

import com.keyin.finalSprint.sword.exceptions.SwordNotFoundException;
import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

// The service class is where all your "business logic" goes for your controllers. Basically, all the
// code that you do before you lastly save or get from the database goes here; autowired to use class.
@Service
public class SwordService {

    @Autowired
    SwordRepository swordRepo;

    public Sword serveSword(String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordFound;
        if(swordReturned.isPresent()){
            swordFound = swordReturned.get();
            return swordFound;
        } else {
            throw new SwordNotFoundException(Long.parseLong(id));
        }
    }

    public void replaceSword(Sword swordReplacement, String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordUpdated;
        if(swordReturned.isPresent()){
            swordUpdated = swordReturned.get();
            swordUpdated.setDescription(swordReplacement.getDescription());
            swordUpdated.setType(swordReplacement.getType());
            swordUpdated.setLength(swordReplacement.getLength());
            swordUpdated.setMass(swordReplacement.getMass());
            swordUpdated.setName(swordReplacement.getName());
            swordUpdated.setPrice(swordReplacement.getPrice());
            swordUpdated.setImage_url(swordReplacement.getImage_url());
            swordRepo.save(swordUpdated);
        } else {
            throw new SwordNotFoundException(Long.parseLong(id));
        }
    }

    public void editSword(Sword sword, String id){
        Optional<Sword> swordReturned = swordRepo.findById(Long.parseLong(id));
        Sword swordUpdated;
        if(swordReturned.isPresent()){
            swordUpdated = swordReturned.get();
            if(sword.getType() != null){
                swordUpdated.setType(sword.getType());
            }
            if(sword.getName() != null){
                swordUpdated.setName(sword.getName());
            }
            if(sword.getPrice() != 0){
                swordUpdated.setPrice(sword.getPrice());
            }
            if(sword.getDescription() != null){
                swordUpdated.setDescription(sword.getDescription());
            }
            swordRepo.save(swordUpdated);
        } else {
            throw new SwordNotFoundException(Long.parseLong(id));
        }
    }
}
