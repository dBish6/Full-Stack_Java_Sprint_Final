package com.keyin.finalSprint.sword.respository;

import com.keyin.finalSprint.sword.model.Sword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "swords",path = "swords")
@Repository
public interface SwordRepository extends JpaRepository<Sword, Long> {
//
//    Sword findById(@Param("id") long id);
//
//    List<Sword> findAll();
}
