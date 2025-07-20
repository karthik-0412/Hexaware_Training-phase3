set serveroutput on;
 
 
declare

user_id VARCHAR2(50):='&user_id';
password_id VARCHAR2(50):='&password_id';
valid_user_id VARCHAR2(50):='name';
valid_password_id VARCHAR2(50):='surname';

begin

 if user_id=valid_user_id and password_id=valid_password_id then
 DBMS_OUTPUT.PUT_LINE('VALID USER');
 else
 DBMS_OUTPUT.PUT_LINE('invalid user or password');
 
 
 
end if;
 
 
 
end;
/
 