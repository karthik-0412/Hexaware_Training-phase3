set serveroutput on;

declare

salary number:= &salary;
total number;

begin

total := salary + salary*0.05 ;
dbms_output.put_line('Salary : ' || salary);
dbms_output.put_line('Total : ' || total);


end;
/