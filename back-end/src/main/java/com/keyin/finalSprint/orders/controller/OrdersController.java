package com.keyin.finalSprint.orders.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.keyin.finalSprint.orders.service.OrdersService;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrdersController {

    @Autowired
    OrdersService ordersService;

    @PostMapping("/order")
    public void createOrder(@RequestBody String file){

        ordersService.savePostRequestToDb(file);
    }

}
