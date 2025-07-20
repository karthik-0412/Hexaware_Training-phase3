set serveroutput on;

declare

salary number:=&salary;
bonus number;
tsal number;

begin

if salary<=5000 then
   bonus:=salary*5/100;
else
   bonus:=salary*10/100;
end if;

tsal:=salary+bonus;
dbms_output.put_line('Salary is ' || salary);
dbms_output.put_line('Bonus is ' || bonus);
dbms_output.put_line('Total salary is ' || tsal);


end;

/