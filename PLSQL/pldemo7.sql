set serveroutput on;

declare

num number:=&num;
num1 number:=num/2;
flag number:=0;

begin

if num = 1 then
 dbms_output.put_line('1 is prime number');
end if;

for i in 2..num1 loop
 if mod(num,i) = 0 then
 flag := 1;
  exit;
end if;
end loop;

if flag = 1 then 

dbms_output.put_line('It is not prime');
else 
dbms_output.put_line('It is prime number');
end if;



end;
/