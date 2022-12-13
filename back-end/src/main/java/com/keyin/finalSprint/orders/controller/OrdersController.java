package com.keyin.finalSprint.orders.controller;

import com.keyin.finalSprint.order_details.respository.OrderDetailsRepository;
import com.keyin.finalSprint.orders.model.Orders;
import com.keyin.finalSprint.orders.respository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrdersController {

    @Autowired
    private OrdersRepository orderRepo;

    @Autowired
    private OrderDetailsRepository orderDetailsRepo;

    @GetMapping("/all-orders")
    public List<Orders> getAllOrders(){
        return (List<Orders>) orderRepo.findAll();
    }

    @PostMapping("/order")
    public void createOrder(@RequestBody Orders order){

//        System.out.println("JSON entry: " + order);
        orderRepo.save(order);

//        System.out.println(getLastOrder(4));
    }
}
