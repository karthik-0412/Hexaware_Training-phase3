set serveroutput on;

declare

Roll number;
Fee number;

begin

select roll,fee into Roll,Fee from student
where roll = 101;

if fee>200 then
 update student set fee = fee + 100 where roll=101;

else
 update student set fee = fee + 200 where roll=101;

end if;
dbms_output.put_line(Roll || Fee);

end;

/