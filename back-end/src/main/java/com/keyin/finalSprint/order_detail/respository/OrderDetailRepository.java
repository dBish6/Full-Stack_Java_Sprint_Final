package com.keyin.finalSprint.order_detail.respository;

import com.keyin.finalSprint.order_detail.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
