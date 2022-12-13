package com.keyin.finalSprint.sword.service;

import com.keyin.finalSprint.sword.model.Sword;
import com.keyin.finalSprint.sword.respository.SwordRepository;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class SwordServiceTest {

    @Mock
    private SwordRepository swordRepo;

    @InjectMocks
    private SwordService SS;

    Sword swordUpdated;


}
