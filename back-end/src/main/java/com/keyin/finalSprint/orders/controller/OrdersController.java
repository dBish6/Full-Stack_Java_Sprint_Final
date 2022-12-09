package com.keyin.finalSprint.orders.controller;

import com.keyin.finalSprint.order_details.controller.OrderDetailsController;
import com.keyin.finalSprint.order_details.model.OrderDetails;
import com.keyin.finalSprint.order_details.respository.OrderDetailsRepository;
import com.keyin.finalSprint.orders.model.Orders;
import com.keyin.finalSprint.orders.respository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrdersController {

    @Autowired
    private OrdersRepository orderRepo;

    @PostMapping("/order")
    public void createOrder(@RequestBody Orders order, @RequestBody OrderDetails orderDetails){

        orderRepo.save(order);
//        OrderDetailsController.createOrderDetails
    }
}
