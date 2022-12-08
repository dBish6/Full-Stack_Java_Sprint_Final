package com.keyin.finalSprint.order.controller;

import com.keyin.finalSprint.order.model.Order;
import com.keyin.finalSprint.order.respository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepo;

    @PostMapping("/order")
    public void createOrder(@RequestBody Order order){
        orderRepo.save(order);
    }
}
