package com.keyin.finalSprint.order_details.model;

import com.keyin.finalSprint.orders.model.Orders;
import jakarta.persistence.*;

@Entity
@Table(name="order_details")
public class OrderDetails {

    @Column(name = "order_details_id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_details_id;

    @Column(nullable = false)
    private long sword_id;

    @Column(nullable = false)
    private double unit_price;

    @Column(nullable = false)
    private int quantity;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="order_id")
    private Orders orders;

    // Constructors

    public OrderDetails() {
    }

    public OrderDetails(long sword_id, double unit_price, int quantity, Orders orders) {
        this.sword_id = sword_id;
        this.unit_price = unit_price;
        this.quantity = quantity;
        this.orders = orders;
    }

    public OrderDetails(long order_details_id, long sword_id, double unit_price, int quantity, Orders orders) {
        this.order_details_id = order_details_id;
        this.sword_id = sword_id;
        this.unit_price = unit_price;
        this.quantity = quantity;
        this.orders = orders;
    }

    // Getters and Setters
    public long getOrder_details_id() {
        return order_details_id;
    }

    public void setOrder_details_id(long order_details_id) {
        this.order_details_id = order_details_id;
    }

    public long getSword_id() {
        return sword_id;
    }

    public void setSword_id(long sword_id) {
        this.sword_id = sword_id;
    }

    public double getUnit_price() {
        return unit_price;
    }

    public void setUnit_price(double unit_price) {
        this.unit_price = unit_price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    @Override
    public String toString() {
        return "OrderDetails{" +
                "order_details_id=" + order_details_id +
                ", sword_id=" + sword_id +
                ", unit_price=" + unit_price +
                ", quantity=" + quantity +
                ", orders=" + orders +
                '}';
    }
}
