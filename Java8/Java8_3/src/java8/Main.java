package java8;

import java.util.Arrays;

public class Main {

	
	public static void main(String[] args) {
		
		String fruits[] = {"Apple","Orange","Kivi"};
		
		Arrays.stream(fruits).forEach((i)->System.out.println(i));
		Arrays.stream(fruits).filter((i)->i=="Apple").forEach((i)->System.out.println(i));
		
		int arr[] = {2,5,3,6,7,8};
		Arrays.stream(arr).filter((i)->i%2==0).forEach((i)->System.out.println(i));
		
		double sal[] = {1200,2300,4300,5000,5500,7500,1300,8900,4500};
		Arrays.stream(sal).filter((i)->i>5000).forEach((i)->System.out.println(i));
		
		String name[] = {"asha  ","pooja "," neha","nami "};
		Arrays.stream(name).forEach((i)->System.out.println(i.trim()));
		//Arrays.stream(name).map((i)->i.trim()).forEach((i)->System.out.println(i));
		
		
		
	}
}
