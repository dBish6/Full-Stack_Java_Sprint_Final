package com.keyin.finalSprint.order_details.controller;

import com.keyin.finalSprint.order_details.model.OrderDetails;
import com.keyin.finalSprint.order_details.respository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrderDetailsController {
        @Autowired
        private OrderDetailsRepository orderDetailsRepo;

        @PostMapping("/order-details")
        public void createOrderDetails(@RequestBody OrderDetails orderDetails){

//                System.out.println(orderDetails);
            orderDetailsRepo.save(orderDetails);
        }
}

