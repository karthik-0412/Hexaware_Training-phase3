package org.springexample;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

public class Student {
    @Id
    int rollno;
    @Column
    String name;
    @Column
    double marks;

    public Student() {
        // TODO Auto-generated constructor stub
    }



    public Student(int rollno, String name, double marks) {
        super();
        this.rollno = rollno;
        this.name = name;
        this.marks = marks;
    }



    public int getRollno() {
        return rollno;
    }
    public void setRollno(int rollno) {
        this.rollno = rollno;
    }
    public String getNameString() {
        return name;
    }
    public void setNameString(String name) {
        this.name = name;
    }
    public double getMarks() {
        return marks;
    }
    public void setMarks(double marks) {
        this.marks = marks;
    }
    @Override
    public String toString() {
        return "Student [rollno=" + rollno + ", nameString=" + name + ", marks=" + marks + "]";
    }


}