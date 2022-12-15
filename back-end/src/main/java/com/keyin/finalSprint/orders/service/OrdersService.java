package com.keyin.finalSprint.orders.service;

import com.keyin.finalSprint.order_details.model.OrderDetails;
import com.keyin.finalSprint.order_details.respository.OrderDetailsRepository;
import com.keyin.finalSprint.orders.model.Orders;
import com.keyin.finalSprint.orders.respository.OrdersRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersService {

    @Autowired
    private OrdersRepository orderRepo;

    @Autowired
    private OrderDetailsRepository orderDetailsRepo;

    public void savePostRequestToDb(String file){
        try {
            JSONObject order = new JSONObject(file);

            Orders thisOrder = createOrdersObject(order);

            // Saving Order Details to Order Table
            orderRepo.save(thisOrder);

            // Creating JSON Array for Order Details
            JSONArray orderDetails = createOrderDetailsJsonArray(order);

            for(int i = 0; i < orderDetails.length(); i++){
                // Getting each item for order
                // Creating an Order Details object and saving to Order Details Table
                OrderDetails orderDetailsItem = createOrderDetailsObject(thisOrder, orderDetails, i);

                // Saving Order Details to OrderDetails table
                orderDetailsRepo.save(orderDetailsItem);
            }

        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }

    private static OrderDetails createOrderDetailsObject(Orders thisOrder, JSONArray orderDetails, int i) throws JSONException {
        // Creates the OrderDetails Object and Returns
        OrderDetails orderDetailsItem = new OrderDetails();

        orderDetailsItem.setQuantity((Integer) orderDetails.getJSONObject(i).get("quantity"));
        orderDetailsItem.setSword_id((Integer) orderDetails.getJSONObject(i).get("sword_id"));
        orderDetailsItem.setUnit_price((Double) orderDetails.getJSONObject(i).get("unit_price"));
        orderDetailsItem.setOrders(thisOrder);
        return orderDetailsItem;
    }

    private static JSONArray createOrderDetailsJsonArray(JSONObject order) throws JSONException {
        // Creates & Returns orderDetails JSONArray
        JSONArray orderDetails = (JSONArray) order.get("order_details");
        return orderDetails;
    }

    private static Orders createOrdersObject(JSONObject order) throws JSONException {
        // Creating the Orders Object for this order
        Orders thisOrder = new Orders();

        thisOrder.setTax_rate((Integer) order.get("tax_rate"));
        thisOrder.setOrder_subtotal((Double) order.get("order_subtotal"));
        thisOrder.setOrder_total((Double) order.get("order_total"));
        return thisOrder;
    }

}
