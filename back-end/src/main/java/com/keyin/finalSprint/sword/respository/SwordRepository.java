package com.keyin.finalSprint.sword.respository;

import com.keyin.finalSprint.sword.model.Sword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "swords",path = "swords")
@Repository
public interface SwordRepository extends JpaRepository<Sword, Long> {

}
