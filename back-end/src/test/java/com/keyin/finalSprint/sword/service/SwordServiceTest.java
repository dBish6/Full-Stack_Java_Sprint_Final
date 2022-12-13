package com.keyin.finalSprint.sword.service;

import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class SwordServiceTest {

    @Mock
    private SwordRepository swordRepo;

    @InjectMocks
    private SwordService SS;


    @Test
    public void serveSwordByIdTest_Success(){

        Sword sword1 = new Sword(1L,"sword 1","Bastard Sword",32,8,99.99,"One hell of a sword","https://www.killerswords.com");

        Mockito.when(swordRepo.findById(1L)).thenReturn(Optional.of(sword1));

        Sword swordReturned = SS.serveSwordByID("1");

        Assertions.assertNotNull(swordReturned);
        Assertions.assertEquals(sword1.getName(),swordReturned.getName());
    }


}
