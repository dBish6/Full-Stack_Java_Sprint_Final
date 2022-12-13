package com.keyin.finalSprint.order_details.respository;

import com.keyin.finalSprint.order_details.model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
}
