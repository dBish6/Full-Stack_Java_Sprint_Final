package com.keyin.finalSprint.sword.service;

import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class SwordServiceTest {

    @Mock
    SwordRepository swordRepo;

    @Test
    public void replaceSwordTest(){

        Sword swordReplacement = new Sword("name","type",12,20,99.99,"This is a test","https://www.test.com");

        // to be continued....
    }
}
