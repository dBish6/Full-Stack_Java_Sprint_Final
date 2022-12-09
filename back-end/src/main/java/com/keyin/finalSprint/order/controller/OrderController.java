package com.keyin.finalSprint.order.controller;

import com.keyin.finalSprint.order.model.Order;
import com.keyin.finalSprint.order.respository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrderController {

    @Autowired
    private OrderRepository orderRepo;

    @PostMapping("/order")
    public void createOrder(@RequestBody Order order){
        orderRepo.save(order);
    }
}
