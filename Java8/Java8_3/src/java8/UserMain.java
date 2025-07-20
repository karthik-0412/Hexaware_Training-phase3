package java8;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

public class UserMain {
	
	public static void main(String[] args) {
		
		List<User> users = new ArrayList<>();
		 
	    users.add(new User(1, "Rahul", 50000.0));
	    users.add(new User(2, "Priya", 60000.0));
	    users.add(new User(3, "Amit", 55000.0));
	    users.add(new User(4, "Sneha", 70000.0));
	    users.add(new User(5, "Vikram", 48000.0));
	    users.add(new User(6, "Pooja", 62000.0));
	    users.add(new User(7, "Rohit", 75000.0));
	    users.add(new User(8, "Neha", 58000.0));
	    users.add(new User(9, "Ankit", 54000.0));
	    users.add(new User(10, "Kiran", 67000.0));
	    
//	    users.stream().filter((i)->i.getSalary()>45000)
//	    .forEach((u)-> System.out.println(u.toString()));
	    
	    //users.stream().map((i)->i.getSalary()+i.getSalary()*0.05).collect(Collectors.toList());
	    
	    
	    // Get the names of users whose names start with the letter 'P'.
	    
	    users.stream().filter((i)->i.getName().charAt(0)=='P').forEach((i)->System.out.println(i));
	    
	    // Use Stream API to get a list of users whose salary is greater than ₹60,000.
	    
	    users.stream().filter((i)->i.getSalary()>60000).forEach((i)->System.out.println(i));
	    
	    // Get Names of All Users in Uppercase
	    
	    users.stream().forEach((i)->System.out.println(i.getName().toUpperCase()));
	    
	    // Create a Map of user IDs and their names using Stream API.
	    
	    Map<Integer, String>um = users.stream().collect(Collectors.toMap(i->i.getUid(), i->i.getName()));
	    System.out.println(um);
	    
	    //Sort comparing name
	    
	    Collections.sort(users, (u1,u2)->u1.getName().compareTo(u2.getName()));
	    users.forEach((u)->System.out.println(u));
	    System.out.println("compare salary");
	    
	    //Sort comparing salary
	    
	    Collections.sort(users,(u1,u2)->u1.getSalary().compareTo(u2.getSalary()));
	    users.forEach((u)->System.out.println(u));
	    
	    //get max salary
	    
	     System.out.println(users.stream().max((u1,u2)->Double.compare(u1.getSalary(), u2.getSalary())));
	     
	     //get min salary
	     
	     System.out.println(users.stream().min((u1,u2)->Double.compare(u1.getSalary(), u2.getSalary())));
	     
	     String name = "Amit";
	     Scanner sc = new Scanner(System.in);
	     System.out.println("Enter "
	     		+ "");
	     
	     users.stream().filter((i)->i.getName()=="Amit").forEach((i)->System.out.println(i.getSalary()));
	    
	    
	    
	}


}
