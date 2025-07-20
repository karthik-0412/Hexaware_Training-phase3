package java8;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main2 {
	
	public static void main(String[] args) {
		
		
		double salarys[]= {1200,3400,4500,1230,5600};
		
		List<Integer>sal =new ArrayList();
		sal.add(1200);
		sal.add(3400);
		sal.add(4500);
		sal.add(1230);
		sal.add(5600);
		
		sal.stream().map((s)->s+s*0.05).forEach((s)->System.out.println(s));
		
		List<Integer>sa = sal.stream().map((i)->i+i*5).collect(Collectors.toList());
		
		List<String> users= new ArrayList();
		users.add("ASha");
		users.add("Pooja");
		users.add("kavita");
		users.add("deepa");
		
		List<String>uname = users.stream().filter((i)->Character.isUpperCase(i.charAt(0))).
				collect(Collectors.toList());
		
		System.out.println(uname);
		
		
		
		
		
	}

}
