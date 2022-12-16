package com.keyin.finalSprint.order.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.keyin.finalSprint.order.service.OrderService;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/order")
    public void createOrder(@RequestBody String file){

        orderService.savePostRequestToDb(file);
    }

}
