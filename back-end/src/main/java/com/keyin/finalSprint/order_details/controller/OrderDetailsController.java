package com.keyin.finalSprint.order_details.controller;

import com.keyin.finalSprint.order_details.model.OrderDetails;
import com.keyin.finalSprint.order_details.respository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class OrderDetailsController {
        @Autowired
        private OrderDetailsRepository orderDetailsRepo;

        public void createOrderDetails(OrderDetails orderDetails){

            orderDetailsRepo.save(orderDetails);
        }
}

