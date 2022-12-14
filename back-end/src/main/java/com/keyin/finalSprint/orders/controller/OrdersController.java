package com.keyin.finalSprint.orders.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.keyin.finalSprint.order_details.model.OrderDetails;
import com.keyin.finalSprint.order_details.respository.OrderDetailsRepository;
import com.keyin.finalSprint.orders.model.Orders;
import com.keyin.finalSprint.orders.respository.OrdersRepository;
import org.aspectj.weaver.ast.Or;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class OrdersController {

    @Autowired
    private OrdersRepository orderRepo;

    @Autowired
    private OrderDetailsRepository orderDetailsRepo;

    @PostMapping("/order")
    public void createOrder(@RequestBody String file){

        try {
            JSONObject order = new JSONObject(file);

            // Creating the orders object for this order
            Orders thisOrder = new Orders();

            thisOrder.setTax_rate((Integer) order.get("tax_rate"));
            thisOrder.setOrder_subtotal((Double) order.get("order_subtotal"));
            thisOrder.setOrder_total((Double) order.get("order_total"));

            // Saving Order Details to Order Table
            orderRepo.save(thisOrder);

            // Creating JSON Array for Order Details
            JSONArray orderDetails = (JSONArray) order.get("order_details");

            for(int i = 0; i < orderDetails.length(); i++){
                // Getting each item for order
                // Creating an Order Details object and saving to Order Details Table
                OrderDetails orderDetailsItem = new OrderDetails();

                orderDetailsItem.setQuantity((Integer) orderDetails.getJSONObject(i).get("quantity"));
                orderDetailsItem.setSword_id((Integer) orderDetails.getJSONObject(i).get("sword_id"));
                orderDetailsItem.setUnit_price((Double) orderDetails.getJSONObject(i).get("unit_price"));
                orderDetailsItem.setOrders(thisOrder);

                // Saving Order Details to OrderDetails table
                orderDetailsRepo.save(orderDetailsItem);
            }

        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }
}
