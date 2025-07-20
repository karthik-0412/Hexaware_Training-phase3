set serveroutput on;

declare

Name varchar2(25):='&Name';
Price number;
Type varchar2(25);
updated_price number;

begin

select name,price,type into Name,Price,Type from books where name = Name;

if Type = 'IT'
	updated_price := Price + Price*0.05;
else 
	updated_price := Price + Price*0.10;
end if;

update books
 set price = updated_price
 where name = Name;

dbms_output.put_line(Name || updated_price);



end;

/