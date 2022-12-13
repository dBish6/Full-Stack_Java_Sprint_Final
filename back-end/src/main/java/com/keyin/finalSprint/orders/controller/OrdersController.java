package com.keyin.finalSprint.orders.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.keyin.finalSprint.order_details.model.OrderDetails;
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

    @PostMapping("/order")
    public void createOrder(@RequestBody String file){

        System.out.println(file);

        try {
            JSONObject order = new JSONObject(file);

            // Creating the orders object for this order
            Orders thisOrder = new Orders();

            thisOrder.setTax_rate((Integer) order.get("tax_rate"));
            thisOrder.setOrder_subtotal((Double) order.get("order_subtotal"));
            thisOrder.setOrder_total((Double) order.get("order_total"));

//            orderRepo.save(thisOrder);

            // Creating JSON Array for Order Details
            JSONArray orderDetails = (JSONArray) order.get("order_details");

            for(int i = 0; i < orderDetails.length(); i++){
                OrderDetails orderDetailsItem = new OrderDetails();

                orderDetailsItem.setQuantity((Integer) orderDetails.getJSONObject(i).get("quantity"));
                orderDetailsItem.setSword_id((Integer) orderDetails.getJSONObject(i).get("sword_id"));
                orderDetailsItem.setUnit_price((Double) orderDetails.getJSONObject(i).get("unit_price"));
                orderDetailsItem.setOrders(thisOrder);

                System.out.println(orderDetailsItem);


            }

        } catch (JSONException e) {
            throw new RuntimeException(e);
        }


//        try{
//            ObjectMapper mapper = new ObjectMapper();
//            String json = mapper.writeValueAsString(file);
//            JsonNode jsonNode = mapper.readTree(json);
//
//            // Get the tax Rate
//            JsonNode taxRateNode = jsonNode.get("tax_rate");
//            int tax_rate = taxRateNode.asInt();
//
//            // Get the Order Subtotal
//            JsonNode orderSubtotalNode = jsonNode.get("order_subtotal");
//            double orderSubtotal = orderSubtotalNode.asDouble();
//
//            // Get the Order Total
//            JsonNode orderTotalNode = jsonNode.get("order_total");
//            double orderTotal = orderTotalNode.asDouble();
//
//            // Order Details
//            JsonNode orderDetailsNode = jsonNode.get("orderDetails");
//
//            System.out.println(orderDetailsNode);
//
//            // Printing out values
//            System.out.println("Tax Rate: " + tax_rate);
//            System.out.println("Order Subtotal: " + orderSubtotal);
//            System.out.println("Order Total: " + orderTotal);
//
//        } catch (JsonProcessingException e) {
//            throw new RuntimeException(e);
//        }
//        orderRepo.save(thisOrder);
    }
}
