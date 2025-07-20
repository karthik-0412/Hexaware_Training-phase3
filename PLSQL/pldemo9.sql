set serveroutput on;

declare

Roll number:= &Roll;
Fee number;


begin

select roll,fee into Roll,Fee from student
where roll = 101;

if fee>200 then
 update student set fee = fee + 100 where roll=Roll;

else
 update student set fee = fee + 200 where roll=Roll;

end if;
dbms_output.put_line(Roll || Fee);

end;

/