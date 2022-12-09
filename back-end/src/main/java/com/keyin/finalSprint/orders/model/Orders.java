package com.keyin.finalSprint.orders.model;

import com.keyin.finalSprint.order_details.model.OrderDetails;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id", nullable = false)
    private long orderId;

    @Column(nullable = false)
    private int tax_rate;

    @Column(nullable = false)
    private double order_subtotal;

    @Column(nullable = false)
    private double order_total;

    @OneToMany(mappedBy = "orders")
    private List<OrderDetails> order_details;

    public Orders() {
    }

    // Constructors
    public Orders(long order_id, int tax_rate, double order_subtotal, double order_total) {
        this.orderId = order_id;
        this.tax_rate = tax_rate;
        this.order_subtotal = order_subtotal;
        this.order_total = order_total;
    }

    public Orders(int tax_rate, double order_subtotal, double order_total) {
        this.tax_rate = tax_rate;
        this.order_subtotal = order_subtotal;
        this.order_total = order_total;
    }

    // Getters / Setters
    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public int getTax_rate() {
        return tax_rate;
    }

    public void setTax_rate(int tax_rate) {
        this.tax_rate = tax_rate;
    }

    public double getOrder_subtotal() {
        return order_subtotal;
    }

    public void setOrder_subtotal(double order_subtotal) {
        this.order_subtotal = order_subtotal;
    }

    public double getOrder_total() {
        return order_total;
    }

    public void setOrder_total(double order_total) {
        this.order_total = order_total;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "order_id=" + orderId +
                ", tax_rate=" + tax_rate +
                ", order_subtotal=" + order_subtotal +
                ", order_total=" + order_total +
                '}';
    }
}
