package com.example.springbootcrud.entity;

public class CustomerDTO {
    private int actno;
    private String name;
    private double balance;
    private String type;

    public CustomerDTO() {}

    public CustomerDTO(int actno, String name, double balance, String type) {
        this.actno = actno;
        this.name = name;
        this.balance = balance;
        this.type = type;
    }

    public int getActno() {
        return actno;
    }

    public void setActno(int actno) {
        this.actno = actno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

	@Override
	public String toString() {
		return "CustomerDTO [actno=" + actno + ", name=" + name + ", balance=" + balance + ", type=" + type + "]";
	}

}
