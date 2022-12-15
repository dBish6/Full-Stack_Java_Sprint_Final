package com.keyin.finalSprint.orders.service;

import com.keyin.finalSprint.order_details.model.OrderDetails;
import com.keyin.finalSprint.orders.model.Orders;
import com.keyin.finalSprint.orders.respository.OrdersRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class OrdersServiceTest {

    @InjectMocks
    OrdersService ordersService;

    @Mock
    OrdersRepository ordersRepo;

//    @BeforeAll
//    public void init(){
//        MockitoAnnotations.openMocks(this);
//    }

    @Test
    public void saveOrderToDb() {
        // String for Method
        String inputString = "{\n" +
                "    \"tax_rate\": 0,\n" +
                "    \"order_subtotal\": 349.97,\n" +
                "    \"order_total\": 349.97,\n" +
                "        \"order_details\": \n" +
                "    [\n" +
                "    {\n" +
                "        \"sword_id\": 6,\n" +
                "        \"unit_price\": 99.99,\n" +
                "        \"quantity\": 2\n" +
                "    },\n" +
                "    {\n" +
                "        \"sword_id\": 9,\n" +
                "        \"unit_price\": 149.99,\n" +
                "        \"quantity\": 1\n" +
                "    }\n" +
                "    ]\n" +
                "}";

        Orders testOrder = new Orders(0, 349.97, 349.97);
        OrderDetails item1 = new OrderDetails(6, 99.99, 2, testOrder);
        OrderDetails item2 = new OrderDetails(9, 149.99, 1, testOrder);



    }
}
