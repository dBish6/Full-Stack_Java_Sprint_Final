package com.keyin.finalSprint.orders.model;

import jakarta.persistence.*;

@Entity
@Table(schema="order")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id", nullable = false)
    private long order_id;

    @Column(nullable = false, length = 60)
    private String productName;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private double itemTotal;

    @Column(nullable = false)
    private double totalPrice;

    // Constructors
    public Orders(String productName, int quantity, double itemTotal, double totalPrice) {
        this.productName = productName;
        this.quantity = quantity;
        this.itemTotal = itemTotal;
        this.totalPrice = totalPrice;
    }

    public Orders(long order_id, String productName, int quantity, double itemTotal, double totalPrice) {
        this.order_id = order_id;
        this.productName = productName;
        this.quantity = quantity;
        this.itemTotal = itemTotal;
        this.totalPrice = totalPrice;
    }

    // Getters / Setters
    public double getItemTotal() {
        return itemTotal;
    }

    public void setItemTotal(double itemTotal) {
        this.itemTotal = itemTotal;
    }

    public long getId() {
        return order_id;
    }

    public void setId(long id) {
        order_id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
