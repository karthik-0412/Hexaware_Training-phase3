set serveroutput on;

declare

fact number:=1;
num number:=&num;

begin

for i in 1..num Loop
fact:=fact*i;
end loop;

dbms_output.put_line('Factorial is ' || fact);

end;
/

