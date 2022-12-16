package com.keyin.finalSprint.order.model;

import com.keyin.finalSprint.order_detail.model.OrderDetail;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="orders")
public class Order {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id", nullable = false)
    @Id
    private long order_id;

    @Column(nullable = false)
    private int tax_rate;

    @Column(nullable = false)
    private double order_subtotal;

    @Column(nullable = false)
    private double order_total;

    @OneToMany(mappedBy = "orders", cascade = CascadeType.PERSIST)
    private List<OrderDetail> order_details;

    // Constructors
    public Order() {
    }

    public Order(long order_id, int tax_rate, double order_subtotal, double order_total) {
        this.order_id = order_id;
        this.tax_rate = tax_rate;
        this.order_subtotal = order_subtotal;
        this.order_total = order_total;
    }

    public Order(int tax_rate, double order_subtotal, double order_total) {
        this.tax_rate = tax_rate;
        this.order_subtotal = order_subtotal;
        this.order_total = order_total;
    }

    // Getters / Setters
    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
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
                "order_id=" + order_id +
                ", tax_rate=" + tax_rate +
                ", order_subtotal=" + order_subtotal +
                ", order_total=" + order_total +
                '}';
    }
}
